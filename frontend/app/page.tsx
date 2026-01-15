import Link from 'next/link';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import { api } from '../lib/api';
import { Heart, Leaf, Award, Truck } from 'lucide-react';

export default async function HomePage() {
  const products = await api.getProducts();
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="pt-20">
      <HeroSection />

      {/* Features Strip */}
      <section className="relative py-20 bg-white dark:bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 hexagon-pattern opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: 'Raw Honey', description: 'Unprocessed & pure', color: 'from-red-400 to-pink-500' },
              { icon: Leaf, title: '100% Organic', description: 'Chemical-free', color: 'from-green-400 to-emerald-500' },
              { icon: Award, title: 'Premium Quality', description: 'Award winning', color: 'from-amber-400 to-orange-500' },
              { icon: Truck, title: 'Fast Delivery', description: 'Ships in 2-3 days', color: 'from-blue-400 to-cyan-500' },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-amber-50 to-yellow-100
                         dark:from-zinc-800 dark:to-amber-950
                         hover:shadow-2xl transition-all duration-500 hover:-translate-y-2
                         border-4 border-amber-200 dark:border-amber-800
                         hover:border-amber-400 dark:hover:border-amber-600"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} 
                              flex items-center justify-center mb-6 shadow-lg
                              group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 dark:text-amber-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-stone-600 dark:text-amber-300 text-lg">
                  {feature.description}
                </p>
                
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-transparent
                              rounded-full transform translate-x-12 -translate-y-12
                              group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-24 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50
                                      dark:from-zinc-950 dark:via-amber-950 dark:to-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400
                          text-white font-semibold mb-6 shadow-lg text-sm">
              ⭐ BESTSELLERS
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6
                         bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500
                         dark:from-amber-400 dark:via-orange-400 dark:to-yellow-300
                         bg-clip-text text-transparent">
              Our Golden Collection
            </h2>
            <p className="text-xl text-stone-700 dark:text-amber-300 max-w-2xl mx-auto">
              Handpicked favorites loved by honey enthusiasts worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/products"
              className="inline-flex items-center space-x-3 px-10 py-5 rounded-full
                       bg-gradient-to-r from-amber-500 to-orange-500
                       text-white font-bold text-xl shadow-2xl
                       hover:from-amber-600 hover:to-orange-600
                       hover:scale-105 transition-all duration-300"
            >
              <span>View All Products</span>
              <span className="text-2xl">🍯</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white dark:bg-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl
                            border-8 border-amber-400 dark:border-amber-600
                            transform hover:rotate-2 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1558642891-54be180ea339?w=800"
                  alt="Beekeeping"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-amber-400 to-orange-500
                            rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute -top-8 -left-8 text-8xl animate-float opacity-80">🐝</div>
            </div>

            {/* Content Side */}
            <div className="space-y-8">
              <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-emerald-400 to-green-500
                            text-white font-semibold shadow-lg text-sm">
                🌿 OUR STORY
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold
                           bg-gradient-to-r from-amber-600 to-orange-600
                           dark:from-amber-400 dark:to-orange-400
                           bg-clip-text text-transparent leading-tight">
                From Hive to Home
              </h2>
              
              <p className="text-xl text-stone-700 dark:text-amber-300 leading-relaxed">
                For over a decade, we've partnered with dedicated beekeepers who share our passion 
                for sustainable, ethical honey production. Each jar represents countless hours of 
                care, from maintaining healthy bee colonies to harvesting at peak perfection.
              </p>
              
              <p className="text-xl text-stone-700 dark:text-amber-300 leading-relaxed">
                Our honey is raw, unfiltered, and bursting with natural enzymes, antioxidants, 
                and that unmistakable golden sweetness that only pure honey can deliver.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-3 px-6 py-3 rounded-full
                              bg-gradient-to-r from-amber-100 to-yellow-100
                              dark:from-amber-950 dark:to-zinc-800
                              border-2 border-amber-300 dark:border-amber-700">
                  <span className="text-3xl">🏆</span>
                  <div>
                    <div className="font-bold text-stone-900 dark:text-amber-100">10+ Awards</div>
                    <div className="text-sm text-stone-600 dark:text-amber-400">Quality Excellence</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 px-6 py-3 rounded-full
                              bg-gradient-to-r from-amber-100 to-yellow-100
                              dark:from-amber-950 dark:to-zinc-800
                              border-2 border-amber-300 dark:border-amber-700">
                  <span className="text-3xl">🌍</span>
                  <div>
                    <div className="font-bold text-stone-900 dark:text-amber-100">Eco-Friendly</div>
                    <div className="text-sm text-stone-600 dark:text-amber-400">Sustainable Practices</div>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full
                         bg-gradient-to-r from-amber-500 to-orange-500
                         text-white font-bold text-lg shadow-xl
                         hover:from-amber-600 hover:to-orange-600
                         hover:scale-105 transition-all duration-300"
              >
                <span>Learn More About Us</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}