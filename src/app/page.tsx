import React from 'react';
import { Navbar } from './components/Navbar';
import Image from 'next/image';

const MyApp: React.FC = () => {
  return (
      <div className='relative w-full h-[3657px]'>
        <Navbar />
          <Image 
            src="/bg-homepage.svg"
            fill
            alt="home background"
            sizes='none'
            className='object-cover'
          />
      </div>
  );
};

export default MyApp;
