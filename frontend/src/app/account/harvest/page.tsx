'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface CartItem {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
    badge?: string;
}

interface RelatedProduct {
    id: string;
    name: string;
    price: number;
    image: string;
}

const HarvestPage = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {
            id: '1',
            name: 'Wildflower Blossom Honey',
            description: 'Floral notes of lavender and clover. 500g Jar',
            price: 32.0,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1587049352205-8f4ee3991f87?w=300&h=300&fit=crop',
            badge: 'BESTSELLER',
        },
        {
            id: '2',
            name: 'Artisan Beeswax Candles',
            description: 'Set of 3, hand-rolled with pure apiary wax. Dry burn time.',
            price: 45.0,
            quantity: 2,
            image: 'https://images.unsplash.com/photo-1602062056235-2ce6d5e6e6e5?w=300&h=300&fit=crop',
            badge: 'ORGANIC',
        },
        {
            id: '3',
            name: 'Wildflower Blossom Honey',
            description: 'Floral notes of lavender and clover. 500g Jar',
            price: 32.0,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1587049352205-8f4ee3991f87?w=300&h=300&fit=crop',
            badge: 'BESTSELLER',
        },
        {
            id: '4',
            name: 'Artisan Beeswax Candles',
            description: 'Set of 3, hand-rolled with pure apiary wax. Dry burn time.',
            price: 45.0,
            quantity: 2,
            image: 'https://images.unsplash.com/photo-1602062056235-2ce6d5e6e6e5?w=300&h=300&fit=crop',
            badge: 'ORGANIC',
        },
        {
            id: '5',
            name: 'Wildflower Blossom Honey',
            description: 'Floral notes of lavender and clover. 500g Jar',
            price: 32.0,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1587049352205-8f4ee3991f87?w=300&h=300&fit=crop',
            badge: 'BESTSELLER',
        },
        {
            id: '6',
            name: 'Artisan Beeswax Candles',
            description: 'Set of 3, hand-rolled with pure apiary wax. Dry burn time.',
            price: 45.0,
            quantity: 2,
            image: 'https://images.unsplash.com/photo-1602062056235-2ce6d5e6e6e5?w=300&h=300&fit=crop',
            badge: 'ORGANIC',
        },
        {
            id: '7',
            name: 'Wildflower Blossom Honey',
            description: 'Floral notes of lavender and clover. 500g Jar',
            price: 32.0,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1587049352205-8f4ee3991f87?w=300&h=300&fit=crop',
            badge: 'BESTSELLER',
        },
        {
            id: '8',
            name: 'Artisan Beeswax Candles',
            description: 'Set of 3, hand-rolled with pure apiary wax. Dry burn time.',
            price: 45.0,
            quantity: 2,
            image: 'https://images.unsplash.com/photo-1602062056235-2ce6d5e6e6e5?w=300&h=300&fit=crop',
            badge: 'ORGANIC',
        },
    ]);

    const relatedProducts: RelatedProduct[] = [
        {
            id: '1',
            name: 'Wild Bee Pollen',
            price: 18.0,
            image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64b10?w=200&h=200&fit=crop',
        },
        {
            id: '2',
            name: 'Honey Dipper Set',
            price: 12.0,
            image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=200&h=200&fit=crop',
        },
        {
            id: '3',
            name: 'Raw Honeycomb',
            price: 24.0,
            image: 'https://images.unsplash.com/photo-1588195538326-c5b1e62f9a86?w=200&h=200&fit=crop',
        },
    ];

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 0; // Free shipping
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + tax;

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity <= 0) {
            removeItem(id);
            return;
        }
        setCartItems(
            cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
        );
    };

    const removeItem = (id: string) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    const [promoCode, setPromoCode] = useState('');
    const [scrollPosition, setScrollPosition] = useState(0);

    const scroll = (direction: 'left' | 'right') => {
        const container = document.getElementById('related-products');
        if (container) {
            const scrollAmount = 300;
            const newPosition = direction === 'left'
                ? scrollPosition - scrollAmount
                : scrollPosition + scrollAmount;
            container.scrollLeft = newPosition;
            setScrollPosition(newPosition);
        }
    };

    return (
        <>
            {/* Header */}
            <Navbar bg={true} />
            <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white px-4 py-6 sm:px-6 md:px-8">

                <div className="pt-15 md:pt-25 mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Your Harvest</h1>
                    <p className="text-sm sm:text-base text-gray-600 mt-2">
                        Review your curated selection of nature's finest offerings before they depart the apiary
                    </p>
                </div>

                {/* Main Cart Section */}
                <div className="flex flex-col md:flex-row gap-6 lg:gap-8 mb-12">
                    {/* Cart Items - Mobile First */}
                    <div className="w-full md:flex-1">
                        <div className="space-y-4">
                            {cartItems.length > 0 ? (
                                cartItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <div className="flex flex-col sm:flex-row gap-4 p-4 sm:p-6">
                                            {/* Product Image */}
                                            <div className="relative w-full sm:w-24 md:w-28 h-32 sm:h-24 md:h-28 flex-shrink-0">
                                                <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-100">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover"
                                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 100px, 112px"
                                                    />
                                                    {item.badge && (
                                                        <div className="absolute top-2 left-2 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded">
                                                            {item.badge}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Product Info */}
                                            <div className="flex-1 flex flex-col justify-between">
                                                <div>
                                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                                                        {item.name}
                                                    </h3>
                                                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                                        {item.description}
                                                    </p>
                                                </div>

                                                {/* Mobile: Quantity and Price */}
                                                <div className="flex items-center justify-between gap-4 mt-4 sm:mt-0">
                                                    {/* Quantity Control */}
                                                    <div className="flex items-center gap-2 bg-orange-100 rounded-md px-3 py-2">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="text-gray-700 hover:text-gray-900 font-semibold"
                                                        >
                                                            −
                                                        </button>
                                                        <span className="w-6 text-center font-medium text-gray-900">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="text-gray-700 hover:text-gray-900 font-semibold"
                                                        >
                                                            +
                                                        </button>
                                                    </div>

                                                    {/* Price */}
                                                    <div className="text-right">
                                                        <p className="text-xl sm:text-2xl font-bold text-amber-600">
                                                            ${(item.price * item.quantity).toFixed(2)}
                                                        </p>
                                                        {item.quantity > 1 && (
                                                            <p className="text-xs text-gray-500">
                                                                ${item.price.toFixed(2)} each
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Delete Button */}
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="self-start sm:self-center text-gray-400 hover:text-red-600 transition-colors p-2"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-12">
                                    <p className="text-gray-500">Your cart is empty</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Order Summary - Desktop */}
                    <div className="w-full md:w-80 lg:w-96">
                        <div className="bg-orange-50 rounded-2xl p-6 sm:p-8 sticky top-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

                            {/* Summary Items */}
                            <div className="space-y-4 pb-6 border-b-2 border-orange-200">
                                <div className="flex justify-between text-gray-700">
                                    <span>Subtotal</span>
                                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-700">
                                    <span>Shipping</span>
                                    <span className="font-semibold text-green-600">Complimentary</span>
                                </div>
                                <div className="flex justify-between text-gray-700">
                                    <span>Harvest Taxes</span>
                                    <span className="font-semibold">${tax.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Total */}
                            <div className="flex justify-between items-center my-6">
                                <span className="text-lg font-semibold text-gray-900">Total</span>
                                <span className="text-3xl font-bold text-amber-600">
                                    ${total.toFixed(2)}
                                </span>
                            </div>

                            {/* Checkout Button */}
                            <button className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 rounded-lg transition-colors mb-3">
                                PROCEED TO CHECKOUT
                            </button>

                            <p className="text-xs text-gray-600 text-center mb-6">
                                SECURE HARVEST PAYMENT PORTAL
                            </p>

                            {/* Benefits */}
                            <div className="space-y-3 text-sm">
                                <div className="flex items-start gap-3">
                                    <span className="text-amber-600 font-bold">📦</span>
                                    <span className="text-gray-700">Arrives in 2-4 business days</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-amber-600 font-bold">✓</span>
                                    <span className="text-gray-700">100% Raw & Ethically Harvested</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Promotion Code Section */}
                <div className="mb-12 max-w-md md:max-w-none">
                    <label className="text-sm font-semibold text-gray-900 block mb-3">
                        PROMOTION CODE
                    </label>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="text"
                            placeholder="GIFT24"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                        />
                        <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3 rounded-lg transition-colors w-full sm:w-auto">
                            Apply
                        </button>
                    </div>
                </div>

                {/* Complete Your Collection Section */}
                <div className="mt-12 mb-30">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            Complete Your Collection
                        </h2>
                        <div className="hidden sm:flex gap-2">
                            <button
                                onClick={() => scroll('left')}
                                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Related Products Carousel */}
                    <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                        <div
                            id="related-products"
                            className="flex gap-4 pb-4 scroll-smooth"
                        >
                            {relatedProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex-shrink-0 w-full sm:w-40 md:w-48"
                                >
                                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                                        {/* Product Image */}
                                        <div className="relative w-full h-40 sm:h-48 bg-gray-100 overflow-hidden">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 160px, 192px"
                                            />
                                        </div>

                                        {/* Product Info */}
                                        <div className="p-4">
                                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                                                {product.name}
                                            </h3>
                                            <p className="text-lg sm:text-xl font-bold text-amber-600 mt-2">
                                                ${product.price.toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Scroll Indicator */}
                    <div className="sm:hidden flex justify-center gap-2 mt-4">
                        {relatedProducts.map((_, index) => (
                            <div key={index} className="w-1 h-1 rounded-full bg-gray-300" />
                        ))}
                    </div>
                </div>

            </div>
            {/* Footer */}
            <Footer />
        </>
    );
};

export default HarvestPage;
