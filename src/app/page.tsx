import React from 'react';
import { Navbar } from './components/Navbar';
import Image from 'next/image';
import Footer from './components/Footer';

const MyApp: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='relative min-h-screen flex flex-col overflow-hidden'>

        <div className='absolute w-full h-full'>
          <Image 
            src="/bg-polos.svg"
            fill
            alt="home background"
            sizes='none'
            className='object-cover'
          />
        </div>


        <div className='flex flex-col flex-grow'>
          {/* Your content goes here */}

          <div className='flex w-fit items-start relative mt-[-4rem]'>
            <img src="/awan.svg" alt="awan 1" className=''/>
          </div>

          <div className='flex justify-end relative mt-[-11.5rem] mr-[7rem]'>
            <div className='flex justify-end z-10'>
              <img src="/awan.svg" alt="awan 2" className=''/>
            </div>
          </div>

          <div className='flex relative mt-[-5rem]'>
            <div className='absolute w-fit flex left-[-16.8rem] self-center'>
              <img src="/awan-utuh.svg" alt="awan 3" className=''/>
            </div>

            <div className='flex relative justify-end ml-12'>
              <img src="/desc-itp.svg" alt="Deskripsi ITP" className=''/>
            </div>

            <div className='flex relative ml-8'>
              <img src="/logo-itp.svg" alt="Logo ITP" className=''/>
            </div>
          </div>

          <div className='flex justify-between relative'>
            <div className='flex relative '>
              <img src="/ita-ito-awan.svg" alt="Ita Ito" className='h-[70%] self-end mt-[-3rem]'/>
            </div>
            <div className='flex justify-end items-start'>
              <img src="/lolipop-biru.svg" alt="Lolipop 1" className=''/>
            </div>
          </div>

          <div className='flex justify-end relative'>
            <div className='flex justify-end'>
              <img src="/awan-kanan.svg" alt="Awan Kanan" className='h-7/10'/>
            </div>
          </div>

          <div className='flex relative '>
            <img src="/pohon-lolipop.svg" alt="Pohon Lolipop" className='w-[30%]'/>
          </div>

          <div className='flex justify-end relative 2xl:mt-[-18rem]'>
            <div className='flex justify-end overflow-hidden mt-[4rem] w-fit h-4/5'>
              <img src="/lolipop-merah.svg" alt="Lolipop Merah" className='mr-[-5.8rem] w-[80%]'/>
            </div>
          </div>

          <div className='flex relative mt-[-5rem] justify-center pl-[7rem]'>
            <div className='flex relative justify-end'>
              <a href='/tickettypes' className='flex relative justify-end items-center'>
                <img src="/get-ticket-btn.svg" alt="Button Ticket" className=' hover:scale-110 transition ease-in-out w-[80%]' />
              </a>
            </div>

            <div className='flex relative'>
              <a href='/merchandise' className='flex relative items-center '>
                <img src="/get-merch-btn.svg" alt="Button Merch" className=' hover:scale-110 transition ease-in-out pl-[5rem] w-[80%]'/>
              </a>
            </div>
          </div>

          <div className='flex relative'>
            <div className='flex self-end justify-end ml-[5rem]'>
              <img src="/ito-jualan-1.svg" alt="Ito Jualan" />
            </div>
            <div className='flex self-end mr-[5rem]'>
              <img src="/ita-jualan-1.svg" alt="Ita Jualan"/>
            </div>  
          </div>
        </div>
      </div>
      <Footer/>
    </div>

  );
};

export default MyApp;