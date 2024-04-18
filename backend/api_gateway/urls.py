from django.urls import path
from .views import message_view, test_view, register, login

urlpatterns = [
    path('message', message_view, name='message'),
    path('test', test_view, name='test'),
    path('registration', register, name='register'),
    path('login', login, name='login'),
]
