import React from 'react';
import AmountProduct from './AmountProduct';

interface ProductCardProps {
  image: string;
  harga: number;
  nama: string;
  description: string;
  amount: number;
  incrementAmount: () => void;
  decrementAmount: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
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
    <div className='flex flex-col items-center relative h-fit w-fit bg-[#C8E3F6] rounded-[80px] py-6 px-4 shadow-custom-outer space-y-1 sm:space-y-6'>
      <div className=' w-full flex sm:flex-row flex-col justify-center items-center bg-white rounded-[65px] shadow-inner-custom'>
        <img src={image} alt={nama} className='w-3/5 rounded-[65px]' />
        <p className='sm:invisible sm:absolute text-lg mt-1'>Rp.{formattedPrice}</p>
      </div>
      <div className='text-center text-product-color font-extrabold flex flex-col justify-center items-center p-2'>
        <p className='text-lg sm:text-2xl'>{nama}</p>
        <p className='text-xs sm:text-base my-1'>{description}</p>
        <p className='invisible sm:visible sm:relative absolute text-lg sm:mt-1'>Rp.{formattedPrice}</p>
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
