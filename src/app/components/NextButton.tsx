'use client'
import React from 'react';
import { useRouter } from 'next/navigation'
const NextButton = () => {
  const route = useRouter();

  const handleNextClick = () => {
    route.back();
  }

  return (
    <div className='flex fixed bottom-[50%] right-8 z-10'>
        <button
        onClick={handleNextClick}
        className="hover:scale-110 transition ease-in-out relative flex justify-center items-center w-12 h-12 bg-white rounded-full"
        >
        <span className="text-green-500 text-5xl">&gt;</span>
        </button>
    </div>
  );
}

export default NextButton;
