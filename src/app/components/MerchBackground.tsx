import React from 'react'
import Image from 'next/image';

const MerchBackground = () => {
  return (
    <div className='absolute w-full h-full'>
          <Image 
            src="/merch/bg-merch-1.svg"
            fill
            alt="home background"
            sizes='none'
            className='object-cover'
          />
    </div>
  )
}

export default MerchBackground