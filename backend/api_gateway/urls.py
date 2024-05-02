from django.urls import path
from .views import message_view, test_view, ensure_csrf_cookie_view,register_view, login_view, logout_view, check_session_view

urlpatterns = [
    path('message', message_view, name='message'),
    path('test', test_view, name='test'),
    path('csrf-cookie', ensure_csrf_cookie_view, name='ensure-csrf-cookie'),
    path('registration', register_view, name='register'),
    path('login', login_view, name='login'),
    path('logout', logout_view, name='logout'),
    path('check-session', check_session_view, name='check-session'),
]
