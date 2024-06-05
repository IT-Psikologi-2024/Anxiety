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

          <div className='flex w-fit items-start relative mt-[-2.6rem] md:mt-[-4rem]'>
            <img src="/awan.svg" alt="awan 1" className='w-[50%] md:w-[60%] lg:w-[70%] xl:w-[100%]'/>
          </div>

          <div className='flex justify-end relative mt-[-5.2rem] md:mt-[-5.5rem] lg:mt-[-7.3rem] xl:mt-[-11.5rem] mr-5 md:mr-[3rem] lg:mr-[6rem] xl:mr-[3rem] 2xl:mr-[7rem]'>
            <div className='flex justify-end z-10'>
              <img src="/awan.svg" alt="awan 2" className='w-[50%] md:w-[60%] lg:w-[70%] xl:w-[100%]'/>
            </div>
          </div>

          <div className='flex relative mt-[-2.5rem] lg:mt-[-3.5rem] xl:mt-[-5rem]'>
            <div className='absolute w-fit flex left-[-8rem] md:left-[-10rem] lg:left-[-13rem] xl:left-[-16.8rem] self-center'>
              <img src="/awan-utuh.svg" alt="awan 3" className='w-[50%] md:w-[60%] lg:w-[70%] xl:w-[100%]'/>
            </div>

            <div className='flex relative justify-end ml-[6rem] md:ml-[5rem] lg:ml-[10rem]'>
              <img src="/desc-itp.svg" alt="Deskripsi ITP" className=''/>
            </div>

            <div className='flex relative mr-[1rem] md:mr-[2rem] lg:mr-[5rem]'>
              <img src="/logo-itp.svg" alt="Logo ITP" className=''/>
            </div>
          </div>

          <div className='flex justify-between relative'>
            <div className='flex relative '>
              <img src="/ita-ito-awan.svg" alt="Ita Ito" className='h-[70%] md:h-[60%] xl:h-[75%] self-end mt-[-3rem]'/>
            </div>
            <div className='flex justify-end items-start'>
              <img src="/lolipop-biru.svg" alt="Lolipop 1" className=''/>
            </div>
          </div>

          <div className='flex justify-end relative'>
            <div className='flex justify-end'>
              <img src="/awan-kanan.svg" alt="Awan Kanan" className='h-[50%] md:h-[55%] lg:h-[65%] xl:h-[70%]'/>
            </div>
          </div>

          <div className='flex relative mt-[-5rem] md:mt-[-3rem] lg:mt-0 '>
            <img src="/pohon-lolipop.svg" alt="Pohon Lolipop" className='w-[40%] md:w-[30%] xl:w-[40%]'/>
          </div>

          <div className='flex justify-end relative mt-[-11rem] md:mt-[-12rem] lg:mt-[-10rem] xl:mt-[-13rem] 2xl:mt-[-18rem]'>
            <div className='flex justify-end overflow-hidden mt-[4rem] w-fit h-4/5'>
              <img src="/lolipop-merah.svg" alt="Lolipop Merah" className='mr-[-4rem] md:mr-[-5.8rem] w-[50%] md:w-[60%] lg:w-[80%]'/>
            </div>
          </div>

          <div className='flex relative mt-[-4rem] md:mt-[-8rem] lg:mt-[-10rem] xl:mt-[-9rem] 2xl:mt-[-5rem] justify-center pl-[3rem] md:pl-[7rem]'>
            <div className='flex relative justify-end'>
              <a href='/tickettypes' className='flex relative justify-end items-center'>
                <img src="/get-ticket-btn.svg" alt="Button Ticket" className=' hover:scale-110 transition ease-in-out w-[70%] md:w-[60%] xl:w-[80%]' />
              </a>
            </div>

            <div className='flex relative'>
              <a href='/merchandise' className='flex relative items-center '>
                <img src="/get-merch-btn.svg" alt="Button Merch" className=' hover:scale-110 transition ease-in-out pl-[5rem] w-[76%] md:w-[65%] xl:w-[80%]'/>
              </a>
            </div>
          </div>

          <div className='flex relative md:mt-8 lg:mt-0'>
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