'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../lib/types';
import { cart } from '../lib/cart';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAdding(true);
    cart.addItem(product, 1);
    
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group relative h-full bg-gradient-to-br from-yellow-100 to-amber-100 
                    dark:from-amber-950 dark:to-zinc-900
                    rounded-3xl overflow-hidden shadow-xl 
                    hover:shadow-2xl hover:shadow-amber-500/30
                    transition-all duration-500 hover:-translate-y-2
                    border-4 border-amber-300 dark:border-amber-700
                    hover:border-amber-400 dark:hover:border-amber-500
                    cursor-pointer">
        
        {/* Gradient Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 via-amber-400/0 to-orange-400/0
                      group-hover:from-amber-400/20 group-hover:via-orange-400/20 group-hover:to-yellow-400/20
                      transition-all duration-500 pointer-events-none"></div>

        {/* Stock Badge */}
        {product.stock > 0 && product.stock < 10 && (
          <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full
                        bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold
                        shadow-lg animate-pulse">
            Only {product.stock} left!
          </div>
        )}

        {product.stock === 0 && (
          <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full
                        bg-gray-500 text-white text-xs font-bold shadow-lg">
            Out of Stock
          </div>
        )}

        {/* Image Container */}
        <div className="relative h-72 overflow-hidden bg-gradient-to-br from-amber-200 to-yellow-200
                      dark:from-amber-900 dark:to-zinc-800">
          {product.image_url ? (
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-9xl animate-float">🍯</span>
            </div>
          )}
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content */}
        <div className="p-6 relative">
          {/* Rating */}
          <div className="flex items-center mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-amber-400 text-amber-400"
              />
            ))}
            <span className="ml-2 text-sm text-stone-600 dark:text-amber-300">
              (4.9)
            </span>
          </div>

          {/* Category */}
          {product.category && (
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3
                          bg-gradient-to-r from-emerald-400 to-green-400
                          text-white shadow-md">
              {product.category}
            </div>
          )}

          {/* Name */}
          <h3 className="text-2xl font-bold text-stone-900 dark:text-amber-100 mb-2
                       group-hover:text-amber-600 dark:group-hover:text-amber-400
                       transition-colors duration-300 line-clamp-2">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-stone-600 dark:text-amber-300 mb-4 line-clamp-2 text-sm leading-relaxed">
            {product.description}
          </p>

          {/* Price and Button */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600
                             dark:from-amber-400 dark:to-orange-400
                             bg-clip-text text-transparent">
                ${product.price.toFixed(2)}
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0 || isAdding}
              className={`group/btn relative px-6 py-3 rounded-full font-bold
                       transition-all duration-300 shadow-lg
                       ${product.stock === 0
                         ? 'bg-gray-400 cursor-not-allowed'
                         : isAdding
                         ? 'bg-green-500 text-white scale-95'
                         : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 hover:scale-105 hover:shadow-xl'
                       }`}
            >
              <span className="flex items-center space-x-2">
                <ShoppingCart className="w-5 h-5" />
                <span>{isAdding ? 'Added!' : 'Add'}</span>
              </span>
            </button>
          </div>
        </div>

        {/* Decorative Corner */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-amber-400/30 to-transparent
                      rounded-br-full transform -translate-x-10 -translate-y-10
                      group-hover:translate-x-0 group-hover:translate-y-0
                      transition-transform duration-500"></div>
      </div>
    </Link>
  );
}