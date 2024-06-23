import React from 'react'
import { useRouter } from 'next/navigation'
import { useMerchContext } from '../context/MerchContext'
import ProductShowConfirmation from '../components/ProductShowConfirmation'
import ProductShowConfirmationMobile from '../components/ProductShowConfirmationMobile'

interface Product {
  image: string;
  nama: string;
  description: string;
  harga: number;
  jumlah: number;
  isBaju: boolean;
}

const ConfirmationModal = () => {
    const route = useRouter();
    const { merchValues, setMerchValues } = useMerchContext();
    console.log(merchValues)
    const products: Product[] = merchValues.products;

    const handleInputChange = async (id: string, value: string | boolean | number) => {
        setMerchValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    }

    const renderProducts = (product: Product, index:number) => {
        if (product.isBaju && product.jumlah > 1) {
            return [...Array(product.jumlah)].map((_, i) => (
                <ProductShowConfirmation
                    key={`${index}-${i}`}
                    image={product.image}
                    nama={product.nama}
                    description={product.description}
                    harga={product.harga}
                    jumlah={product.jumlah}
                    isBaju={product.isBaju}
                />
            ));
        }
        return (
            <ProductShowConfirmation
                key={index}
                image={product.image}
                nama={product.nama}
                description={product.description}
                harga={product.harga}
                jumlah={product.jumlah}
                isBaju={product.isBaju}
            />
        );
    };

    const renderProductsMobile = (product:Product, index:number) => {
        if (product.isBaju && product.jumlah > 1) {
            return [...Array(product.jumlah)].map((_, i) => (
                <ProductShowConfirmationMobile
                    key={`${index}-${i}`}
                    image={product.image}
                    nama={product.nama}
                    description={product.description}
                    harga={product.harga}
                    jumlah={product.jumlah}
                    isBaju={product.isBaju}
                />
            ));
        }
        return (
            <ProductShowConfirmationMobile
                key={index}
                image={product.image}
                nama={product.nama}
                description={product.description}
                harga={product.harga}
                jumlah={product.jumlah}
                isBaju={product.isBaju}
            />
        );
    };

    return (
        <div className="flex flex-col relative items-center justify-center w-full h-fit mt-[5vh] z-10">
            <p className="text-black text-3xl sm:text-4xl lg:text-5xl font-black mb-2 text-center">Konfirmasi Pesanan Anda</p>
            <div className="flex relative flex-col max-h-[500px] w-4/5 sm:w-3/5 bg-[#C8E3F6CC] backdrop-opacity-10 h-fit rounded-[25px] py-4 mt-5 sm:mt-4 px-5 sm:p-8 space-y-6 shadow-inner-custom">
                {products.length > 0 && (
                    <>
                        <div className={`space-y-8 p-4 overflow-y-scroll min-h-[100px] h-3/5 sm:visible invisible absolute sm:static`}>
                            {products.flatMap(renderProducts)}
                        </div>
                        <div className={`space-y-8 p-2 h-3/5 sm:invisible sm:absolute overflow-y-scroll`}>
                            {products.flatMap(renderProductsMobile)}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default ConfirmationModal
