from sqlalchemy import Column, String, Float, Integer, Text
from app.db.base import BaseModel


class Product(BaseModel):
    __tablename__ = "products"
    
    name = Column(String(255), nullable=False, index=True)
    description = Column(Text, nullable=True)
    price = Column(Float, nullable=False)
    stock = Column(Integer, default=0, nullable=False)
    image_url = Column(String(500), nullable=True)
    category = Column(String(100), nullable=True, index=True)
    
    def __repr__(self):
        return f"<Product(id={self.id}, name={self.name}, price={self.price})>"