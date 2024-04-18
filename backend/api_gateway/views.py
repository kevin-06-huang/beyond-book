from django.contrib.auth.models import User
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password
from django.views.decorators.http import require_http_methods
from django.contrib.auth import authenticate
from django.middleware.csrf import get_token
import google.generativeai as genai
import json, os

genai.configure(api_key=os.environ["GEMINI_API_KEY"])
model = genai.GenerativeModel('gemini-pro')

def message_view(request):
    data = {
        "message": "Welcome to the API Gateway!",
        "status": "success"
    }
    return JsonResponse(data)

def test_view(request):
    response = model.generate_content("Write a story about a magic backpack.")
    data = {
        "message": response.text,
        "status": "success"
    }
    return JsonResponse(data)

@csrf_exempt
@require_http_methods(["POST"])
def register(request):
    try:
        data = json.loads(request.body)

        username = data['username']
        email = data['email']
        password = data['password']

        user = User.objects.create(
            username=username,
            email=email,
            password=make_password(password)
        )

        return JsonResponse({'id': user.id, 'username': user.username, 'email': user.email}, status=201)
    except KeyError as e:
        return JsonResponse({'error': str(e) + ' is missing'}, status=400)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
    
@csrf_exempt
@require_http_methods(["POST"])
def login(request):
    try:
        data = json.loads(request.body)
        username = data['username']
        password = data['password']

        user = authenticate(username=username, password=password)

        if user is not None:
            csrf_token = get_token(request)
            return JsonResponse({'message': 'Login successful', 'csrfToken': csrf_token})
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=401)
    except KeyError as e:
        return JsonResponse({'error': str(e) + ' is missing'}, status=400)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
