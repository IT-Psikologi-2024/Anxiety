import MerchBackground from '@/app/components/merch/MerchBackground'
import Navbar from '@/app/components/Navbar'
import React from 'react'

const TerimaKasihPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="min-h-screen flex flex-col overflow-hidden relative">
        <MerchBackground />
            <div className="flex flex-col flex-grow">
                <div className='flex absolute w-full invisible sm:visible justify-center'>
                    <img src="/merch/terimakasih/awan-1.svg" alt="Awan 1" className='w-2/5 lg:w-1/3'/>
                </div>
                <div className='flex absolute top-[10vh] w-full invisible sm:visible'>
                    <img src="/merch/terimakasih/awan-2.svg" alt="Awan 2" className='w-2/5 lg:w-1/3'/>
                </div>
                <div className='flex absolute top-[25vh] w-full invisible sm:visible'>
                    <img src="/merch/terimakasih/awan-3.svg" alt="Awan 3" className='w-2/5 lg:w-1/3'/>
                </div>
                <div className='flex absolute w-full invisible sm:visible justify-end top-[20vh]'>
                    <img src="/merch/terimakasih/awan-4.svg" alt="Awan 4" className='w-2/5 lg:w-1/3'/>
                </div>

                <div className='flex absolute sm:invisible'>
                    <img src="/merch/terimakasih/mobile/awan-1.svg" alt="Awan 1" />
                </div>
                <div className='flex absolute w-full justify-end sm:invisible'>
                    <img src="/merch/terimakasih/mobile/awan-2.svg" alt="Awan 2" />
                </div>
                <div className='flex absolute top-[30vh] sm:invisible'>
                    <img src="/merch/terimakasih/mobile/awan-3.svg" alt="Awan 3" />
                </div>

                <div className="flex flex-col absolute bottom-0 w-full sm:visible invisible">
                    <img src="/merch/terimakasih/rumput.svg" alt="Rumput" />
                </div>
                <div className="flex flex-col absolute bottom-0 w-full sm:invisible">
                    <img src="/merch/terimakasih/mobile/rumput.svg" alt="Rumput" />
                </div>

                <div className='flex w-full my-[20vh] justify-center'>
                    <div className='bg-[#C8E3F6CC] backdrop-opacity-5 w-3/4 min-h-fit rounded-[25px] shadow-inner-custom flex flex-col space-y-20 sm:space-y-10 text-center pt-6 pb-28 sm:py-6 font-black italic '>
                        <div className='text-white text-2xl sm:text-4xl drop-shadow-md'>
                            <p>
                                Pre-Order
                            </p>
                        </div> 
                        <div className='flex flex-col text-product-color text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg px-8'>
                            <p>
                                Terima Kasih
                            </p>
                            <p>
                                Sudah Membeli
                            </p>
                            <p>
                                Merchandise <span className='text-[#EF701F]'>ITP</span>
                            </p>
                            <p>
                                2024!
                            </p>
                        </div>
                        <div className='text-white lg:text-base text-xs sm:text-sm drop-shadow-md px-[10vw] sm:px-[20vw]'>
                            <p>
                                *Mohon untuk merekam pada saat membuka paket sebagai bukti jika ada kesalahan pengiriman
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full absolute sm:visible invisible flex bottom-0'>
                    <img src="/merch/terimakasih/ito-1.svg" alt="Ito" className='w-1/3'/>
                </div>
                <div className='w-full absolute sm:visible invisible flex justify-end bottom-0'>
                    <img src="/merch/terimakasih/ivy-1.svg" alt="Ivy" className='w-[30%]'/>
                </div>
                <div className='w-full absolute sm:invisible flex bottom-0'>
                    <img src="/merch/terimakasih/mobile/ito-1.svg" alt="Ito" className='w-1/2'/>
                </div>
                <div className='w-full absolute sm:invisible flex justify-end bottom-0'>
                    <img src="/merch/terimakasih/mobile/ivy-1.svg" alt="Ivy" className='w-[55%]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TerimaKasihPage