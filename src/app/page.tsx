import React from 'react';
import { Navbar } from './components/Navbar';
import Image from 'next/image';

const MyApp: React.FC = () => {
  return (
      <div className='absolute w-full xl:h-[3490px] 2xl:h-[3657px]'>
        <Navbar />
          <Image 
            src="/bg-homepage.svg"
            fill
            alt="home background"
            sizes='none'
            className='object-cover'
          />
          <div className='flex w-fit items-start relative mt-[-1.5rem] sm:mt-[-2rem] md:mt-[-2.5rem] lg:mt-[-3rem] xl:mt-[-4rem]'>
            <img src="/awan.svg" alt="awan 1" className='w-5/12 md:w-3/5 lg:w-4/5 xl:w-full'/>
          </div>

          <div className='flex justify-end relative mt-[-5rem] sm:mt-[-4.45rem] md:mt-[-6.8rem] lg:mt-[-9.4rem] xl:mt-[-11.5rem] mr-[1rem] sm:mr-[1.5rem] md:mr-[2.2rem] lg:mr-[2.5rem] xl:mr-[4rem] 2xl:mr-[7rem]'>

            <div className='flex justify-end z-10'>
              <img src="/awan.svg" alt="awan 2" className='w-5/12 md:w-3/5 lg:w-4/5 xl:w-auto'/>
            </div>

          </div>

          <div className='flex relative mt:-[-2rem] md:mt-[-2.8rem] lg:mt-[-3.8rem] xl:mt-[-4.4rem] 2xl:mt-[-5rem]'>

            <div className='absolute w-fit flex left-[-6.8rem] md:left-[-9.6rem] lg:left-[-13.2rem] xl:left-[-16.2rem] 2xl:left-[-16.8rem] self-center'>
              <img src="/awan.svg" alt="awan 3" className='w-5/12 md:w-3/5 lg:w-4/5 xl:w-auto'/>
            </div>

            <div className='flex relative justify-end md:ml-[3rem] lg:ml-[7rem] xl:ml-[5rem] 2xl:ml-12'>
              <img src="/desc-itp.svg" alt="Deskripsi ITP" className='w-3/4'/>
            </div>

            <div className='flex relative lg:mr-[3rem] xl:mr-8 2xl:ml-8'>
              <img src="/logo-itp.svg" alt="Logo ITP" className=':w-3/4'/>
            </div>

          </div>

          <div className='flex justify-end relative'>

            <div className='flex justify-end'>
              <img src="/lolipop-biru.svg" alt="Lolipop 1" className='md:w-[55%] lg:w-[62%] xl:w-[72%] 2xl:w-4/5'/>
            </div>

          </div>

          <div className='flex relative mt-[-7rem] mr-[10rem]'>

            <img src="/ita-ito-1.svg" alt="Lolipop 1" className='w-[40%]'/>

          </div>

      </div>
  );
};

export default MyApp;
