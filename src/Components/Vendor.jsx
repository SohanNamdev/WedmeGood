import React, { useState } from "react";

const Vendor = () => {
    const cards = [
      {
        image:
          "https://image.wedmegood.com/resized/300X/uploads/option_image/62/4-star-above-hotels.png",
        title: "4 Star & Above Wedding Hotels",
        description: "Luxurious venues for a grand celebration.",
      },
      {
        image:
          "https://image.wedmegood.com/resized/300X/uploads/option_image/63/banquet-halls.png",
        title: "Banquet Halls",
        description: "Spacious and elegant banquet halls for your events.",
      },
      {
        image:
          "https://image.wedmegood.com/resized/300X/uploads/option_image/64/lawn-farm-house.jpg",
        title: "Marriage Garden / Lawns",
        description: "Beautiful outdoor venues for your dream wedding.",
      },
    ];
  
    return (
      <div className="w-full p-14 h-70">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex items-center bg-[#F4D5C2] border rounded-lg p-4 shadow-lg"
            >
              {/* Image Section */}
              <img
                src={card.image}
                alt={card.title}
                className="w-24 h-24 rounded-lg object-cover mr-4"
              />
  
              {/* Text Section */}
              <div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Vendor;
  