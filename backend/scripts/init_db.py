"""
Database initialization script with sample data.
Run this to create tables and populate with sample products.
"""
import asyncio
import sys
from pathlib import Path

# Add parent directory to path
sys.path.insert(0, str(Path(__file__).parent.parent))

from app.db.session import init_db, AsyncSessionLocal
from app.services.product_service import ProductService


async def create_sample_products():
    """Create sample honey products."""
    async with AsyncSessionLocal() as db:
        sample_products = [
            {
                "name": "Wildflower Honey",
                "description": "Pure, raw wildflower honey harvested from local wildflower meadows. Rich, complex flavor with floral notes.",
                "price": 12.99,
                "stock": 50,
                "category": "Raw Honey",
                "image_url": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500"
            },
            {
                "name": "Manuka Honey",
                "description": "Premium Manuka honey from New Zealand with MGO 400+. Known for its unique health properties.",
                "price": 49.99,
                "stock": 25,
                "category": "Premium Honey",
                "image_url": "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=500"
            },
            {
                "name": "Acacia Honey",
                "description": "Light, delicate acacia honey. Stays liquid longer and has a mild, sweet taste.",
                "price": 15.99,
                "stock": 40,
                "category": "Raw Honey",
                "image_url": "https://images.unsplash.com/photo-1558642891-54be180ea339?w=500"
            },
            {
                "name": "Buckwheat Honey",
                "description": "Dark, robust buckwheat honey with a strong, malty flavor. High in antioxidants.",
                "price": 13.99,
                "stock": 30,
                "category": "Raw Honey",
                "image_url": "https://images.unsplash.com/photo-1471943038103-4d0cb4c1f29e?w=500"
            },
            {
                "name": "Honeycomb",
                "description": "Pure honeycomb straight from the hive. Edible wax filled with raw honey.",
                "price": 24.99,
                "stock": 15,
                "category": "Specialty",
                "image_url": "https://images.unsplash.com/photo-1600671708877-379f7ca534f5?w=500"
            },
            {
                "name": "Creamed Honey",
                "description": "Smooth, spreadable creamed honey. Perfect for toast and baking.",
                "price": 11.99,
                "stock": 60,
                "category": "Processed Honey",
                "image_url": "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=500"
            },
            {
                "name": "Orange Blossom Honey",
                "description": "Citrus-scented honey from orange groves. Light color with a fresh, fruity taste.",
                "price": 14.99,
                "stock": 35,
                "category": "Raw Honey",
                "image_url": "https://images.unsplash.com/photo-1568486447706-98e1ba40c4f5?w=500"
            },
            {
                "name": "Honey Gift Set",
                "description": "Curated selection of 4 different honey varieties in 8oz jars. Perfect gift!",
                "price": 39.99,
                "stock": 20,
                "category": "Gift Sets",
                "image_url": "https://images.unsplash.com/photo-1607024875535-c8dd6fda9cd9?w=500"
            }
        ]
        
        print("Creating sample products...")
        for product_data in sample_products:
            product = await ProductService.create_product(db, **product_data)
            print(f"✅ Created: {product.name}")
        
        print(f"\n🎉 Successfully created {len(sample_products)} sample products!")


async def main():
    """Main initialization function."""
    print("🚀 Initializing database...")
    await init_db()
    print("✅ Database tables created")
    
    print("\n📦 Creating sample products...")
    await create_sample_products()
    
    print("\n✨ Database initialization complete!")


if __name__ == "__main__":
    asyncio.run(main())