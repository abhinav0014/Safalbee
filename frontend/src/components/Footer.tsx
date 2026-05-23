import React from 'react'

const Footer = () => {
    return (
        <div className="surface-container-highest grid grid-cols-1 md:grid-cols-3 md:flex-row items-center justify-between text-white p-10 pb-20 rounded-t-4xl -mt-10 relative gap-10 md:gap-0">
            <div className="md:mx-5 col-span-1">
                <h2 className="text-primary font-bold text-2xl md:text-3xl mb-3 md:mb-4">Safal Bee Keeping</h2>
                <p className="text-xs md:text-sm text-secondary mb-2 md:mb-3">Dedicated to preserving the vital link between bees, flowers and the human table.</p>
                <div className="flex font-xl md:text-2xl gap-5">
                    <i className="fab fa-facebook-f text-secondary hover:text-primary transition-colors duration-300 cursor-pointer"></i>
                    <i className="fab fa-twitter text-secondary hover:text-primary transition-colors duration-300 cursor-pointer"></i>
                    <i className="fab fa-instagram text-secondary hover:text-primary transition-colors duration-300 cursor-pointer"></i>
                    <i className="fab fa-linkedin-in text-secondary hover:text-primary transition-colors duration-300 cursor-pointer"></i>
                </div>
            </div>
            <div className="md:mx-5 md:ml-20 col-span-1">
                <span className="text-primary font-bold text-sm md:text-md">Quick Links</span>
                <ul className="text-xs mt-3 md:mt-4 md:text-sm text-secondary">
                    <li className="mb-2 hover:text-primary transition-colors duration-300 cursor-pointer">Home</li>
                    <li className="mb-2 hover:text-primary transition-colors duration-300 cursor-pointer">About Us</li>
                    <li className="mb-2 hover:text-primary transition-colors duration-300 cursor-pointer">Products</li>
                    <li className="mb-2 hover:text-primary transition-colors duration-300 cursor-pointer">Contact</li>
                </ul>
            </div>
            {/* Newsletter */}
            <div className="md:mx-5 col-span-1">
                <h3 className="text-primary font-bold text-lg md:text-xl mb-3 md:mb-4">Subscribe to our Newsletter</h3>
                <p className="text-xs md:text-sm text-secondary mb-6">Get the latest updates on our products and beekeeping tips.</p>
                <div className="flex">
                    <input type="email" placeholder="example@email.com" className="w-full text-primary placeholder:text-secondary p-2 border-1 rounded-l-full focus:outline-none" />
                    <button className="bg-primary text-white px-4 py-2 rounded-r-full hover:bg-primary-dark transition-colors duration-300">
                        Subscribe
                    </button>
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-4 md:bottom-5 flex justify-center px-4">
                <p className="text-primary text-xs md:text-sm text-center">&copy; 2026 Safal Bee Keeping. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer