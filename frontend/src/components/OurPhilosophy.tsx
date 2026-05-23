import React from 'react'

const OurPhilosophy = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-around content-center  gap-5 px-8 md:px-10">
        <div className="image-container col-span-1 relative">
            <img className="w-67 h-67 md:w-84 md:h-84 [clip-path:polygon(25%_0%,_75%_0%,_100%_50%,_75%_100%,_25%_100%,_0%_50%)] object-cover" src="/assets/bee-pollen.jpg" alt="Flat Top Hexagon" />
            <div className="absolute flex items-center justify-center -bottom-5 md:right-60 bg-white w-27 h-27 [clip-path:polygon(25%_0%,_75%_0%,_100%_50%,_75%_100%,_25%_100%,_0%_50%)]">
                <img className="w-24 h-24 [clip-path:polygon(25%_0%,_75%_0%,_100%_50%,_75%_100%,_25%_100%,_0%_50%)] object-cover" src="/assets/bee-pollen.jpg" alt="Flat Top Hexagon" />
            </div>
            
        </div>
        <div className="text-container col-span-1 p-5">
          <span className="text-xs sm:text-sm md:text-md text-yellow-400 mt-4 max-w-2xl mx-auto pb-4">
            OUR PHILOSOPHY
          </span>
          <h3 className="text-2xl md:text-3xl font-bold font-serif pb-8">
            The Wisdom of Hive
          </h3>
          <p className="font-light text-xs md:text-sm pb-8">
            Since 1997, our  family has parterned with most diligent workers<br/> in nature. We believe in minimal intreventition, allowing our bees to <br/> thrive in wild, pesticide-free sanctuaries.
          </p>
          <div className="w-full grid grid-cols-2">
            <div className="flex flex-col col-span-1 gap-3 items-left">
              <span className="text-md md:text-lg font-semibold text-primary">100+</span>
              <span className="text-xs md:text sm">ACTIVE HIVES</span>
            </div>
            <div className="flex flex-col gap-3 items-left">
              <span className="text-md md:text-lg font-semibold text-primary">100+</span>
              <span className="text-xs md:text sm">ACTIVE HIVES</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default OurPhilosophy