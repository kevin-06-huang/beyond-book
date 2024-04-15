from django.urls import path
from .views import message_view, test_view

urlpatterns = [
    path('message', message_view, name='message'),
    path('test', test_view, name='test'),
]
