'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Star, ShoppingCart, Heart, Share2, Minus, Plus, ArrowLeft, Check } from 'lucide-react';
import { api } from '@/lib/api';
import { cart } from '@/lib/cart';
import { Product } from '@/lib/types';

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await api.getProduct(Number(params.id));
        setProduct(data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  const handleAddToCart = () => {
    if (!product) return;
    
    setIsAdding(true);
    cart.addItem(product, quantity);
    
    setTimeout(() => setIsAdding(false), 1500);
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-amber-50 to-orange-100
                    dark:from-zinc-950 dark:to-amber-950 flex items-center justify-center">
        <div className="text-center">
          <div className="text-9xl animate-bounce mb-6">🍯</div>
          <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">
            Loading sweet details...
          </p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-amber-50 to-orange-100
                    dark:from-zinc-950 dark:to-amber-950 flex items-center justify-center">
        <div className="text-center">
          <div className="text-9xl mb-6">😢</div>
          <h1 className="text-4xl font-bold text-stone-900 dark:text-amber-100 mb-4">
            Product Not Found
          </h1>
          <Link href="/products" className="text-amber-600 dark:text-amber-400 hover:underline text-xl">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50
                  dark:from-zinc-950 dark:via-amber-950 dark:to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/products"
          className="inline-flex items-center space-x-2 mb-8 text-amber-600 dark:text-amber-400
                   hover:text-amber-700 dark:hover:text-amber-300 transition-colors font-semibold text-lg"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Products</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl
                          border-8 border-amber-400 dark:border-amber-600
                          bg-gradient-to-br from-amber-200 to-yellow-200
                          dark:from-amber-900 dark:to-zinc-800 relative group">
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
              
              {/* Stock Badge */}
              {product.stock > 0 && product.stock < 10 && (
                <div className="absolute top-6 right-6 px-4 py-2 rounded-full
                              bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold
                              shadow-lg animate-pulse">
                  Only {product.stock} left!
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Category & Rating */}
            <div className="flex items-center justify-between">
              {product.category && (
                <span className="px-4 py-2 rounded-full text-sm font-bold
                               bg-gradient-to-r from-emerald-400 to-green-400
                               text-white shadow-md">
                  {product.category}
                </span>
              )}
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-stone-600 dark:text-amber-300 font-semibold">
                  (128 reviews)
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold
                         bg-gradient-to-r from-amber-600 to-orange-600
                         dark:from-amber-400 dark:to-orange-400
                         bg-clip-text text-transparent leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline space-x-4">
              <span className="text-6xl font-bold bg-gradient-to-r from-amber-600 to-orange-600
                             dark:from-amber-400 dark:to-orange-400
                             bg-clip-text text-transparent">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-2xl text-stone-600 dark:text-amber-300">per jar</span>
            </div>

            {/* Description */}
            <p className="text-xl text-stone-700 dark:text-amber-300 leading-relaxed
                        p-6 rounded-2xl bg-amber-100 dark:bg-amber-950 border-2 border-amber-300 dark:border-amber-800">
              {product.description}
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '💪', text: 'Natural Energy' },
                { icon: '🛡️', text: 'Antioxidants' },
                { icon: '🌿', text: '100% Natural' },
                { icon: '🏆', text: 'Premium Quality' },
              ].map((benefit, i) => (
                <div key={i} className="flex items-center space-x-3 p-4 rounded-xl
                                      bg-gradient-to-r from-amber-100 to-yellow-100
                                      dark:from-amber-950 dark:to-zinc-800
                                      border-2 border-amber-300 dark:border-amber-700">
                  <span className="text-3xl">{benefit.icon}</span>
                  <span className="font-semibold text-stone-900 dark:text-amber-100">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Quantity Selector */}
            <div className="space-y-4">
              <label className="text-lg font-bold text-stone-900 dark:text-amber-100">
                Quantity
              </label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-4 rounded-full bg-amber-200 dark:bg-amber-900 
                           hover:bg-amber-300 dark:hover:bg-amber-800
                           transition-colors shadow-lg hover:scale-110"
                >
                  <Minus className="w-5 h-5 text-stone-900 dark:text-amber-100" />
                </button>
                <span className="text-4xl font-bold text-stone-900 dark:text-amber-100 w-16 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  disabled={quantity >= product.stock}
                  className="p-4 rounded-full bg-amber-200 dark:bg-amber-900 
                           hover:bg-amber-300 dark:hover:bg-amber-800
                           disabled:opacity-50 disabled:cursor-not-allowed
                           transition-colors shadow-lg hover:scale-110"
                >
                  <Plus className="w-5 h-5 text-stone-900 dark:text-amber-100" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0 || isAdding}
                className={`flex-1 flex items-center justify-center space-x-3 px-8 py-5
                         rounded-full font-bold text-xl shadow-2xl
                         transition-all duration-300
                         ${product.stock === 0
                           ? 'bg-gray-400 cursor-not-allowed'
                           : isAdding
                           ? 'bg-green-500 text-white scale-95'
                           : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 hover:scale-105'
                         }`}
              >
                {isAdding ? (
                  <>
                    <Check className="w-6 h-6" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-6 h-6" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>

              <button className="p-5 rounded-full bg-amber-200 dark:bg-amber-900
                               hover:bg-amber-300 dark:hover:bg-amber-800
                               transition-all duration-300 hover:scale-110 shadow-lg">
                <Heart className="w-7 h-7 text-stone-900 dark:text-amber-100" />
              </button>

              <button className="p-5 rounded-full bg-amber-200 dark:bg-amber-900
                               hover:bg-amber-300 dark:hover:bg-amber-800
                               transition-all duration-300 hover:scale-110 shadow-lg">
                <Share2 className="w-7 h-7 text-stone-900 dark:text-amber-100" />
              </button>
            </div>

            {/* Stock Status */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-100 to-green-100
                          dark:from-emerald-950 dark:to-green-950
                          border-2 border-emerald-300 dark:border-emerald-800">
              <div className="flex items-center space-x-3">
                <Check className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <span className="text-lg font-semibold text-emerald-800 dark:text-emerald-300">
                  {product.stock > 0 ? 'In Stock - Ships in 2-3 days' : 'Out of Stock'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}