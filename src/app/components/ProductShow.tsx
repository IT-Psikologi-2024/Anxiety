import React from 'react'

interface ProductShowProps{
    image: string;
    nama: string;
    description: string;
    harga: number;
    jumlah: number;
}

const ProductShow: React.FC<ProductShowProps> = ({image, nama, description, harga, jumlah}) => {
    const formattedPrice = formatPrice(harga);
    return (
        <div className='flex relative gap-6'>
            <div className='flex flex-shrink-0 w-1/3 h-[200px] bg-white rounded-[51px] shadow-inner-custom justify-center items-center'>
                <img src={image} alt={nama} className='h-full object-contain'/>
            </div>
            <div className='flex flex-col text-product-color py-4 xl:py-8 justify-center font-black'>
                <p className='text-3xl xl:text-5xl'>{nama}</p>
                <p className='xl:text-lg'>{description}</p>
                <p className='text-white text-2xl xl:text-4xl drop-shadow-md mt-4'> Rp {formattedPrice}</p>
                <p className='text-xl xl:text-3xl mt-2'>Jumlah: {jumlah}</p>
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