from fastapi import Response, Request
from app.core.config import settings
from typing import Optional


def set_auth_cookie(response: Response, token: str) -> None:
    """Set authentication cookie in response."""
    response.set_cookie(
        key=settings.COOKIE_NAME,
        value=token,
        httponly=settings.COOKIE_HTTPONLY,
        secure=settings.COOKIE_SECURE,
        samesite=settings.COOKIE_SAMESITE,
        max_age=settings.ACCESS_TOKEN_EXPIRE_MINUTES * 60,
        domain=settings.COOKIE_DOMAIN if settings.COOKIE_DOMAIN != "localhost" else None
    )


def delete_auth_cookie(response: Response) -> None:
    """Delete authentication cookie from response."""
    response.delete_cookie(
        key=settings.COOKIE_NAME,
        domain=settings.COOKIE_DOMAIN if settings.COOKIE_DOMAIN != "localhost" else None
    )


def get_token_from_cookie(request: Request) -> Optional[str]:
    """Extract token from cookie."""
    return request.cookies.get(settings.COOKIE_NAME)