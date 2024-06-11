import React from 'react';
import AmountProduct from './AmountProduct';

interface ProductCardProps {
  harga: number;
  nama: string;
  description: string;
  amount: number;
  incrementAmount: () => void;
  decrementAmount: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  harga,
  nama,
  description,
  amount,
  incrementAmount,
  decrementAmount,
  handleInputChange,
}) => {
  const formattedPrice = formatPrice(harga);

  return (
    <div className='flex flex-col items-center relative h-[215px] w-[155px] sm:h-[450px] md:h-[500px] lg:h-[490px] xl:h-[550px] 2xl:h-[610px] sm:w-auto xl:w-[350px] 2xl:w-[410px] bg-[#C8E3F6] rounded-[25px] sm:rounded-[80px] p-2 sm:p-6 shadow-custom-outer space-y-1 sm:space-y-6'>
      <div className=' w-full h-3/5 flex sm:flex-row flex-col justify-center items-center sm:w-[95%] bg-white rounded-[25px] sm:rounded-[65px] shadow-inner-custom'>
        <img src="/icon.ico" alt="" className='rounded-[25px] w-4/5 h-4/5 sm:h-full sm:w-full sm:rounded-[65px]' />
        <p className='sm:invisible sm:absolute text-lg mt-1'>Rp.{formattedPrice}</p>
      </div>
      <div className='text-center text-product-color font-extrabold flex flex-col justify-center items-center'>
        <p className='text-lg sm:text-2xl lg:text-3xl xl:text-4xl'>{nama}</p>
        <p className='text-xs sm:text-base my-1'>{description}</p>
        <p className='invisible sm:visible sm:relative absolute text-lg sm:mt-3'>Rp.{formattedPrice}</p>
        <AmountProduct
          amount={amount}
          incrementAmount={incrementAmount}
          decrementAmount={decrementAmount}
          handleInputChange={handleInputChange}
          className='sm:w-4/5 sm:h-4/5'
        />
      </div>
    </div>
  );
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price).replace(/\Rp\s?/, '');
};

export default ProductCard;
