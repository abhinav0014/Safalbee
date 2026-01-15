import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-100
                     dark:from-zinc-950 dark:via-amber-950 dark:to-zinc-900
                     border-t-4 border-amber-400 dark:border-amber-700">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-amber-100 dark:fill-zinc-950">
          <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <span className="text-6xl">🍯</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600
                             dark:from-amber-400 dark:to-orange-400
                             bg-clip-text text-transparent">
                Honey Hive
              </span>
            </div>
            <p className="text-stone-700 dark:text-amber-300 leading-relaxed">
              Pure, natural honey sourced sustainably from local beekeepers. 
              Bringing nature's sweetness to your home since 2020.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 rounded-full bg-gradient-to-br from-amber-400 to-orange-500
                                   hover:from-amber-500 hover:to-orange-600
                                   text-white transition-all duration-300 hover:scale-110 shadow-lg">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-full bg-gradient-to-br from-amber-400 to-orange-500
                                   hover:from-amber-500 hover:to-orange-600
                                   text-white transition-all duration-300 hover:scale-110 shadow-lg">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-full bg-gradient-to-br from-amber-400 to-orange-500
                                   hover:from-amber-500 hover:to-orange-600
                                   text-white transition-all duration-300 hover:scale-110 shadow-lg">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-stone-900 dark:text-amber-100 mb-6 
                         border-b-4 border-amber-400 dark:border-amber-600 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'Products', 'About Us', 'Our Story', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-stone-700 dark:text-amber-300 
                                         hover:text-amber-600 dark:hover:text-amber-400
                                         transition-colors duration-300 font-medium
                                         flex items-center space-x-2 group">
                    <span className="w-2 h-2 rounded-full bg-amber-500 
                                   group-hover:w-4 transition-all duration-300"></span>
                    <span>{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold text-stone-900 dark:text-amber-100 mb-6
                         border-b-4 border-amber-400 dark:border-amber-600 pb-2 inline-block">
              Customer Service
            </h3>
            <ul className="space-y-3">
              {['FAQs', 'Shipping Info', 'Returns', 'Track Order', 'Gift Cards', 'Wholesale'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-stone-700 dark:text-amber-300 
                                         hover:text-amber-600 dark:hover:text-amber-400
                                         transition-colors duration-300 font-medium
                                         flex items-center space-x-2 group">
                    <span className="w-2 h-2 rounded-full bg-amber-500 
                                   group-hover:w-4 transition-all duration-300"></span>
                    <span>{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-stone-900 dark:text-amber-100 mb-6
                         border-b-4 border-amber-400 dark:border-amber-600 pb-2 inline-block">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                <span className="text-stone-700 dark:text-amber-300">
                  123 Honeycomb Lane<br />
                  Sweet Valley, CA 90210
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-stone-700 dark:text-amber-300 
                                                    hover:text-amber-600 dark:hover:text-amber-400
                                                    transition-colors">
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                <a href="mailto:hello@honeyhive.com" className="text-stone-700 dark:text-amber-300 
                                                              hover:text-amber-600 dark:hover:text-amber-400
                                                              transition-colors">
                  hello@honeyhive.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-amber-300 dark:border-amber-800 
                      flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-stone-600 dark:text-amber-400 text-center md:text-left">
            © 2024 Honey Hive. Made with 💛 by nature-loving beekeepers.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-stone-600 dark:text-amber-400 hover:text-amber-600 
                                    dark:hover:text-amber-300 transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link href="#" className="text-stone-600 dark:text-amber-400 hover:text-amber-600 
                                    dark:hover:text-amber-300 transition-colors font-medium">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Bees */}
      <div className="absolute bottom-4 right-4 text-4xl animate-float opacity-20">🐝</div>
      <div className="absolute top-4 left-4 text-3xl animate-float opacity-20" style={{ animationDelay: '1s' }}>🌻</div>
    </footer>
  );
}