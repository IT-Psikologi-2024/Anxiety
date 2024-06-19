'use client'
import React, { useState } from 'react'
import Navbar from '../../../components/Navbar';
import MerchBackground from '../../../components/MerchBackground';
import { useMerchContext } from '../../../context/MerchContext';

const PaymentPage = () => {
  const { selectedFileBayar, setSelectedFileBayar, errorMessageBayar, setErrorMessageBayar } = useMerchContext();
  const [fileError, setFileError] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file.type.startsWith('image/')) {
        setSelectedFileBayar(file);
        setErrorMessageBayar('');
        setFileError('');
      } else {
        setErrorMessageBayar('Please select a valid image file.');
      }
    }
  };

  const handleSubmit = () => {
    if (!selectedFileBayar) {
      setFileError('Please select a file before submitting.');
    } else {
      
    }
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="min-h-[1338px] sm:min-h-[1800px] sm:max-h-[1800px] h-full flex flex-col overflow-hidden relative">
        <MerchBackground />
        <div className="flex flex-col flex-grow">
          <div className='flex absolute right-[25vw] top-[-10vh] sm:visible invisible'>
            <img src="/merch/payment/awan-1.svg" alt="Awan 1" className='w-3/5 sm:w-3/4'/>
          </div>
          <div className='flex absolute top-[20vh] sm:top-[15vh]'>
            <img src="/merch/payment/awan-2.svg" alt="Awan 2" className='w-3/5 sm:w-3/4'/>
          </div>
          <div className='flex absolute right-0 left-[18vw] top-[20vh] sm:visible invisible'>
            <img src="/merch/payment/awan-3.svg" alt="Awan 3" className='w-3/5 sm:w-3/4'/>
          </div>
          <div className="flex absolute justify-end top-[-5vh] sm:top-[15vh] right-0">
            <img src="/merch/payment/awan-6.svg" alt="Awan 6" className='w-3/5 sm:w-3/4'/>
          </div>
          <div className="flex absolute top-[35vh] sm:top-[55vh] ">
            <img src="/merch/payment/awan-4.svg" alt="Awan 4" className='w-3/5 sm:w-3/4'/>
          </div>
          <div className='flex absolute sm:top-[100vh] w-full justify-end right-0 top-[25vh] sm:right-[5vw]'>
            <img src="/merch/payment/awan-5.svg" alt="Awan 5" className='w-3/5 sm:w-3/4'/>
          </div>
          <div className='flex absolute justify-end right-0 bottom-[42vh] -mr-[3rem] sm:mr-0 sm:bottom-[15vh] md:bottom-[10vh] lg:bottom-[20vh] xl:bottom-[25vh] 2xl:bottom-[40vh]'>
            <img src="/merch/loli-kanan.svg" alt="Loli Kanan" className='w-3/4 sm:w-1/2 md:w-3/5 xl:w-3/4'/>
          </div>
          <div className="flex flex-col absolute bottom-0 w-full sm:visible invisible">
            <img src="/merch/rumput-1.svg" alt="Rumput" />
          </div>
          <div className="flex flex-col absolute bottom-0 w-full sm:invisible">
            <img src="/merch/mobile/rumput-1.svg" alt="Rumput" />
          </div>
          <div className='flex absolute sm:bottom-[15vh] md:bottom-[10vh] lg:bottom-[20vh] xl:bottom-[25vh] 2xl:bottom-[40vh] sm:visible invisible'>
            <img src="/merch/payment/loli-kiri.svg" alt="Loli Kiri" className='sm:w-1/2 md:w-3/5 xl:w-3/4'/>
          </div>
          
          <div className='h-[1000px] sm:h-max-[1600px] sm:h-[1600px] w-full relative flex items-center justify-center top-[10vh] z-10'>
            <div className='w-4/5 h-fit bg-[#C8E3F6CC] backdrop-opacity-10 rounded-[25px] shadow-inner-custom flex flex-col text-product-color p-6 sm:p-16 font-black space-y-4 sm:space-y-6'>
              <p className='text-2xl sm:text-3xl md:text-4xl xl:text-6xl text-center italic'>Pembayaran</p>
              <div className='flex flex-col w-full space-y-4 text-black text-center'>
                <div className='bg-white w-full rounded-[19px] shadow-inner-custom p-3 '>
                  <p className='text-sm sm:text-xl lg:text-2xl'>BCA a/n Amanda Aisyah Dungga <p>No. Rekening: 7115319213</p></p>
                </div>
                <div className='bg-white w-full rounded-[19px] shadow-inner-custom p-3 '>
                  <p className='text-sm sm:text-xl lg:text-2xl'>BCA a/n Amanda Aisyah Dungga <p>No. Rekening: 7115319213</p></p>
                </div>
                <div className='bg-white w-full rounded-[19px] shadow-inner-custom p-3 '>
                  <p className='text-sm sm:text-xl lg:text-2xl'>BCA a/n Amanda Aisyah Dungga <p>No. Rekening: 7115319213</p></p>
                </div>
              </div>
              <p className='text-2xl sm:text-3xl md:text-4xl xl:text-6xl text-center italic'>QRIS</p>
              <div className='relative w-full flex justify-center'>
                <div className='w-full bg-white flex justify-center items-center rounded-[19px] shadow-inner-custom p-4 sm:p-8'>
                  <img src="/merch/payment/qris.svg" alt="" className='w-4/5 md:w-3/4 lg:w-3/5 2xl:w-2/5'/>
                </div>
              </div>

              <p className='text-2xl sm:text-3xl md:text-4xl xl:text-6xl text-center italic'>Bukti Pembayaran</p>
              <div className='flex justify-center w-full sm:w-4/5 space-y-4 h-[50px] sm:h-[70px] text-2xl self-center z-30'>
                <label
                  htmlFor="file-input"
                  className={`bg-white w-full h-full rounded-[15px] sm:rounded-[19px] shadow-inner-custom flex justify-center items-center cursor-pointer ${fileError ? 'text-red-500' : 'text-gray-500'}`}
                >
                  <span>
                    {selectedFileBayar ? selectedFileBayar.name : (fileError || "Input File Here")}
                  </span>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className='hidden'
                    id='file-input'
                    accept="image/*"
                  />
                </label>
              </div>
              <div className='flex relative w-full justify-center items-center z-30'>
                <button
                  className='bg-[#FBB3D7] text-black sm:text-xl drop-shadow-md rounded-[37px] hover:scale-110 transition ease-in-out px-4 py-2'
                  onClick={handleSubmit}
                >
                  Kirim Bukti Bayar
                </button>
              </div>
            </div>
          </div>

          <div className='flex absolute bottom-0 invisible sm:visible z-20'>
            <img src="/merch/payment/ito-1.svg" alt="Ito" className='w-3/5'/>
          </div>
          <div className='flex absolute bottom-0 right-0 justify-end invisible sm:visible z-20'>
            <img src="/merch/payment/ivy-1.svg" alt="Ivy" className='w-3/5'/>
          </div>

          <div className='flex absolute bottom-0 sm:invisible z-10'>
            <img src="/merch/payment/mobile/ito-1.svg" alt="Ito" className=''/>
          </div>
          <div className='flex absolute bottom-0 right-0 justify-end sm:invisible z-10'>
            <img src="/merch/payment/mobile/ivy-1.svg" alt="Ivy" className=''/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage