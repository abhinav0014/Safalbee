'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { cart } from '../lib/cart';
import { CartItem } from '../lib/types';

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    updateCart();
    const handleCartChange = () => updateCart();
    window.addEventListener('cartChange', handleCartChange);
    return () => window.removeEventListener('cartChange', handleCartChange);
  }, []);

  const updateCart = () => {
    setItems(cart.getItems());
    setTotal(cart.getTotal());
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    cart.updateQuantity(productId, newQuantity);
  };

  const removeItem = (productId: number) => {
    cart.removeItem(productId);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-amber-50 to-orange-100
                    dark:from-zinc-950 dark:to-amber-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-9xl mb-8 animate-bounce">🛒</div>
          <h1 className="text-5xl font-bold text-stone-900 dark:text-amber-100 mb-6">
            Your Cart is Empty
          </h1>
          <p className="text-xl text-stone-600 dark:text-amber-300 mb-12">
            Time to fill it with some sweet, golden goodness!
          </p>
          <Link
            href="/products"
            className="inline-flex items-center space-x-3 px-10 py-5 rounded-full
                     bg-gradient-to-r from-amber-500 to-orange-500
                     text-white font-bold text-xl shadow-2xl
                     hover:from-amber-600 hover:to-orange-600
                     hover:scale-105 transition-all duration-300"
          >
            <ShoppingBag className="w-6 h-6" />
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50
                  dark:from-zinc-950 dark:via-amber-950 dark:to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-slide-up">
          <h1 className="text-6xl font-bold mb-4
                       bg-gradient-to-r from-amber-600 to-orange-600
                       dark:from-amber-400 dark:to-orange-400
                       bg-clip-text text-transparent">
            Your Cart
          </h1>
          <p className="text-xl text-stone-600 dark:text-amber-300">
            {items.length} {items.length === 1 ? 'item' : 'items'} ready for checkout
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="group bg-gradient-to-br from-yellow-100 to-amber-100
                         dark:from-amber-950 dark:to-zinc-900
                         rounded-3xl p-6 shadow-xl
                         border-4 border-amber-300 dark:border-amber-700
                         hover:border-amber-400 dark:hover:border-amber-500
                         transition-all duration-300"
              >
                <div className="flex gap-6">
                  {/* Image */}
                  <div className="flex-shrink-0 w-32 h-32 rounded-2xl overflow-hidden
                                bg-gradient-to-br from-amber-200 to-yellow-200
                                dark:from-amber-900 dark:to-zinc-800
                                border-4 border-amber-300 dark:border-amber-700">
                    {item.product.image_url ? (
                      <img
                        src={item.product.image_url}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-6xl">🍯</span>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <Link
                        href={`/products/${item.product.id}`}
                        className="text-2xl font-bold text-stone-900 dark:text-amber-100
                                 hover:text-amber-600 dark:hover:text-amber-400
                                 transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      {item.product.category && (
                        <p className="text-sm text-stone-600 dark:text-amber-400 mt-1">
                          {item.product.category}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-2 rounded-full bg-amber-200 dark:bg-amber-900
                                   hover:bg-amber-300 dark:hover:bg-amber-800
                                   transition-colors shadow-md"
                        >
                          <Minus className="w-4 h-4 text-stone-900 dark:text-amber-100" />
                        </button>
                        <span className="text-2xl font-bold text-stone-900 dark:text-amber-100 w-12 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          disabled={item.quantity >= item.product.stock}
                          className="p-2 rounded-full bg-amber-200 dark:bg-amber-900
                                   hover:bg-amber-300 dark:hover:bg-amber-800
                                   disabled:opacity-50 disabled:cursor-not-allowed
                                   transition-colors shadow-md"
                        >
                          <Plus className="w-4 h-4 text-stone-900 dark:text-amber-100" />
                        </button>
                      </div>

                      {/* Price & Remove */}
                      <div className="flex items-center space-x-6">
                        <span className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600
                                       dark:from-amber-400 dark:to-orange-400
                                       bg-clip-text text-transparent">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="p-3 rounded-full bg-red-100 dark:bg-red-950
                                   hover:bg-red-200 dark:hover:bg-red-900
                                   transition-colors shadow-md group/btn"
                        >
                          <Trash2 className="w-5 h-5 text-red-600 dark:text-red-400
                                           group-hover/btn:scale-110 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-gradient-to-br from-amber-200 to-yellow-200
                          dark:from-amber-900 dark:to-zinc-800
                          rounded-3xl p-8 shadow-2xl
                          border-4 border-amber-400 dark:border-amber-600">
              <h2 className="text-3xl font-bold text-stone-900 dark:text-amber-100 mb-8
                           border-b-4 border-amber-400 dark:border-amber-600 pb-4">
                Order Summary
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-lg">
                  <span className="text-stone-700 dark:text-amber-300">Subtotal</span>
                  <span className="font-bold text-stone-900 dark:text-amber-100">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-stone-700 dark:text-amber-300">Shipping</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    FREE
                  </span>
                </div>
                <div className="border-t-2 border-amber-400 dark:border-amber-600 pt-4">
                  <div className="flex justify-between text-2xl font-bold">
                    <span className="text-stone-900 dark:text-amber-100">Total</span>
                    <span className="bg-gradient-to-r from-amber-600 to-orange-600
                                   dark:from-amber-400 dark:to-orange-400
                                   bg-clip-text text-transparent">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                className="w-full flex items-center justify-center space-x-3 px-8 py-5
                         rounded-full font-bold text-xl shadow-2xl
                         bg-gradient-to-r from-amber-500 to-orange-500
                         text-white hover:from-amber-600 hover:to-orange-600
                         hover:scale-105 transition-all duration-300 mb-4"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-6 h-6" />
              </button>

              <Link
                href="/products"
                className="block text-center text-amber-600 dark:text-amber-400
                         hover:text-amber-700 dark:hover:text-amber-300
                         font-semibold transition-colors"
              >
                Continue Shopping
              </Link>

              {/* Trust Badges */}
              <div className="mt-8 pt-8 border-t-2 border-amber-400 dark:border-amber-600 space-y-3">
                <div className="flex items-center space-x-3 text-sm text-stone-700 dark:text-amber-300">
                  <span className="text-2xl">🔒</span>
                  <span>Secure Checkout</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-stone-700 dark:text-amber-300">
                  <span className="text-2xl">🚚</span>
                  <span>Free Shipping on All Orders</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-stone-700 dark:text-amber-300">
                  <span className="text-2xl">↩️</span>
                  <span>30-Day Money Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}