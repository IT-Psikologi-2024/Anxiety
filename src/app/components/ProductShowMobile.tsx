import React from 'react'

interface ProductShowMobileProps{
    image: string;
    nama: string;
    description: string;
    harga: number;
    jumlah: number;
    isBaju:boolean;
    size?: string;
}

const ProductShowMobile: React.FC<ProductShowMobileProps> = ({image, nama, description, harga, jumlah, isBaju}) => {
  const formattedPrice = formatPrice(harga);
  return (
    <div className='flex flex-col relative font-black h-full text-product-color'>
        <div className='flex relative flex-col ml-4 h-1/4'>
            <p className='text-xl'>
                {nama}
            </p>
            <p className='overflow-y-auto text-sm'>
                {description}
            </p>
        </div>
        <div className='flex relative bg-white rounded-[27px] shadow-inner-custom w-full justify-center my-3'>
            <img src={image} alt={nama} className=' w-3/5'/>
        </div>
            <div className='flex flex-col relative ml-4 h-1/5'>
            <p className='text-white text-xl drop-shadow-md'>
                Rp {formattedPrice}
            </p>
            <p className='text-lg'>
                Jumlah: {jumlah}
            </p>
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

export default ProductShowMobile