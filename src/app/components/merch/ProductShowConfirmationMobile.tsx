import React from 'react';

interface ProductShowMobileProps {
    image: string;
    nama: string;
    description: string;
    harga: number;
    jumlah: number;
    isBaju: boolean;
    size: string;
    onSizeChange?: (newSize: string) => void;
}

const ProductShowMobile: React.FC<ProductShowMobileProps> = ({ image, nama, description, harga, jumlah, isBaju, size, onSizeChange }) => {
    const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newSize = event.target.value;
        if (onSizeChange) {
            onSizeChange(newSize);
        }
    };

    const formattedPrice = formatPrice(harga);
    return (
        <div className='flex flex-col relative font-black h-full text-product-color'>
            <div className='flex relative flex-col ml-4 h-1/4'>
                <p className='text-xl'>{nama}</p>
                <p className='overflow-y-auto text-sm max-w-sm'>{description}</p>
            </div>
            <div className='flex relative bg-white rounded-[27px] shadow-inner-custom w-full justify-center my-3'>
                <img src={image} alt={nama} className='w-3/5' />
            </div>
            <div className='flex flex-col relative ml-4 h-1/5'>
                <p className='text-white text-xl drop-shadow-md'>Rp {formattedPrice}</p>
                {isBaju ? (
                    <select className='my-2 rounded-[20px] text-lg p-2' value={size || ""} onChange={handleSizeChange}>
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

export default ProductShowMobile;