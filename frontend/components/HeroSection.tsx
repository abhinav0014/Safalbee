'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden
                      bg-gradient-to-br from-amber-50 via-yellow-100 to-orange-100
                      dark:from-zinc-950 dark:via-amber-950 dark:to-orange-950">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 hexagon-pattern opacity-30"></div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 text-6xl animate-float opacity-60">🐝</div>
      <div className="absolute top-40 right-20 text-5xl animate-float opacity-50" style={{ animationDelay: '1s' }}>🌻</div>
      <div className="absolute bottom-32 left-1/4 text-7xl animate-float opacity-40" style={{ animationDelay: '2s' }}>🍯</div>
      <div className="absolute bottom-20 right-1/3 text-4xl animate-float opacity-50" style={{ animationDelay: '1.5s' }}>🌿</div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full
                        bg-gradient-to-r from-amber-400 to-orange-400 
                        text-white font-semibold shadow-lg mb-8
                        hover:from-amber-500 hover:to-orange-500 transition-all duration-300
                        hover:scale-105 cursor-pointer">
            <Sparkles className="w-5 h-5" />
            <span>100% Pure & Natural Honey</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8
                       bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500
                       dark:from-amber-400 dark:via-orange-400 dark:to-yellow-300
                       bg-clip-text text-transparent
                       animate-gradient-shift leading-tight">
            Pure. Natural.
            <br />
            <span className="text-stone-900 dark:text-amber-100">From the Hive.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-stone-700 dark:text-amber-200 mb-12 max-w-3xl mx-auto
                      font-medium leading-relaxed">
            Experience the golden sweetness of nature with our premium, sustainably-harvested honey. 
            From our bees to your table, every jar tells a story of purity and care.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/products"
              className="group relative px-10 py-5 rounded-full font-bold text-xl
                       bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400
                       text-white shadow-2xl
                       hover:shadow-amber-500/50 hover:scale-105 
                       transition-all duration-300
                       overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <span>Shop Honey Now</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-500
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link
              href="#featured"
              className="px-10 py-5 rounded-full font-bold text-xl
                       bg-white dark:bg-zinc-800
                       text-amber-600 dark:text-amber-400
                       border-4 border-amber-400 dark:border-amber-600
                       hover:bg-amber-50 dark:hover:bg-zinc-700
                       hover:scale-105 transition-all duration-300
                       shadow-lg"
            >
              Explore Collection
            </Link>
          </div>
        </div>

        {/* Honey Jar Illustration */}
        <div className="mt-20 relative">
          <div className="text-9xl animate-float filter drop-shadow-2xl">
            🍯
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-amber-400/20 to-transparent 
                        blur-3xl animate-glow"></div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24 fill-white dark:fill-zinc-900">
          <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}