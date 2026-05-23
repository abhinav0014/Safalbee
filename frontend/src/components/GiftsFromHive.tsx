'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GiftsFromHive: React.FC = () => {
  return (
    <div className="w-full max-w-7xl p-8 bg-orange-100 rounded-[45px] mx-auto flex flex-col">
      <p className="text-xs md:text-sm text-yellow-400 mb-2">
        THE HARVEST BEYOND HONEY
      </p>
      <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8">
        Gifts from the Hive
      </h2>
      <div className="w-full grid grid-cols-1 grid-rows-6 md:grid-rows-2 md:grid-cols-8 gap-6">
        {/* Top-left: 3fr (3 columns) */}
        <div className="col-span-5 row-span-2 md:row-span-1 flex flex-col md:flex-row items-center bg-white rounded-3xl p-6 shadow-md">
          <div className="w-full md:h-60 rounded-lg mb-4 relative p-7 mb-12 md:mb-0">
            <h2 className="text-xl md:text-2xl font-serif font-semibold mb-3">Himalayan Chiuri</h2>
            <p className="text-sm font-light mb-4">A rare and precious honey harvested from the nectar of the Chiuri tree, found in the Himalayan region. Known for its unique flavor and medicinal properties, it is a true gift from the hive.</p>
            <ul className="list-none list-inside mt-2 text-sm text-gray-600">
              <li><span className="text-green-500 font-black">✓</span>&nbsp;Rich in antioxidants and nutrients</li>
              <li><span className="text-green-500 font-black">✓</span>&nbsp;Known for its anti-inflammatory properties</li>
            </ul>

          </div>

          <img className="w-64 h-54 [clip-path:polygon(25%_0%,_75%_0%,_100%_50%,_75%_100%,_25%_100%,_0%_50%)] object-cover" src="/assets/honey-hexagon.webp" alt="Flat Top Hexagon" />

        </div>
        {/* Top-right: 1fr (1 column) */}
        <div className="col-span-5 md:col-span-3 row-span-1 md:row-span-1  bg-[#7A5900] rounded-3xl p-10 text-white shadow-md">
          <div className="flex items-center justify-center h-8 w-10 bg-white [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] mb-5">
            <div className="h-6 w-8 bg-[#7A5900] [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]">
            </div>
          </div>
          <h3 className="text-2xl font-serif font-bold mb-4">Beeswax</h3>
          <p className="text-sm font-normal font-mono mb-4">Pure, triple-filtered beeswax for artisnal,<br /> candles and as natural skin balms.</p>
          <Link href="/blog" className="inline-block mt-5 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
            Learn More &#8599;
          </Link>
        </div>
        {/* Bottom-left: 1fr (1 column) */}
        <div className="flex flex-col col-span-5 md:col-span-3 row-span-1 bg-white rounded-3xl p-10 shadow-md items-center">
          <div className="w-17 rounded-full h-17 bg-orange-200 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-grid" viewBox="0 0 16 16">
              <path strokeWidth="3" d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
            </svg>

          </div>
          <h3 className="text-2xl font-serif font-bold mb-4">Beeswax</h3>
          <p className="text-sm font-normal font-sans">Pure, triple-filtered beeswax for artisnal,<br /> candles and as natural skin balms.</p>
        </div>
        {/* Bottom-right: 3fr (3 columns) */}
        <div className="col-span-5 row-span-2 md:row-span-1 bg-orange-200 flex flex-col gap-10 md:flex-row rounded-3xl p-6 shadow-md flex items-center justify-center">
          <img className="w-64 h-44 [clip-path:polygon(25%_0%,_75%_0%,_100%_50%,_75%_100%,_25%_100%,_0%_50%)] object-cover" src="/assets/bee-pollen.jpg" alt="Flat Top Hexagon" />
          <div className="w-full md:h-60 rounded-lg mb-4 relative p-7 mb-12 md:mb-0">
            <h2 className="text-xl md:text-2xl font-serif font-semibold mb-3">Bee Pollen</h2>
            <p className="text-sm font-light mb-4">Rich in proteins, vitamins, and minerals, bee pollen is a powerhouse of nutrition and energy.</p>
            <button className="mt-4 px-4 py-2 button-primary rounded-md font-semibold  hover:bg-[#7A5940] transition-colors">
              Browse Pollen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { GiftsFromHive };
