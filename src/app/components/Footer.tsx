import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-[#E9E3D7] text-center z-50'>
      <div className='bg-[#E9E3D7] py-3 flex flex-col h-full gap-2'>
        <p >Contact us:</p>
        <div className='flex justify-center flex-col '>
            <a href="">Line/Wa</a>
            <a href="">Instagram ITP</a>
        </div>
      </div>
      <div className='bg-black py-2'>
        <p className='text-white'>© Introduction to Psychology 2024</p>
      </div>
    </div>
  )
}

export default Footer
