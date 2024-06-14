import React from 'react';
import AmountProduct from './AmountProduct';

interface BundleCardProps {
  image: string;
  nama: string;
  harga: number;
  description: string;
  amount: number;
  incrementAmount: () => void;
  decrementAmount: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BundleCard: React.FC<BundleCardProps> = ({
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
    <div className="flex flex-col items-center w-4/5 h-full">
      <div className="flex flex-col bg-white rounded-[80px] h-4/5 shadow-inner-custom py-8 px-4 items-center space-y-2 w-4/5">
        <p className="md:text-4xl xl:text-5xl italic">{nama}</p>
        <img src={image} alt={nama} className="w-4/5" />
        <p className="md: xl:text-4xl italic">Rp.{formattedPrice}</p>
        <p className="w-4/5 overflow-y-auto">{description}</p>
      </div>
      <AmountProduct
        amount={amount}
        incrementAmount={incrementAmount}
        decrementAmount={decrementAmount}
        handleInputChange={handleInputChange}
        className='mt-8'
      />
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

export default BundleCard;
