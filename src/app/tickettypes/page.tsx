import React from 'react';
import { Navbar } from '../components/Navbar';
import TicketTypeBackground from '../components/TicketTypeBackground';
import Footer from '../components/Footer';

const TicketTypesPage = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='relative min-h-screen h-full flex flex-col overflow-hidden sm:-mt-16'>
        <TicketTypeBackground />
        <div className='flex flex-col flex-grow sm:text-xs lg:text-lg xl:text-xl'>
          <div className='flex relative justify-center xl:-mt-4 lg:mb-16 sm:mt-8 md:mb-12'>
            <img src="/ticket/ticket-types-text.svg" alt="Ticket Text" className='w-4/5 sm:w-[70%] md:w-2/5'/>
          </div>

          <div className='flex relative justify-center mr-12 md:mb-8 lg:mb-0 sm:mr-[20rem] sm:-mt-10 md:-mt-[9rem] lg:mr-[22rem] lg:-mt-[7rem]  xl:mr-[35rem] xl:mt-[-9rem]'>
            <a href='/tickettypes/form' className='flex relative items-center sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] hover:scale-110 transition ease-in-out z-20'>
              <img src="/ticket/ticket-1.svg" alt="Ticket Candy 1" className='w-full' />
              <div className='absolute inset-0 flex flex-col items-center justify-center text-black font-bold mt-4'>
                <p>Tiket Presale</p>
                <p>Khusus Roadshow</p>
              </div>
            </a>
          </div>

          <div className='flex relative justify-center'>
            <a href='/tickettypes/form' className='z-20 flex relative items-center hover:scale-110 transition ease-in-out ml-8 sm:ml-0 -mt-12 sm:w-[45%] md:-mt-[4rem] md:w-[40%] lg:-mt-[3rem] lg:w-[35%] xl:w-[30%] 2xl:-mt-[4rem]'>
              <img src="/ticket/ticket-2.svg" alt="Ticket Candy 2" className='w-full' />
              <div className='absolute inset-0 flex items-center justify-center text-black font-bold mt-4'>
                <p>Tiket Presale 1</p>
              </div>
            </a>
          </div>

          <div className='flex absolute justify-center text-center text-white font-thin italic w-full h-full text-base z-10 bottom-4 mt-6'>
            <div className='flex flex-col self-end'>
              <p>Introduction to Psychology</p>
              <p>#LevelUpYourPotential</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TicketTypesPage;
