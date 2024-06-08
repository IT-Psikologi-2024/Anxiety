import React from 'react';
import { Navbar } from '../components/Navbar';
import TicketTypeBackground from '../components/TicketTypeBackground';
import Footer from '../components/Footer';

const TicketTypesPage = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='relative min-h-screen h-full flex flex-col overflow-hidden'>
        <TicketTypeBackground />
        <div className='flex flex-col flex-grow lg:text-lg xl:text-xl'>
          <div className='flex relative justify-center xl:-mt-12 lg:mb-16 md:mt-8 mb-12'>
            <img src="/ticket/ticket-types-text.svg" alt="Ticket Text" className=''/>
          </div>

          <div className='flex relative justify-center mb-8 lg:mb-0 md:mr-[20rem] md:-mt-[9rem] lg:mr-[22rem] lg:-mt-[7rem]  xl:mr-[35rem] xl:mt-[-9rem]'>
            <a href='/merchandise' className='flex relative items-center md:w-[70%] lg:w-[60%] xl:w-[50%] hover:scale-110 transition ease-in-out z-20'>
              <img src="/ticket/ticket-1.svg" alt="Ticket Candy 1" className='w-full' />
              <div className='absolute inset-0 flex flex-col items-center justify-center text-black font-bold mt-4'>
                <p>Tiket Presale</p>
                <p>Khusus Roadshow</p>
              </div>
            </a>
          </div>

          <div className='flex relative justify-center'>
            <a href='/merchandise' className='z-20 flex relative items-center hover:scale-110 transition ease-in-out md:-mt-[4rem] md:w-[40%] lg:-mt-[3rem] lg:w-[35%] xl:w-[30%] 2xl:-mt-[4rem]'>
              <img src="/ticket/ticket-2.svg" alt="Ticket Candy 2" className='w-full' />
              <div className='absolute inset-0 flex items-center justify-center text-black font-bold mt-4'>
                <p>Tiket Presale 1</p>
              </div>
            </a>
          </div>

          <div className='flex absolute justify-center text-center text-white font-thin italic w-full h-full text-base z-10 bottom-4'>
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
