'use client'
import React from 'react';

interface NextButtonProps {
  handleClick: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({ handleClick }) => {
  return (
    <div className='flex relative sm:bottom-[50%] sm:right-8 sm:fixed z-10'>
      <button
        onClick={handleClick}
        className="hover:scale-110 transition ease-in-out relative flex justify-center items-center w-12 h-12 bg-white rounded-full"
      >
        <span className="text-green-500 text-5xl">&gt;</span>
      </button>
    </div>
  );
}

export default NextButton;