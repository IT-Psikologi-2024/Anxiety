'use client'
import React from 'react';

interface AmountProductProps {
  className?: string;
  amount: number;
  incrementAmount: () => void;
  decrementAmount: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AmountProduct: React.FC<AmountProductProps> = ({
  className,
  amount,
  incrementAmount,
  decrementAmount,
  handleInputChange,
}) => {
  return (
    <div className={`flex items-center justify-center space-x-4 ${className} z-30`}>
      <button
        className="bg-[#FBB3D7] rounded-full w-[22.74px] h-[22.74px] sm:w-16 sm:h-10 md:h-16 flex items-center justify-center text-4xl md:text-8xl font-bold text-white shadow-md4
        hover:scale-110 transition ease-in-out"
        onClick={decrementAmount}
      >
        -
      </button>
      <div className="flex items-center justify-center w-[31.5px] h-[21px] sm:w-20 sm:h-10 md:h-14 rounded-[50%] bg-white shadow-inner text-xl sm:text-4xl font-bold">
        <input
          type="number"
          className="w-full h-full text-center bg-transparent outline-none hide-number-input-arrows"
          value={amount}
          onChange={handleInputChange}
        />
      </div>
      <button
        className="bg-[#FBB3D7] rounded-full w-[22.74px] h-[22.74px] sm:w-16 sm:h-10 md:h-16 flex items-center justify-center text-4xl md:text-8xl font-bold text-white shadow-md
        hover:scale-110 transition ease-in-out"
        onClick={incrementAmount}
      >
        +
      </button>
    </div>
  );
};

export default AmountProduct;
