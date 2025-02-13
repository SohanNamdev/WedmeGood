import React from 'react'

const Footer = () => {
  return (
    <div className='h-92 w-full bg-[#FFFFFF] cursor-pointer flex border-t-2 border-gray-400 gap-10  items-center justify-center'>
        <div className='a h-full w-64   p-8'>
            <h1 className='text-xl font-semibold'>Start Planning</h1>
            <h3 className='mt-4'>Search By Vendor</h3>
            <h3 className='mt-3'>Search By City</h3>
            <h3 className='mt-3'>Download Our App</h3>
            <h3 className='mt-3'>Top Rated Vendors</h3>
            <h3 className='mt-3'>Destination weddings</h3>
        </div>
        <div className='b h-full w-64 p-8'>
           <h1 className='text-xl font-semibold'>Wedding Ideas</h1>
           <h3 className='mt-4'>Wedding Blog</h3>
           <h3 className='mt-3'>Wedding Inspiration Gallery</h3>
           <h3 className='mt-3'>Real WeddingSubmit Wedding</h3>
           <h3 className='mt-3'> Wedding Blog</h3>
        </div>
        <div className='c h-full w-64  p-8'>
        <h1 className='text-xl font-semibold'>Photo Gallery</h1>
           <h3 className='mt-4'>Bridal Wear</h3>
           <h3 className='mt-3'>Wedding Jewellary</h3>
           <h3 className='mt-3'>Wedding decor</h3>
           <h3 className='mt-3'> Wedding Photography</h3>
        </div>
        <div className='d h-full w-64 p-8 '>
        <h1 className='text-xl font-semibold'>Wedding Ceremonys</h1>
           <h3 className='mt-4'>Bridal Wear</h3>
           <h3 className='mt-3'>Wedding Jewellary</h3>
           <h3 className='mt-3'>Wedding decor</h3>
           <h3 className='mt-3'> Wedding Photography</h3>
        </div>
        
    </div>
  )
}

export default Footer