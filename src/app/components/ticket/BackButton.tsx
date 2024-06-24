'use client'
import React from 'react';

interface BackButtonProps {
  onBack: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onBack }) => {
  return (
    <div className='flex relative sm:bottom-[50%] sm:left-8 sm:fixed z-10'>
      <button
        onClick={onBack}
        className="hover:scale-110 transition ease-in-out relative flex justify-center items-center w-12 h-12 bg-white rounded-full"
      >
        <span className="text-green-500 text-5xl">&lt;</span>
      </button>
    </div>
  );
}

export default BackButton;
