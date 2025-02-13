import React from 'react';

const Rectangle = () => {
  const data = [
    {
      Image: 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/1/venues.jpg',
      name: 'Venues',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed libero dolores',
      bgColor :'bg-[#D8DFFC]'
    },
    {
      Image: 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/2/photographers.jpg',
      name: 'PhotoGraphers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed libero dolores',
      bgColor :'bg-[#F4D5C2]'
    },
    {
      Image: 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/3/makeup.jpg',
      name: 'Makeup',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed libero dolores',
      bgColor :'bg-[#DFB2AD]'
    },
    {
      Image: 'https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/genie_dweb.jpg',
      name: 'Pre-wedding Shoot',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed libero dolores',
      bgColor :'bg-[#F6B896]'
    },
    {
      Image: 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/7/planning-decor.jpg',
      name: 'Planning & Decor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed libero dolores',
      bgColor :'bg-[#CFCDB8]'
    },
    {
      Image: 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/4/bridal-wear.jpg',
      name: 'Bridal Wear',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed libero dolores',
      bgColor :'bg-[#D8DFFC]'
    },
  ];

  return (
    <div className="h-110 w-full bg-[#FBFBFB] p-5">
      <h1 className='text-2xl font-semibold py-5 text-gray-900'>Wedding Categories</h1>
      <div className="grid grid-cols-3 gap-4">
        {data.map((elem, index) => (
          <div
            key={index}
            className={`${elem.bgColor} h-30 flex justify-between rounded-lg overflow-hidden shadow-lg`}
          >
            <div className="p-4 w-[60%]">
              <h1 className="font-semibold text-xl">{elem.name}</h1>
              <p className="text-sm text-gray-600">{elem.description}</p>
            </div>
            <div className="w-[40%]">
              <img
                className="h-full w-full object-cover rounded-l-full"
                src={elem.Image}
                alt={elem.name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rectangle;
