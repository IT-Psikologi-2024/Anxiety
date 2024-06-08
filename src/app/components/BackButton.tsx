'use client'
import React from 'react';
import { useRouter } from 'next/navigation'
const BackButton = () => {
  const route = useRouter();

  const handleBackClick = () => {
    route.back();
  }

  return (
    <div className='flex bottom-[50%] left-8 fixed z-10'>
        <button
        onClick={handleBackClick}
        className="hover:scale-110 transition ease-in-out relative flex justify-center items-center w-12 h-12 bg-white rounded-full"
        >
        <span className="text-green-500 text-5xl">&lt;</span>
        </button>
    </div>
  );
}

export default BackButton;
