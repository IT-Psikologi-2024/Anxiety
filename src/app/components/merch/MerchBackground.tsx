import React from 'react'
import Image from 'next/image';

const MerchBackground = () => {
  return (
    <div className='absolute w-full h-full'>
          <Image 
            src="/merch/bg-merch-1.svg"
            fill
            alt="Merch background"
            sizes='none'
            className='object-cover invisible sm:visible'
          />
          <Image
            src="/merch/mobile/bg-merch-1.svg"
            fill
            alt="Merch background"
            sizes='none'
            className='object-cover sm:invisible'
          />
    </div>
  )
}

export default MerchBackground