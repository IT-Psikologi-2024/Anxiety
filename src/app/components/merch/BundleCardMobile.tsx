import React from 'react'
import AmountProduct from './AmountProduct';

interface BundleCardMobileProps {
  image: string;
  nama: string;
  harga: number;
  description: string;
  amount: number;
  incrementAmount: () => void;
  decrementAmount: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BundleCardMobile: React.FC<BundleCardMobileProps> = ({
    image,
    nama,
    harga,
    description,
    amount,
    incrementAmount,
    decrementAmount,
    handleInputChange,
  }) => {
  const formattedPrice = formatPrice(harga);
  return (
    <div className='flex bg-[#C8E3F6] h-[226px] sm:h-auto sm:w-[90%] p-6 rounded-[50px] shadow-custom-outer text-center text-product-color'>
        <div className='bg-white shadow-inner-custom flex flex-col items-center w-1/2 rounded-[38px] py-2'>
            <div className='flex justify-center relative sm:h-auto h-4/5 w-3/5'>
                <img src={image} alt={nama} className='w-fit'/>
            </div>
            <div>
                <p className='text-2xl font-black'>Rp{formattedPrice}</p>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center w-1/2 p-4'>
            <p className='font-black text-2xl sm:text-3xl italic'>{nama}</p>
            <p className='my-4 overflow-y-auto text-sm sm:text-base'>{description}</p>
            <AmountProduct 
            amount={amount}
            incrementAmount={incrementAmount}
            decrementAmount={decrementAmount}
            handleInputChange={handleInputChange}
            />
        </div>
    </div>
  )
}

const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price).replace(/\Rp\s?/, '');
  };

export default BundleCardMobile