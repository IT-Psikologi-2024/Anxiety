import React from 'react'
import Navbar from '../../../components/Navbar';
import MerchBackground from '../../../components/MerchBackground';

const PaymentPage = () => {
  return (
    <div className="flex flex-col">
        <Navbar />
        <div className="min-h-[1413px] max-h-[1413px] sm:min-h-[1600px] sm:max-h-[1600px] h-full flex flex-col overflow-hidden relative">
          <MerchBackground />
          <div className="flex flex-col flex-grow">
            <div className='flex absolute right-[25vw] top-[-10vh]'>
              <img src="/merch/payment/awan-1.svg" alt="Awan 1" className='w-3/4'/>
            </div>
            <div className='flex absolute top-[15vh]'>
              <img src="/merch/payment/awan-2.svg" alt="Awan 2" className='w-3/4'/>
            </div>
            <div className='flex absolute left-[18vw] top-[20vh]'>
              <img src="/merch/payment/awan-3.svg" alt="Awan 3" className='w-3/4'/>
            </div>
            <div className="flex absolute justify-end top-[15vh] right-0">
                <img src="/merch/payment/awan-6.svg" alt="Awan 6" className='w-3/4'/>
            </div>
            <div className="flex absolute top-[55vh] ">
                <img src="/merch/payment/awan-4.svg" alt="Awan 4" className='w-3/4'/>
            </div>
            <div className='flex absolute top-[100vh] right-[5vw]'>
              <img src="/merch/payment/awan-5.svg" alt="Awan 5" className='w-3/4'/>
            </div>
            <div className='flex absolute justify-end right-0 bottom-[40vh]'>
              <img src="/merch/loli-kanan.svg" alt="Loli Kanan" className='w-3/5'/>
            </div>
            <div className="flex flex-col absolute bottom-0 w-full sm:visible invisible">
                <img src="/merch/rumput-1.svg" alt="Rumput" />
            </div>
            <div className="flex flex-col absolute bottom-0 w-full sm:invisible">
                <img src="/merch/mobile/rumput-1.svg" alt="Rumput" />
            </div>
            <div className='flex absolute bottom-[40vh]'>
              <img src="/merch/payment/loli-kiri.svg" alt="Loli Kiri" className='w-3/5'/>
            </div>
            
            <div className='h-[1600px] w-full relative flex items-center justify-center'>
              <div className='w-4/5 h-4/5 bg-[#C8E3F6CC] backdrop-opacity-10 rounded-[25px] shadow-inner-custom flex flex-col text-product-color p-16 font-black'>
                <p className='text-6xl text-center italic'>Pembayaran</p>
              </div>
            </div>

            

            <div className='flex absolute bottom-0'>
              <img src="/merch/payment/ito-1.svg" alt="Ito" className='w-3/5'/>
            </div>
            <div className='flex absolute bottom-0 right-0 justify-end'>
              <img src="/merch/payment/ivy-1.svg" alt="Ivy" className='w-3/5'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PaymentPage