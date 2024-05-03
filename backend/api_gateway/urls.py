from django.urls import path
from .views import (
    check_session_view,
    ensure_csrf_cookie_view,
    generate_view,
    login_view,
    logout_view,
    register_view,
    save_book_view,
    get_all_books_view,
)

urlpatterns = [
    path("generate", generate_view, name="generate"),
    path("csrf-cookie", ensure_csrf_cookie_view, name="ensure-csrf-cookie"),
    path("registration", register_view, name="register"),
    path("login", login_view, name="login"),
    path("logout", logout_view, name="logout"),
    path("check-session", check_session_view, name="check-session"),
    path("save-book", save_book_view, name="save-book"),
    path("get-all-books", get_all_books_view, name="get-all-books"),
]
