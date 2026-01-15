from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.ext.asyncio import AsyncSession
from pydantic import BaseModel
from datetime import datetime
from app.db.session import get_db
from app.services.product_service import ProductService

router = APIRouter()


# Pydantic schemas
class ProductResponse(BaseModel):
    id: int
    name: str
    description: Optional[str]
    price: float
    stock: int
    image_url: Optional[str]
    category: Optional[str]
    created_at: datetime
    
    class Config:
        from_attributes = True


class ProductCreate(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    stock: int = 0
    image_url: Optional[str] = None
    category: Optional[str] = None


@router.get("/", response_model=List[ProductResponse])
async def get_products(
    skip: int = Query(0, ge=0),
    limit: int = Query(100, ge=1, le=100),
    category: Optional[str] = Query(None),
    db: AsyncSession = Depends(get_db)
):
    """
    Get all products (public endpoint).
    
    - **skip**: Number of products to skip
    - **limit**: Maximum number of products to return
    - **category**: Filter by category (optional)
    """
    products = await ProductService.get_all_products(db, skip, limit, category)
    return products


@router.get("/{product_id}", response_model=ProductResponse)
async def get_product(
    product_id: int,
    db: AsyncSession = Depends(get_db)
):
    """Get a single product by ID."""
    product = await ProductService.get_product_by_id(db, product_id)
    
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    
    return product


@router.post("/", response_model=ProductResponse, status_code=201)
async def create_product(
    product_data: ProductCreate,
    db: AsyncSession = Depends(get_db)
):
    """
    Create a new product.
    Note: In production, this should require authentication and admin privileges.
    """
    product = await ProductService.create_product(
        db=db,
        name=product_data.name,
        description=product_data.description,
        price=product_data.price,
        stock=product_data.stock,
        image_url=product_data.image_url,
        category=product_data.category
    )
    
    return product