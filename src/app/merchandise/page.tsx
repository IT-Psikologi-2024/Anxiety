import React from 'react'
import { Navbar } from '../components/Navbar'
import Image from 'next/image'

const MerchandisePage = () => {
  return (
    <div className='absolute w-full h-[4111px]'>
      <Navbar />
      <Image 
            src="/bg-merch-1.svg"
            fill
            alt="Merchandise Background"
            sizes='none'
            className='object-cover'
          />
    </div>
  )
}

export default MerchandisePage