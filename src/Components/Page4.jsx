import React from 'react';

const Page4 = () => {
  const data = [
    {
      image: 'https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/wedsta_dweb.jpg',
      title: 'Wedsta',
      description: 'WMG At Home, Family Makeup Services',
    },
    {
      image: 'https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/genie_dweb.jpg',
      title: 'Photography',
      description: 'Capture Your Special Moments',
    },
    {
      image: 'https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/venue_dweb.jpg',
      title: 'Catering',
      description: 'Delicious Catering Services for Weddings',
    },
    {
        image: 'https://image.wedmegood.com/resized/450X/uploads/images/6e32ace945e949a98f6c0b4e8f2cf62arealwedding/FSWEdited-173.jpg?crop=254,209,1626,914',
        title: 'Wedding Point',
        description: 'Delicious Catering Services for Weddings',
      },
  ];

  return (
    <div className="h-screen w-full bg-[#FBFBFB] flex justify-center items-center">
      <div className="grid grid-cols-2 gap-6 w-3/4">
        {data.map((card, index) => (
          <div
            key={index}
            className="p-4 bg-[#FFFFFF] rounded-lg shadow-lg flex flex-col items-center hover:shadow-2xl transition-shadow duration-300 ease-out"
          >
            {/* Image */}
            <img
              className="h-48 w-full object-cover rounded-t-lg transition-transform duration-500 ease-out hover:scale-105"
              src={card.image}
              alt={card.title}
            />

            {/* Text */}
            <h1 className="text-2xl font-bold mt-4 text-center">{card.title}</h1>
            <h3 className="text-lg text-gray-700 mt-2 text-center">
              {card.description}
            </h3>

            {/* Button */}
            <button className="mt-4 px-6 py-2 bg-white font-medium rounded-full border-2 border-pink-600 transition-all text-pink-500 duration-300 ease-out hover:bg-pink-500 hover:text-white">
              Know More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page4;
