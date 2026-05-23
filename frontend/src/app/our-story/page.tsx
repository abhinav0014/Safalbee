import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function OurStory() {
    return (
        <>
            <Navbar />
            {/* Hero section*/}
            <section className="relative flex items-center justify-center w-screen min-h-screen overflow-hidden -mt-20 pt-20">
                {/* Background Image with Overlay */}
                <div
                    className="absolute m-0 p-0 w-full inset-0 bg-cover bg-center bg-[url('/assets/our-story-bg.jpg')]"
                    style={{
                        backgroundAttachment: 'fixed'
                    }}
                ></div>

                {/* Dark Overlay for Better Text Readability */}
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-20 text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">
                        Crafting a Legacy of Golden Nectar
                    </h2>
                    <p className="text-lg md:text-2xl text-gray-100 mb-12 leading-relaxed drop-shadow-md">
                        At Safal Bee Keeping, our story is one of passion, dedication, and a deep connection to nature.
                    </p>
                    <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors drop-shadow-md">
                        Discover Our Journey
                    </button>
                </div>
            </section>

            {/* Our roots */}
            <section className="w-full surface-container-low py-20 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center px-10 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-center cols-span-1 w-full bg-blend-screen mr-10 mb-10 md:mb-0">
                    <img src="/assets/honey-jar-filling.jpg" alt="Our Roots" className="w-110 -rotate-2 h-auto rounded-lg shadow-lg" />
                    <span className="absolute bg-[var(--primary-fixed)] w-40 rotate-1 text-sm font-serif rounded-md py-2 px-4 -bottom-6 -right-3">"Respecting the hive is respecting life itself."</span>
                </div>
                <div className="w-full cols-span-1 mb-10 md:mb-0">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 font-serif">
                        Our Roots
                    </h2>
                    <p className="text-lg text-left md:text-xl text-secondary text-center leading-relaxed">
                        Founded in 2010, Safal Bee Keeping began as a small family venture with a vision to produce the purest honey while promoting sustainable beekeeping practices. Our founders, inspired by the beauty and importance of bees, started with just a few hives in their backyard. Over the years, our commitment to quality and environmental stewardship has allowed us to grow into a trusted name in the honey industry. We work closely with local farmers and beekeepers to ensure that our honey is not only delicious but also ethically sourced. Our story is one of growth, community, and a shared love for the natural world.
                    </p>
                </div>
            </section>

            {/* The Spirit of Hive */}
            <section className="w-full py-20 px-10 sm:px-6 lg:px-8">
                <div className="w-full mb-8 text-center">
                    <h2 className="w-full text-2xl md:text-3xl font-bold font-serif mb-1">
                        The Spirit of Hive
                    </h2>
                    <div className="mx-auto mt-2 h-1 w-15 bg-primary rounded"></div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">
                    <div className="surface-container-low rounded-md p-10">
                        <div className="size-12 flex justify-center items-center rounded-full bg-[var(--primary-fixed)]">
                            <i className="fa-solid fa-leaf text-primary text-lg"></i>
                        </div>
                        <h3 className="text-md md:text-lg font-semibold mt-5 mb-3">
                            Biodiversity
                        </h3>
                        <p className="text-xs md:text-sm">
                            We are committed to preserving the rich biodiversity of our ecosystems through sustainable beekeeping practices.
                        </p>
                    </div>
                    <div className="surface-container-low rounded-md p-10">
                        <div className="size-12 flex justify-center items-center rounded-full bg-[var(--primary-fixed)]">
                            <i className="fa-solid fa-handshake text-primary text-lg"></i>
                        </div>
                        <h3 className="text-md md:text-lg font-semibold mt-5 mb-3">
                            Ethical Harvesting
                        </h3>
                        <p className="text-xs md:text-sm">
                            We are committed to ethical harvesting practices that ensure the well-being of our bees and the health of their habitats.
                        </p>
                    </div>
                    <div className="surface-container-low rounded-md p-10">
                        <div className="size-12 flex justify-center items-center rounded-full bg-[var(--primary-fixed)]">
                            <i className="fa-solid fa-people-group text-primary text-lg"></i>
                        </div>
                        <h3 className="text-md md:text-lg font-semibold mt-5 mb-3">
                            Community Support
                        </h3>
                        <p className="text-xs md:text-sm">
                            We are committed to supporting our local community and promoting environmental awareness through our beekeeping practices.
                        </p>
                    </div>
                </div>

            </section>

            {/* Meet The Keepers */}
            <section className="w-full py-20 px-10 md:px-15 grid grid-cols-1 md:grid-cols-2 place-items-center surface-container-high">
                <div className="w-full col-span-1 mb-8 text-left">
                    <h2 className="w-full text-2xl md:text-3xl font-bold font-serif mb-1">
                        Meet The Keepers
                    </h2>
                    <p className="text-xs md:text-sm mb-5 md:mb-12">
                        Introducing the passionate individuals behind our apiary.
                    </p>

                    <div className="grid relative grid-cols-2 gap-2">
                        <div className="col-span-1 ">
                            <img src="/assets/keeper-1.jpg" alt="Keeper 1" className="w-full h-auto rounded-md shadow-lg" />
                            <img src="/assets/keeper-2.jpg" alt="Keeper 2" className="w-full h-auto rounded-md shadow-lg mt-2" />
                        </div>
                        <div className="col-span-1 absolute top-5 right-0 w-1/2">
                            <img src="/assets/keeper-3.jpg" alt="Keeper 1" className="w-full h-auto rounded-md shadow-lg" />
                            <img src="/assets/keeper-4.jpg" alt="Keeper 2" className="w-full h-auto rounded-md shadow-lg mt-2" />
                        </div>
                    </div>
                </div>
                <div className="cols-span-1 w-full flex flex-col items-center mt-8 md:p-10 justify-center">
                    <div className="bg-white rounded-md mb-5 p-8">
                        <h2 className="text-primary text-xl md:text-2xl font-semibold font-serif">Master Apiarist: Khadananda Paudel</h2>
                        <p className="text-left text-xs md:text-sm mt-2">
                            With over 15 years of experience in beekeeping, Khadananda is the heart and soul of our apiary. His deep understanding of bee behavior and unwavering dedication to sustainable practices have been instrumental in shaping our approach to beekeeping.
                        </p>
                    </div>
                    <div className="bg-white rounded-md p-8">
                        <h2 className="text-primary text-xl md:text-2xl font-semibold font-serif">Harvest Specialist: Madhav Raj Paudel</h2>
                        <p className="text-left text-xs md:text-sm mt-2">
                            Madhav is our expert in honey harvesting, ensuring that we collect our golden nectar with care and precision. With a keen eye for detail and a deep respect for the bees, Madhav oversees the entire harvesting process, from hive inspection to extraction.
                        </p>
                    </div>
                </div>
            </section>
            {/* Our Promise */}
            <section className="w-full py-20 px-10 md:px-15 surface text-center flex flex-col items-center justify-center">
                <div className="size-12 flex justify-center items-center rounded-full bg-[var(--primary-fixed)]"><i className="fa-solid fa-certificate grid place-items-center text-primary text-2xl md:text-3xl"><i className="fa-solid fa-check text-white"></i></i></div>
                <h2 className="w-full text-2xl md:text-3xl font-bold font-serif mb-1 mt-5">
                    Our Promise
                </h2>
                <p className="text-xs md:text-sm mb-5 md:mb-12 max-w-2xl">
                    "We promise to continue our commitment to quality, sustainability, and community support. Our honey is a testament to our dedication to ethical beekeeping practices and our love for the natural world."
                </p>
                <div className="flex justify-around px-10 md:px-20 w-full mb-10">
                    <div className="text-center">
                        <p className="uppercase text-xs md:text-sm text-primary">Purity</p>
                        <h3 className="text-lg font-semibold mt-2 md:text-xl font-serif">100% Raw</h3>
                    </div>
                    <div className="text-center">
                        <p className="uppercase text-xs md:text-sm text-primary">Origin</p>
                        <h3 className="text-lg font-semibold mt-2 md:text-xl font-serif">Single Estate</h3>
                    </div>
                    <div className="text-center">
                        <p className="uppercase text-xs md:text-sm text-primary">Packaging</p>
                        <h3 className="text-lg font-semibold mt-2 md:text-xl font-serif">Plastic-Free</h3>
                    </div>
                    <div className="text-center">
                        <p className="uppercase text-xs md:text-sm text-primary">Labor</p>
                        <h3 className="text-lg font-semibold mt-2 md:text-xl font-serif">Fair Trade</h3>
                    </div>
                </div>
            </section>

            {/* Footer  */}
            <Footer/>
        </>
    )
}

export default OurStory