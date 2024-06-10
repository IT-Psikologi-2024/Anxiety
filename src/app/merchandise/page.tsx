import React from 'react'
import { Navbar } from '../components/Navbar'
import MerchBackground from '../components/MerchBackground';

const MerchandisePage = () => {
  return (
    <div className='absolute w-full h-[3855px]'>
      <Navbar />
      <div>
        <MerchBackground />
      </div>
    </div>
  )
}

export default MerchandisePage