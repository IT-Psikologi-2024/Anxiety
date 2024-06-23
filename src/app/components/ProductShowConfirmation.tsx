import React from 'react'

interface ProductShowProps{
    image: string;
    nama: string;
    description: string;
    harga: number;
    jumlah: number;
    isBaju: boolean;
    size?: string;
}

const ProductShow: React.FC<ProductShowProps> = ({ image, nama, description, harga, jumlah, isBaju }) => {
    const formattedPrice = formatPrice(harga);
    return (
        <div className='flex relative gap-6'>
            <div className='flex flex-shrink-0 w-1/3 h-[150px] bg-white rounded-[51px] shadow-inner-custom justify-center items-center self-center'>
                <img src={image} alt={nama} className='h-full object-contain' />
            </div>
            <div className='flex flex-col text-product-color py-4 justify-center font-black'>
                <p className='text-2xl'>{nama}</p>
                <p className='text-sm'>{description}</p>
                <p className='text-white text-xl drop-shadow-md mt-2'> Rp {formattedPrice}</p>
                {!isBaju && <p className='text-lg'>Jumlah: {jumlah}</p>}
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

export default ProductShow