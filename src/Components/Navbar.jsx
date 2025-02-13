import React from 'react'
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='w-full p-5 h-16 bg-[#E72E77] flex items-center justify-between'>
      <img className='h-9' src="https://images.wedmegood.com/images/WMG-logo.svg" alt="" />
      <div className='flex text-[20px] text-white w-1/2 h-full gap-10'>
      <a href="">Venues</a>
      <a href="">Vendors</a>
      <a href="">Photos</a>
      <a href="">Real Weddings</a>
      
      </div>
      <div className='flex items-center justify-between w-42 h-full'>
      <i className='text-2xl px-3 py-2 font-bold rounded-full  bg-[#B4245D] text-white'><CiSearch /></i>
      <button className='px-7 py-2 text-white font-bold rounded-full bg-[#B4245D]'>Login</button>
      </div>
    </div>
  )
}

export default Navbar