import React from 'react';

const Center = () => {
  return (
    <div className="relative h-[65vh] w-full">
      {/* Image Container with Transparent Black Overlay */}
      <div className="relative w-full h-full">
        <img
          className="w-full h-full object-cover"
          src="https://image.wedmegood.com/resized/1900X/uploads/city_bg_image/1/delhi_bg.jpeg"
          alt="Wedding Background"
        />
        {/* Transparent Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-20"></div>
      </div>
      
      {/* Centered Text */}
      <h1 className="absolute top-1/2 z-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-[math] text-6xl">
        Your Wedding, Your Way
      </h1>
      <p className=' absolute top-[60%] z-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  text-xl'>Find the best wedding vendors with thousands of trusted reviews</p>
      <input className=' absolute top-3/4 z-20 left-[35%] transform -translate-x-1/2 -translate-y-1/2 bg-white text-gray-600 text-2xl py-3 px-2 border-none' type="text" placeholder='Select vendor type' />
      <input className=' absolute top-3/4 z-20 left-[54.3%] transform -translate-x-1/2 -translate-y-1/2 bg-white text-gray-600 text-2xl py-3 px-2 border-none' type="text" placeholder='Select City' />
      <button className=' absolute top-3/4 z-20 left-[68.5%] transform -translate-x-1/2 -translate-y-1/2 text-xl text-white bg-[#E72E77] py-3 px-4'>Get Started</button>
      <p className='whitespace-nowrap absolute top-[90%] z-20 left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-sm text-white'>Popular Searches: Wedding Photographers in IndiaBridal Makeup Artists in IndiaWedding Cards in IndiaWedding Venues in India</p>
    </div>
  );
};

export default Center;
