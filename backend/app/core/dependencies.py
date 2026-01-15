from typing import Optional
from fastapi import Depends, HTTPException, status, Request
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.session import get_db
from app.db.models.user import User
from app.services.auth_service import AuthService
from app.utils.cookies import get_token_from_cookie
from app.core.security import decode_access_token


async def get_current_user(
    request: Request,
    db: AsyncSession = Depends(get_db)
) -> Optional[User]:
    """Get current user from cookie token (optional)."""
    token = get_token_from_cookie(request)
    
    if not token:
        return None
    
    payload = decode_access_token(token)
    if not payload:
        return None
    
    user_id = payload.get("sub")
    if not user_id:
        return None
    
    user = await AuthService.get_user_by_id(db, int(user_id))
    return user


async def require_current_user(
    request: Request,
    db: AsyncSession = Depends(get_db)
) -> User:
    """Require authenticated user (raises exception if not authenticated)."""
    user = await get_current_user(request, db)
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authenticated"
        )
    
    return user