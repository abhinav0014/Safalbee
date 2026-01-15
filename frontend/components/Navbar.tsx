'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X, User, LogOut } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { api } from '../lib/api';
import { cart } from '../lib/cart';
import { User as UserType } from '../lib/types';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState<UserType | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateCartCount = () => setCartCount(cart.getItemCount());
    updateCartCount();
    window.addEventListener('cartChange', updateCartCount);
    return () => window.removeEventListener('cartChange', updateCartCount);
  }, []);

  useEffect(() => {
    api.getCurrentUser().then(setUser);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    await api.logout();
    window.location.href = '/';
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/cart', label: 'Cart' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400 shadow-2xl' 
        : 'bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300 
                            drop-shadow-lg group-hover:animate-bounce-slow">
                🍯
              </div>
            </div>
            <span className="text-2xl font-bold text-white drop-shadow-lg 
                           group-hover:text-yellow-100 transition-colors">
              Honey Hive
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-white font-semibold text-lg hover:text-yellow-100 
                         transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white 
                               group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            
            <Link
              href="/cart"
              className="relative p-3 rounded-full bg-white/20 hover:bg-white/30 
                       transition-all duration-300 hover:scale-110 group"
            >
              <ShoppingCart className="w-6 h-6 text-white" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs 
                               font-bold rounded-full w-6 h-6 flex items-center justify-center
                               animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>

            {user ? (
              <div className="flex items-center space-x-3">
                <Link 
                  href="/account"
                  className="flex items-center space-x-2 px-4 py-2 rounded-full 
                           bg-white/20 hover:bg-white/30 transition-all duration-300"
                >
                  <User className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">{user.full_name || user.email}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 
                           transition-all duration-300 hover:scale-110"
                >
                  <LogOut className="w-5 h-5 text-white" />
                </button>
              </div>
            ) : (
              <a
                href={api.getLoginUrl()}
                className="px-6 py-3 rounded-full bg-white text-amber-600 font-bold
                         hover:bg-yellow-100 transition-all duration-300 hover:scale-105
                         shadow-lg hover:shadow-xl"
              >
                Login
              </a>
            )}

            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-zinc-900/95 backdrop-blur-lg 
                      border-t border-amber-300 dark:border-amber-700 animate-slide-down">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-stone-900 dark:text-amber-100 
                         font-semibold hover:bg-amber-100 dark:hover:bg-amber-950 
                         transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {user ? (
              <>
                <Link
                  href="/account"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-stone-900 dark:text-amber-100 
                           font-semibold hover:bg-amber-100 dark:hover:bg-amber-950"
                >
                  Account
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 rounded-lg text-stone-900 dark:text-amber-100 
                           font-semibold hover:bg-amber-100 dark:hover:bg-amber-950"
                >
                  Logout
                </button>
              </>
            ) : (
              <a
                href={api.getLoginUrl()}
                className="block px-4 py-3 rounded-lg bg-gradient-to-r from-amber-400 
                         to-orange-400 text-white font-bold text-center hover:from-amber-500 
                         hover:to-orange-500"
              >
                Login
              </a>
            )}
            <div className="flex justify-center pt-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}