from django.contrib.auth.models import User
from django.http import JsonResponse
from django.contrib.auth.hashers import make_password
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_protect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.middleware.csrf import get_token
from django.conf import settings
from .middleware import process_generative_text
from .models import Book

import google.generativeai as genai
import json, os

genai.configure(api_key=os.environ["GEMINI_API_KEY"])
model = genai.GenerativeModel("gemini-pro")


def generate_view(request):
    try:
        response = model.generate_content(
            """
                Please generate a children's story, around 1000 words,
                with an appropriate title for the entire story.
                Please separate the story into pages, with each page
                roughly 75 - 100 words long,
                and put dividers between the pages like this: "-----".
                Please don't put in page numbers.
            """
        )

        [title, pages] = process_generative_text(response.text)
        data = {"book": {"title": title, "pages": pages}, "status": "success"}

        return JsonResponse(data)

    except ValueError as e:
        error_data = {"error": str(e), "status": "error"}
        return JsonResponse(error_data, status=400)


def ensure_csrf_cookie_view(request):
    try:
        get_token(request)
        return JsonResponse({"detail": "CSRF cookie set"})
    except ValueError as e:
        return JsonResponse({"error": e}, status=401)


@csrf_protect
@require_http_methods(["POST"])
def register_view(request):
    try:
        data = json.loads(request.body)

        username = data["username"]
        email = data["email"]
        password = data["password"]

        user = User.objects.create(
            username=username, email=email, password=make_password(password)
        )

        login(request, user)
        return JsonResponse(
            {"id": user.id, "username": user.username, "email": user.email}, status=201
        )
    except KeyError as e:
        return JsonResponse({"error": str(e) + " is missing"}, status=400)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)


@csrf_protect
@require_http_methods(["POST"])
def login_view(request):
    try:
        data = json.loads(request.body)
        username = data["username"]
        password = data["password"]

        user = authenticate(username=username, password=password)

        if user is not None:
            login(request, user)
            return JsonResponse({"message": "Login successful"})
        else:
            return JsonResponse({"error": "Invalid credentials"}, status=401)
    except KeyError as e:
        return JsonResponse({"error": str(e) + " is missing"}, status=400)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)


def logout_view(request):
    try:
        logout(request)
        return JsonResponse({"message": "Logged out"}, status=200)
    except ValueError as e:
        return JsonResponse({"error": e}, status=401)


@login_required
def check_session_view(request):
    if request.user.is_authenticated:
        return JsonResponse(
            {
                "is_authenticated": True,
                "username": request.user.username,
            }
        )
    else:
        return JsonResponse({"is_authenticated": False}, status=401)


@csrf_protect
@require_http_methods(["POST"])
def save_book_view(request):
    try:
        data = json.loads(request.body)
        book = Book.objects.create(title=data["title"], pages=data["pages"])

        return JsonResponse({"status": "success", "book_id": book.id}, status=201)
    except json.JSONDecodeError:
        return JsonResponse({"status": "error", "message": "Invalid JSON"}, status=400)
    except KeyError:
        return JsonResponse(
            {"status": "error", "message": "Missing title or pages"}, status=400
        )
