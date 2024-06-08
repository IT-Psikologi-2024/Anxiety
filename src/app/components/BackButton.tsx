'use client'
import React from 'react';
import { useRouter } from 'next/navigation'
const BackButton = () => {
  const route = useRouter();

  const handleBackClick = () => {
    route.back();
  }

  return (
    <div>
        <button
        onClick={handleBackClick}
        className="relative flex justify-center items-center w-10 h-10 bg-white rounded-full"
        >
        <span className="text-green-500 text-2xl">&lt;</span>
        </button>
    </div>
  );
}

export default BackButton;
