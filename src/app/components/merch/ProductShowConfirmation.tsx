import React from 'react';

interface ProductShowProps {
    image: string;
    nama: string;
    description: string;
    harga: number;
    jumlah: number;
    isBaju: boolean;
    size: string;
    onSizeChange?: (newSize: string) => void;
}

const ProductShow: React.FC<ProductShowProps> = ({ image, nama, description, harga, jumlah, isBaju, size, onSizeChange }) => {
    const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newSize = event.target.value;
        if (onSizeChange) {
            onSizeChange(newSize);
        }
    };

    const formattedPrice = formatPrice(harga);
    
    return (
        <div className='flex relative gap-6'>
            <div className='flex flex-shrink-0 min-w-fit w-1/3 h-[150px] bg-white rounded-[51px] shadow-inner-custom justify-center items-center self-center'>
                <img src={image} alt={nama} className='h-full object-contain' />
            </div>
            <div className='flex flex-col text-product-color py-4 justify-center font-black'>
                <p className='text-2xl'>{nama}</p>
                <p className='text-sm'>{description}</p>
                <p className='text-white text-xl drop-shadow-md mt-2'>Rp {formattedPrice}</p>
                {isBaju ? (
                    <select className='mt-2 rounded-[20px] text-lg p-2 w-fit' value={size || ""} onChange={handleSizeChange}>
                        <option value="" disabled>Select Size</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                ) : (
                    <p className='text-lg'>Jumlah: {jumlah}</p>
                )}
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

export default ProductShow;