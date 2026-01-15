from fastapi import APIRouter, Request, Depends, Form, Response
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.templating import Jinja2Templates
from sqlalchemy.ext.asyncio import AsyncSession
from typing import Optional
from app.db.session import get_db
from app.services.auth_service import AuthService
from app.utils.cookies import set_auth_cookie
from app.core.config import settings

router = APIRouter()
templates = Jinja2Templates(directory="app/ui/templates")


@router.get("/login", response_class=HTMLResponse)
async def login_page(request: Request):
    """Render login page."""
    return templates.TemplateResponse(
        "login.html",
        {"request": request}
    )


@router.post("/login")
async def login_submit(
    request: Request,
    response: Response,
    email: str = Form(...),
    password: str = Form(...),
    db: AsyncSession = Depends(get_db)
):
    """Process login form submission."""
    user = await AuthService.authenticate_user(db, email, password)
    
    if not user:
        return templates.TemplateResponse(
            "login.html",
            {
                "request": request,
                "error": "Invalid email or password",
                "email": email
            }
        )
    
    # Create token and set cookie
    token = AuthService.create_token_for_user(user)
    
    # Redirect to frontend
    redirect_response = RedirectResponse(url=settings.FRONTEND_URL, status_code=302)
    set_auth_cookie(redirect_response, token)
    
    return redirect_response


@router.get("/register", response_class=HTMLResponse)
async def register_page(request: Request):
    """Render registration page."""
    return templates.TemplateResponse(
        "register.html",
        {"request": request}
    )


@router.post("/register")
async def register_submit(
    request: Request,
    response: Response,
    email: str = Form(...),
    password: str = Form(...),
    confirm_password: str = Form(...),
    full_name: Optional[str] = Form(None),
    db: AsyncSession = Depends(get_db)
):
    """Process registration form submission."""
    # Validate passwords match
    if password != confirm_password:
        return templates.TemplateResponse(
            "register.html",
            {
                "request": request,
                "error": "Passwords do not match",
                "email": email,
                "full_name": full_name
            }
        )
    
    # Check if user exists
    existing_user = await AuthService.get_user_by_email(db, email)
    if existing_user:
        return templates.TemplateResponse(
            "register.html",
            {
                "request": request,
                "error": "Email already registered",
                "email": email,
                "full_name": full_name
            }
        )
    
    # Create user
    user = await AuthService.create_user(
        db,
        email=email,
        password=password,
        full_name=full_name
    )
    
    # Create token and set cookie
    token = AuthService.create_token_for_user(user)
    
    # Redirect to frontend
    redirect_response = RedirectResponse(url=settings.FRONTEND_URL, status_code=302)
    set_auth_cookie(redirect_response, token)
    
    return redirect_response


@router.get("/logout")
async def logout(response: Response):
    """Logout user."""
    from app.utils.cookies import delete_auth_cookie
    
    redirect_response = RedirectResponse(url="/ui/auth/login", status_code=302)
    delete_auth_cookie(redirect_response)
    
    return redirect_response