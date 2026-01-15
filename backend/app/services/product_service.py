from typing import List, Optional
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.db.models.product import Product


class ProductService:
    @staticmethod
    async def get_all_products(
        db: AsyncSession, 
        skip: int = 0, 
        limit: int = 100,
        category: Optional[str] = None
    ) -> List[Product]:
        """Get all products with optional filtering."""
        query = select(Product)
        
        if category:
            query = query.where(Product.category == category)
        
        query = query.offset(skip).limit(limit)
        result = await db.execute(query)
        return result.scalars().all()
    
    @staticmethod
    async def get_product_by_id(db: AsyncSession, product_id: int) -> Optional[Product]:
        """Get a single product by ID."""
        result = await db.execute(select(Product).where(Product.id == product_id))
        return result.scalar_one_or_none()
    
    @staticmethod
    async def create_product(
        db: AsyncSession,
        name: str,
        description: str,
        price: float,
        stock: int,
        image_url: Optional[str] = None,
        category: Optional[str] = None
    ) -> Product:
        """Create a new product."""
        product = Product(
            name=name,
            description=description,
            price=price,
            stock=stock,
            image_url=image_url,
            category=category
        )
        
        db.add(product)
        await db.commit()
        await db.refresh(product)
        
        return product