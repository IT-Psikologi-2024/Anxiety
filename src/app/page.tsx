import React from 'react';
import { Navbar } from './components/Navbar';
import Footer from './components/home/Footer';
import HomeBackground from './components/home/HomeBackground';
import InstagramEmbed from './components/home/InstagramPost';

const MyApp: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='relative min-h-screen flex flex-col overflow-hidden'>

        <HomeBackground/>

        <div className='flex flex-col flex-grow'>

          <div className='flex w-fit items-start absolute top-[8rem] sm:top-0 sm:relative sm:mt-[-2.6rem] md:mt-[-4rem] left-[-3rem] sm:left-0'>
            <img src="home/awan.svg" alt="awan 1" className='w-[50%] md:w-[60%] lg:w-[70%] xl:w-[100%]'/>
          </div>

          <div className='flex justify-end relative mt-[-0.75rem] sm:mt-[-6.3rem] md:mt-[-7rem] lg:mt-[-9rem] xl:mt-[-15rem] mr-[2.5rem] sm:mr-5 md:mr-[3rem] lg:mr-[6rem] xl:mr-[3rem] 2xl:mr-[7rem]'>
            <div className='flex justify-end z-10'>
              <img src="home/awan.svg" alt="awan 2" className='w-[50%] md:w-[60%] lg:w-[70%] xl:w-[100%]'/>
            </div>
          </div>

          <div className='flex justify-end sm:invisible visible'>
            <div className='flex justify-end absolute top-[13.2rem] right-[-2.5rem]'>
              <img src="home/awan.svg" alt="awan 2" className='w-[50%] md:w-[60%] lg:w-[70%] xl:w-[100%]'/>
            </div>
          </div>

          <div className='flex relative mt-[-2.5rem] lg:mt-[-3.5rem] xl:mt-[-5rem] flex-col-reverse sm:flex-row gap-4 sm:gap-0'>
            <div className='flex justify-center'>
              <div className='absolute w-fit flex left-[-9.5rem] sm:left-[-8rem] md:left-[-10rem] lg:left-[-13rem] xl:left-[-16.8rem] self-center'>
                <img src="home/awan-utuh.svg" alt="awan 3" className='w-[50%] md:w-[60%] lg:w-[70%] xl:w-[100%]'/>
              </div>

              <div className='flex relative justify-center sm:justify-end sm:ml-[6rem] md:ml-[5rem] lg:ml-[10rem] 2xl:ml-[13rem]'>
                <img src="home/desc-itp.svg" alt="Deskripsi ITP" className='w-[70%] sm:w-full'/>
              </div>
            </div>

            <div className='flex relative sm:mr-[1rem] md:mr-[2rem] lg:mr-[5rem] justify-center sm:justify-normal'>
              <img src="home/logo-itp.svg" alt="Logo ITP" className='w-[70%] sm:w-full'/>
            </div>
          </div>

          <div className='flex justify-between relative'>
            <div className='flex sm:relative invisible sm:visible absolute'>
              <img src="home/ita-ito-awan.svg" alt="Ita Ito" className='h-[70%] md:h-[60%] xl:h-[75%] self-end mt-[-12rem]'/>
            </div>

            <div className='flex relative sm:invisible visible'>
              <img src="home/mobile/ita-ito-awan.svg" alt="Ita Ito Mobile" className='w-[30rem] self-end mt-[-12rem]'/>
            </div>

            <div className='flex justify-end items-start sm:mb-0 mb-12'>
              <img src="home/lolipop-biru.svg" alt="Lolipop 1" className='sm:w-full w-[90%]'/>
            </div>
          </div>

          <div className='flex lg:flex-row w-full lg:justify-evenly items-center flex-col z-10 '>
            <InstagramEmbed permalink='https://www.instagram.com/p/C1CTB9DRVks/'/>
            <InstagramEmbed permalink='https://www.instagram.com/p/C1CTASMRUlu/'/>
            <InstagramEmbed permalink='https://www.instagram.com/p/C1CS9eJxgnu/'/>
          </div>

          <div className='flex justify-end relative'>
            <div className='flex sm:relative justify-end invisible sm:visible absolute'>
              <img src="home/awan-kanan.svg" alt="Awan Kanan" className='h-[50%] md:h-[55%] lg:h-[65%] xl:h-[70%]'/>
            </div>

            <div className='flex relative justify-end sm:invisible visible sm:absolute'>
              <img src="home/mobile/awan-kanan.svg" alt="Awan Kanan" className=''/>
            </div>

            <div>

            </div>
          </div>

          <div className='flex relative mt-[-5rem] md:mt-[-3rem] lg:mt-0 invisible sm:visible'>
            <img src="home/pohon-lolipop.svg" alt="Pohon Lolipop" className='w-[40%] md:w-[30%] xl:w-[40%]'/>
          </div>

          <div className='flex justify-end relative sm:mt-[-11rem] md:mt-[-12rem] lg:mt-[-10rem] xl:mt-[-13rem] 2xl:mt-[-18rem]'>
            <div className='flex justify-end overflow-hidden sm:mt-[4rem] sm:w-fit sm:h-4/5 sm:relative absolute bottom-[13rem] sm:bottom-0 sm:right-0 right-16'>
              <img src="home/lolipop-merah.svg" alt="Lolipop Merah" className='w-[25%] sm:mr-[-4rem] md:mr-[-5.8rem] sm:w-[50%] md:w-[60%] lg:w-[80%]'/>
            </div>
          </div>

          <div className='flex relative sm:mt-[-4rem] md:mt-[-8rem] lg:mt-[-10rem] xl:mt-[-9rem] 2xl:mt-[-5rem] justify-center sm:pl-[3rem] md:pl-[7rem]'>
            <div className='flex relative justify-end'>
              <a href='/ticket' className='flex relative justify-end items-center'>
                <img src="home/get-ticket-btn.svg" alt="Button Ticket" className=' hover:scale-110 transition ease-in-out w-[75%] sm:w-[70%] md:w-[60%] xl:w-[80%]' />
              </a>
            </div>

            <div className='flex relative'>
              <a href='/merchandise' className='flex relative items-center'>
                <img src="home/get-merch-btn.svg" alt="Button Merch" className='hover:scale-110 transition ease-in-out sm:pl-[5rem] w-[80%] sm:w-[76%] md:w-[65%] xl:w-[80%]'/>
              </a>
            </div>
          </div>

          <div className='flex relative mt-8 sm:mt-0 md:mt-8 lg:mt-4'>
            <div className='flex self-end justify-end sm:ml-[5rem]'>
              <img src="home/ito-jualan-1.svg" alt="Ito Jualan" className='sm:w-4/5'/>
            </div>
            <div className='flex self-end sm:mr-[5rem]'>
              <img src="home/ita-jualan-1.svg" alt="Ita Jualan" className='sm:w-4/5'/>
            </div>  
          </div>
        </div>
      </div>
      <Footer/>
    </div>

  );
};

export default MyApp;