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
    <div className='flex flex-col items-center relative md:h-[500px] lg:h-[490px] xl:h-[550px] 2xl:h-[610px] xl:w-[350px] 2xl:w-[410px] bg-[#C8E3F6] rounded-[80px] p-6 shadow-custom-outer space-y-6'>
      <div className='h-3/5 flex justify-center w-[95%] bg-white rounded-[65px] shadow-inner-custom'>
        <img src="/icon.ico" alt="" className='h-full w-full rounded-[65px]' />
      </div>
      <div className='text-center text-product-color font-extrabold flex flex-col justify-center'>
        <p className='text-4xl lg:text-3xl xl:text-4xl'>{nama}</p>
        <p>{description}</p>
        <p className='text-2xl mt-3'>Rp.{formattedPrice}</p>
        <AmountProduct
          amount={amount}
          incrementAmount={incrementAmount}
          decrementAmount={decrementAmount}
          handleInputChange={handleInputChange}
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
