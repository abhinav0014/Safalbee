'use client';
import React, { useState } from 'react';
import Link from 'next/link';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  badge?: string;
  onAddToCart?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, price, badge, onAddToCart }) => {
  return (
    <div className="relative w-xs max-w-sm bg-orange-300 rounded-lg shadow-md hover:shadow-lg transition-shadow m-2 sm:m-3 md:m-4 lg:m-5 pt-20 sm:pt-20 md:pt-24 lg:pt-28 flex flex-col">
      {/* Image Container - Floating with Bulge */}
      <div className="absolute w-24 sm:w-32 md:w-40 lg:w-48 left-1/2 transform -translate-x-1/2 -top-8 sm:-top-20 md:-top-17 lg:-top-19 flex-shrink-0">
        <img src={image} alt={title} className="w-full h-auto drop-shadow-lg object-contain rounded-md" />
        {badge && (
          <div className="relative w-10 sm:w-24 md:w-12 -top-1 sm:-top-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-2 py-0.5 sm:py-1 rounded-full text-xs sm:text-xs md:text-sm font-semibold whitespace-nowrap">
            {badge}
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="flex-grow p-3 sm:p-4 md:p-5 pt-0 text-center flex flex-col justify-between">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">{title}</h3>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 sm:mt-2">{description}</p>

        {/* Footer with Price and Button */}
        <div className="flex items-center justify-between mt-3 sm:mt-4 md:mt-5 lg:mt-6 gap-2 sm:gap-3">
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">${price.toFixed(2)}</span>
          <button
            onClick={onAddToCart}
            className="bg-amber-700 hover:bg-amber-800 text-white rounded-full p-1.5 sm:p-2 md:p-2.5 lg:p-3 transition-colors"
            aria-label="Add to cart"
          >
            <svg className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};



export { ProductCard };