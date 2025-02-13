import React from 'react'

const Page5 = () => {
  return (
    <div className='w-full h-screen bg-[#FBFBFB] flex justify-center items-center '>
        <div className='w-3/4 h-2/4 relative flex  rounded-2xl  bg-[#ffc9c1]'>
        <div className='a h-full w-3/4 '>
        <h1 className='text-2xl font-semibold p-10'>Download The WedMeGood Mobile App Today!</h1>
        <h3 className='text-pink-800 px-10'>Save Weddings Ideas , Shortlist Vendors , Get Free Wedding Checklist</h3>
        <h2 className='px-10 py-2'>You will receive an SMS with a link to download the App</h2>
        <button className='bg-pink-600 text-white font-semibold px-6 py-4 relative left-36 top-11 rounded-full'>Download The App</button>
        </div>
        <div className=' h-full w-1/4 '>
          <img className='w-56 h-92 p-5' src="https://image.wedmegood.com/resized/500X/images/banner/download_app.jpg" alt="" />        
        </div>
        </div>
    </div>
  )
}

export default Page5