import React from 'react'
import Image from 'next/image';

const HomeBackground = () => {
  return (
    <div className='absolute w-full h-full'>
          <Image 
            src="home/bg-polos.svg"
            fill
            alt="home background"
            sizes='none'
            className='object-cover'
          />
    </div>
  )
}

export default HomeBackground