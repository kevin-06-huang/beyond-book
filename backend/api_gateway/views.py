from django.http import JsonResponse, HttpResponse

def home_view(request):
    data = {
        "message": "Welcome to the API Gateway!",
        "status": "success"
    }
    return JsonResponse(data)
