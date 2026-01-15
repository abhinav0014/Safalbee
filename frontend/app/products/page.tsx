import { api } from '@/lib/api';
import ProductCard from '@/components/ProductCard';
import { Suspense } from 'react';

function ProductsGrid({ products }: { products: any[] }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-8xl mb-6">🍯</div>
        <h3 className="text-3xl font-bold text-stone-900 dark:text-amber-100 mb-4">
          No products found
        </h3>
        <p className="text-xl text-stone-600 dark:text-amber-300">
          Check back soon for more sweet offerings!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="bg-gradient-to-br from-amber-200 to-yellow-200 
                        dark:from-amber-900 dark:to-zinc-800 
                        h-72 rounded-t-3xl"></div>
          <div className="bg-gradient-to-br from-yellow-100 to-amber-100 
                        dark:from-amber-950 dark:to-zinc-900 
                        p-6 rounded-b-3xl space-y-4">
            <div className="h-4 bg-amber-300 dark:bg-amber-800 rounded w-3/4"></div>
            <div className="h-4 bg-amber-300 dark:bg-amber-800 rounded w-1/2"></div>
            <div className="h-8 bg-amber-300 dark:bg-amber-800 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function ProductsPage() {
  const products = await api.getProducts();

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50
                  dark:from-zinc-950 dark:via-amber-950 dark:to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400
                        text-white font-semibold mb-6 shadow-lg text-sm">
            🍯 FULL COLLECTION
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6
                       bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500
                       dark:from-amber-400 dark:via-orange-400 dark:to-yellow-300
                       bg-clip-text text-transparent">
            Our Complete Range
          </h1>
          
          <p className="text-xl text-stone-700 dark:text-amber-300 max-w-3xl mx-auto leading-relaxed">
            Explore our full collection of premium honey varieties, each with its own unique flavor profile 
            and natural benefits. Every jar is a taste of pure nature.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-40 left-10 text-6xl animate-float opacity-20 pointer-events-none">🐝</div>
        <div className="absolute top-60 right-20 text-5xl animate-float opacity-20 pointer-events-none" 
             style={{ animationDelay: '1s' }}>🌻</div>

        {/* Products Grid */}
        <Suspense fallback={<LoadingSkeleton />}>
          <ProductsGrid products={products} />
        </Suspense>

        {/* Bottom Banner */}
        <div className="mt-20 p-12 rounded-3xl bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400
                      dark:from-amber-600 dark:via-orange-600 dark:to-yellow-500
                      shadow-2xl text-center overflow-hidden relative">
          <div className="absolute inset-0 hexagon-pattern opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We're constantly adding new varieties and special editions. 
              Sign up for updates on new arrivals!
            </p>
            <button className="px-10 py-4 rounded-full bg-white text-amber-600 font-bold text-lg
                             hover:bg-yellow-100 transition-all duration-300 hover:scale-105 shadow-xl">
              Notify Me
            </button>
          </div>
          <div className="absolute -bottom-10 -right-10 text-9xl opacity-20">🍯</div>
          <div className="absolute -top-10 -left-10 text-8xl opacity-20">🐝</div>
        </div>
      </div>
    </div>
  );
}