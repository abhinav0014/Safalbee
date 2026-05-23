"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { ProductCard } from "@/components/product";
import { GiftsFromHive } from "@/components/GiftsFromHive";
import OurPhilosophy from "@/components/OurPhilosophy";
import ReviewCard from "@/components/ReviewCard";
import Footer from "@/components/Footer";

export default function Home() {
  const router = useRouter();
  return (
    <div className="w-full">
      <header className="relative w-full">
        <Navbar />
      </header>
      <main className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden">
        <section className="flex justify-center items-center align-bottom -0 pt-50 w-full bg-[url('/assets/hero-image.jpg')] bg-cover bg-center h-[100vh]">

          <div className="absolute inset-0" />

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center pb-10 md:pb-20">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg leading-tight">
                Pure, Natural Honey
              </h1>
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-yellow-300 drop-shadow-md">
                From Our Hive to Your Home
              </h2>
              <p className="text-md sm:text-xl md:text-2xl text-white drop-shadow-md max-w-2xl mx-auto">
                Experience the Sweetness of Nature with Safal Mahuri Palan
              </p>
            </div>

            <div className="flex gap-4 mt-8 md:mt-12 justify-center items-center">
              <button
                className="button-primary px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg font-semibold rounded-lg hover:bg-yellow-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => router.push("/products")}
              >
                Shop Now
              </button>
              <button
                className="button-secondary px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg font-semibold rounded-lg hover:bg-yellow-600 hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => router.push("/about")}
              >
                Explore Hives
              </button>
            </div>

            <div className="flex text-[10px] gap-2 justify-center mt-30 md:mt-16">
              <button className="py-2 px-2 bg-white rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-110">
                <span><div className="fa-solid text-green-400 fa-check"></div>&nbsp;&nbsp;100% Organic</span>
              </button>
              <button className="py-2 px-2 bg-white rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-110">
                <span><div className="fa-solid text-primary fa-flask"></div>&nbsp;&nbsp;Lab Tested</span>
              </button>
              <button className="py-2 px-2 bg-white rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-110">
                <span><div className="fa-solid text-primary fa-star"></div>&nbsp;&nbsp;Premium Grade</span>
              </button>
            </div>
          </div>
        </section>

        {/* Our collection */}
        <section className="w-full pb-10 flex flex-col items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs sm:text-sm md:text-md text-yellow-400 mt-4 max-w-2xl mx-auto pb-4">
              OUR COLLECTION
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-gray-900">
              Honey Varieties
            </h2>
          </div>

          <div className="w-full text-center flex flex-wrap gap-20 pt-0 md:pt-10 justify-center items-center">
            <ProductCard
              image="/assets/collection-1.jpg"
              title="Organic Honey"
              description="Pure, unfiltered honey from our natural hives"
              price={12.99}
              badge="New"
            />
            <ProductCard
              image="/assets/collection-1.jpg"
              title="Organic Honey"
              description="Pure, unfiltered honey from our natural hives"
              price={12.99}
              badge="New"
            />
            <ProductCard
              image="/assets/collection-1.jpg"
              title="Organic Honey"
              description="Pure, unfiltered honey from our natural hives"
              price={12.99}
              badge="New"
            /></div>
        </section>

        <section className="w-full pt-25 pb-10 flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 lg:px-12 gap-20">
          <GiftsFromHive />
        </section>
        <section className="w-full py-25 flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 lg:px-12 gap-20">
          <OurPhilosophy />
        </section>
        <section className="w-full py- 10 md:py-25 flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar items-center justify-between px-4 sm:px-8 lg:px-12 gap-5 md:gap-10">
          {/* Reviews */}
          <ReviewCard
            reviewText="This honey is absolutely delicious! I can taste the flowers from the garden."
            reviewerName="John Doe"
            reviewRating={5}
            reviewerStatus="Verified Buyer"
            reviewerAvatar="/assets/user-avatar.jpg"
          />
          <ReviewCard
            reviewText="This honey is absolutely delicious! I can taste the flowers from the garden."
            reviewerName="John Doe"
            reviewRating={5}
            reviewerStatus="Verified Buyer"
            reviewerAvatar="/assets/user-avatar.jpg"
          />
          <ReviewCard
            reviewText="This honey is absolutely delicious! I can taste the flowers from the garden."
            reviewerName="John Doe"
            reviewRating={5}
            reviewerStatus="Verified Buyer"
            reviewerAvatar="/assets/user-avatar.jpg"
          />
          <ReviewCard
            reviewText="This honey is absolutely delicious! I can taste the flowers from the garden."
            reviewerName="John Doe"
            reviewRating={5}
            reviewerStatus="Verified Buyer"
            reviewerAvatar="/assets/user-avatar.jpg"
          />
        </section>
        <section className="w-full py-10 flex flex-col items-center justify-center px-4 mb-10   md:mb-20 sm:px-8 lg:px-12 gap-5">
          <div className="w-full rounded-4xl mx-30 bg-gradient-to-b md:bg-gradient-to-r to-primary-container from-primary px-10 py-5 mb-4 grid grid-cols-1 md:grid-cols-2 items-center justify-center" >
            <div className="col-span-1 flex flex-col items-start justify-start gap-4 text-white py-5">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif">
                Taste the purity of nature
              </h2>
              <p className="text-md sm:text-lg md:text-xl mt-4 max-w-2xl">
                Experience the sweetness of our honey, crafted with care and passion.
              </p>
              <button
                className="button-secondary px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg font-semibold rounded-lg hover:bg-[#FAF9E6] transition-all duration-300 transform hover:scale-105 shadow-lg mt-6"
                onClick={() => router.push("/products")}
              >
                Order Now
              </button>
            </div>
            <div className="col-span-1 p-5">
              <img
                src="/assets/cta-image.png"
                alt="Call to Action Image"
                className="w-110 aspect-square object-cover shadow-lg"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
