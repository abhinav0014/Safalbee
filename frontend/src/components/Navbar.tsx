'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC<{ bg?: boolean }> = ({ bg = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(bg);

  React.useEffect(() => {
    const handleScroll = () => {
      if (bg) {
        setIsScrolled(true);
        return;
      }
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { href: '/shop', label: 'Shop' },
    { href: '/our-story', label: 'Our Story' },
    { href: '/contact', label: 'Beekeeping' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 sm:px-10 backdrop-blur-md border-b transition-all duration-300 ${isOpen ? 'bg-white shadow-md text-black' : isScrolled ? 'bg-white shadow-md' : 'bg-white/0 text-white'}`}>
        <div className="container mx-auto flex items-center justify-between">
          {/* Desktop Logo - Left */}
          <Link href="/" className={`hidden md:block w-20 text-center headline-md font-bold transition-colors ${isScrolled ? 'text-gray-800 hover:text-yellow-500' : 'text-white hover:text-yellow-300'}`}>
            सफल मौरी पालन
          </Link>

          {/* Desktop Navigation - Center */}
          <div className='hidden md:flex gap-8'>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-yellow-500' : 'text-gray-300 hover:text-yellow-300'}`}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Icons - Right */}
          <div className="hidden md:flex items-center justify-between space-x-6">
            <Link href="/account/harvest" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-yellow-500' : 'text-gray-300 hover:text-yellow-300'}`}>
              <i className="fa-solid fa-bag-shopping"></i>
            </Link>
            <Link href="/profile" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'}`}>
              <i className="fa-solid fa-user"></i>
            </Link>
          </div>

          {/* Mobile Layout: Shopping Bag (Left), Brand (Center), Hamburger (Right) */}
            <div className="md:hidden w-full flex items-center justify-between transition-colors">
            {/* Shopping Bag - Left */}
            <Link href="/account/harvest" className={`transition-colors ${isOpen ? 'text-black hover:text-yellow-500' : isScrolled ? 'text-gray-700 hover:text-yellow-500' : 'text-gray-300 hover:text-yellow-300'}`}>
              <i className="fa-solid fa-bag-shopping text-xl"></i>
            </Link>

            {/* Brand - Center */}
            <Link href="/" className={`headline-md font-bold transition-colors ${isOpen ? 'text-black hover:text-yellow-500' : isScrolled ? 'text-gray-800 hover:text-yellow-500' : 'text-white hover:text-yellow-300'}`}>
              सफल मौरी
            </Link>

            {/* Hamburger Icon - Right */}
            <button
              onClick={toggleMenu}
              className={`transition-colors focus:outline-none ${isOpen ? 'text-black hover:text-yellow-500' : isScrolled ? 'text-gray-800 hover:text-yellow-500' : 'text-white hover:text-yellow-300'}`}
              aria-label="Toggle menu"
            >
              <i className={`fa-solid fa-bars text-xl transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-md z-5 md:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
        style={{ paddingTop: '80px' }}
      >
        <div
          className="w-full h-full flex flex-col items-start justify-start p-10"
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-lg font-semibold text-white hover:text-yellow-300 mb-4 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <div className="fixed bottom-0 left-0 right-0 flex flex-col gap-3 w-full px-6 py-6 bg-white/95">
            <Link
              href="/auth/signin"
              onClick={closeMenu}
              className="w-full"
            >
              <button className="bg-primary w-full text-white px-4 py-3 rounded-md hover:bg-primary-dark transition-colors font-semibold">
                Sign in
              </button>
            </Link>
            <Link
              href="/auth/signup"
              onClick={closeMenu}
              className="w-full"
            >
              <button className="bg-white border border-primary w-full text-primary px-4 py-3 rounded-md hover:bg-secondary-dark transition-colors font-semibold">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;