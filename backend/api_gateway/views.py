from django.http import JsonResponse, HttpResponse
import google.generativeai as genai
import os

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
