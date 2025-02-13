import React from "react";

const Easeimg = () => {
  const images = [
    "https://image.wedmegood.com/resized/300X/uploads/banner_image/1/bridal-wear.jpg", 
    "https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg",
    "https://image.wedmegood.com/resized/300X/uploads/banner_image/3/photography.jpg",
    "https://image.wedmegood.com/resized/300X/uploads/banner_image/4/cards.jpg",
    "https://image.wedmegood.com/resized/300X/uploads/banner_image/5/caterers.jpg",
  ];

  return (
    <div className="flex items-center justify-center h-64 space-x-4">
      {images.map((src, index) => (
        <div
          key={index}
          className="relative group w-64 h-full overflow-hidden cursor-pointer"
        >
          {/* Image */}
          <img
            src={src}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform ease-out duration-300"
          />

          {/* Overlay under the image */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300 group-hover:bg-gray-600 transition-colors ease-out duration-300"></div>
        </div>
      ))}
    </div>
  );
};

export default Easeimg;
