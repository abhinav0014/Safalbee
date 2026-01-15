from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, status, Response
from sqlalchemy.ext.asyncio import AsyncSession
from pydantic import BaseModel, EmailStr
from app.db.session import get_db
from app.services.auth_service import AuthService
from app.utils.cookies import set_auth_cookie, delete_auth_cookie
from app.core.dependencies import get_current_user
from app.db.models.user import User

router = APIRouter()


# Pydantic schemas
class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserRegister(BaseModel):
    email: EmailStr
    password: str
    full_name: Optional[str] = None


class UserResponse(BaseModel):
    id: int
    email: str
    full_name: Optional[str]
    is_active: bool
    
    class Config:
        from_attributes = True


class AuthResponse(BaseModel):
    message: str
    user: UserResponse


@router.post("/login", response_model=AuthResponse)
async def login(
    credentials: UserLogin,
    response: Response,
    db: AsyncSession = Depends(get_db)
):
    """
    Authenticate user and set auth cookie.
    """
    user = await AuthService.authenticate_user(db, credentials.email, credentials.password)
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password"
        )
    
    # Create token and set cookie
    token = AuthService.create_token_for_user(user)
    set_auth_cookie(response, token)
    
    return {
        "message": "Login successful",
        "user": user
    }


@router.post("/register", response_model=AuthResponse, status_code=status.HTTP_201_CREATED)
async def register(
    user_data: UserRegister,
    response: Response,
    db: AsyncSession = Depends(get_db)
):
    """
    Register a new user and set auth cookie.
    """
    # Check if user already exists
    existing_user = await AuthService.get_user_by_email(db, user_data.email)
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )
    
    # Create user
    user = await AuthService.create_user(
        db,
        email=user_data.email,
        password=user_data.password,
        full_name=user_data.full_name
    )
    
    # Create token and set cookie
    token = AuthService.create_token_for_user(user)
    set_auth_cookie(response, token)
    
    return {
        "message": "Registration successful",
        "user": user
    }


@router.post("/logout")
async def logout(response: Response):
    """
    Logout user by deleting auth cookie.
    """
    delete_auth_cookie(response)
    return {"message": "Logout successful"}


@router.get("/me", response_model=UserResponse)
async def get_current_user_info(
    current_user: User = Depends(get_current_user)
):
    """
    Get current authenticated user info.
    """
    if not current_user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authenticated"
        )
    
    return current_user