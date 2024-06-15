'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../components/Navbar';
import MerchBackground from '../components/MerchBackground';
import ProductCard from '../components/ProductCard';
import BundleCard from '../components/BundleCard';
import BundleCardMobile from '../components/BundleCardMobile';
import { useMerchContext } from '../context/MerchContext';


const MerchandisePage: React.FC = () => {
    const { merchValues, setMerchValues } = useMerchContext();
    const router = useRouter();
    const [quantities, setQuantities] = useState<{ products: number[]; bundles: number[] }>({
      products: new Array(8).fill(0),
      bundles: new Array(3).fill(0),
    });

  const products = [
    { image:"/icon.ico", harga: 55000, nama: "Product Name 1", description: 'Product Description' },
    { image:"/icon.ico", harga: 55000, nama: "Product Name 2", description: 'Product Description' },
    { image:"/icon.ico", harga: 55000, nama: "Product Name 3", description: 'Product Description' },
    { image:"/icon.ico", harga: 55000, nama: "Product Name 4", description: 'Product Description' },
    { image:"/icon.ico", harga: 55000, nama: "Product Name 5", description: 'Product Description' },
    { image:"/icon.ico", harga: 55000, nama: "Product Name 6", description: 'Product Description' },
    { image:"/icon.ico", harga: 55000, nama: "Product Name 7", description: 'Product Description' },
    { image:"/icon.ico", harga: 55000, nama: "Product Name 8", description: 'Product Description' },
  ];

  const bundles = [
    { image:"/icon.ico", harga: 50000, nama: "Bundle 1", description: 'Product Description' },
    { image:"/icon.ico", harga: 50000, nama: "Bundle 2", description: 'Product Description + Product Description +Product Description + Product Description + Product Description + Product Description' },
    { image:"/icon.ico", harga: 50000, nama: "Bundle 3", description: 'Product Description + Product Description +Product Description' },
  ];

  const updateQuantity = (type: 'products' | 'bundles', index: number, amount: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [type]: prevQuantities[type].map((qty, i) => (i === index ? amount : qty)),
    }));
  };

  const calculateTotalPrice = () => {
    const productsTotal = products.reduce((total, product, index) => total + product.harga * quantities.products[index], 0);
    const bundlesTotal = bundles.reduce((total, bundle, index) => total + bundle.harga * quantities.bundles[index], 0);
    return productsTotal + bundlesTotal;
  };

  const [showError, setShowError] = useState(false);

  const handleCheckout = () => {
    const filteredProducts = products
        .map((product, index) => ({ ...product, jumlah: quantities.products[index] }))
        .filter(product => product.jumlah > 0);

    const filteredBundles = bundles
        .map((bundle, index) => ({ ...bundle, jumlah: quantities.bundles[index] }))
        .filter(bundle => bundle.jumlah > 0);
    
    if (filteredBundles.length === 0 && filteredProducts.length === 0) {
      setShowError(true);
      return;
    }

    setShowError(false);

    setMerchValues((prevValues) => ({
        ...prevValues,
        cart: {
            products: filteredProducts,
            bundles: filteredBundles,
        },
        totalHargaProduk: calculateTotalPrice(),
    }));
    
    router.push('/merchandise/checkout');
};

  const rows = Math.ceil(products.length / 3);
  const lastRowStartIndex = (rows - 1) * 3;

  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='min-h-[2321px] sm:min-h-[3855px] h-full flex flex-col overflow-hidden relative'>
        <MerchBackground />
        <div className='flex flex-col flex-grow'>
          <div className='flex absolute top-[105vh] sm:top-[10vh]'>
            <img src="/merch/awan-1.svg" alt="Awan 1" className='w-3/5 lg:w-4/5 xl:w-full' />
          </div>
          <div className='flex absolute right-[-4rem] sm:right-0 justify-end'>
            <img src="/merch/awan-2.svg" alt="Awan 2" className='w-3/5 g:w-4/5 xl:w-full' />
          </div>
          <div className='flex absolute sm:invisible top-[30vh]'>
            <img src="/merch/mobile/awan-mobile.svg" alt="Awan Mobile" />
          </div>
          <div className='flex absolute top-[75vh] left-[10rem] sm:left-0 sm:top-[111vh]'>
            <img src="/merch/awan-3.svg" alt="Awan 3" className='w-3/5 lg:w-4/5 xl:w-full' />
          </div>
          <div className='flex absolute justify-end top-[50vh] sm:top-[200vh] md:top-[170vh] lg:top-[150vh] xl:top-[130vh] 2xl:top-[115vh] right-0'>
            <img src="/merch/awan-4.svg" alt="Awan 4" className='w-3/5 lg:w-4/5 xl:w-[90%] 2xl:w-full' />
          </div>
          <div className='flex absolute top-[130vh] sm:top-[238vh]'>
            <img src="/merch/awan-5.svg" alt="Awan 5" className='lg:w-4/5 xl:w-full' />
          </div>
          <div className='flex absolute top-[120vh] sm:top-[330vh] right-0 justify-end sm:right-8'>
            <img src="/merch/awan-6.svg" alt="Awan 6" className='w-3/5 lg:w-4/5 xl:w-full' />
          </div>

          <div className='flex absolute justify-end sm:bottom-[10vh] md:bottom-[15vh] xl:bottom-[20vh] 2xl:bottom-[35vh] right-0'>
            <img src="/merch/loli-kanan.svg" alt="Loli Kanan" className='w-3/5 lg:w-full invisible sm:visible'/>
          </div>
          <div className='flex flex-col absolute bottom-[7vh] w-full sm:visible invisible'>
            <img src="/merch/rumput-1.svg" alt="Rumput" />
          </div>
          <div className='flex flex-col absolute bottom-[7vh] w-full sm:invisible'>
            <img src="/merch/mobile/rumput-1.svg" alt="Rumput"/>
          </div>

          <div className='flex absolute w-full justify-center sm:invisible bottom-[65vh] '>
            <img src="/merch/mobile/pohon-tengah.svg" alt="Pohon tengah" />
          </div>

          <div className='flex flex-col relative items-center w-full top-[15vh] h-fit invisible md:visible'>
            <p className='text-white md:text-4xl lg:text-6xl xl:text-8xl italic font-bold'>Our Products</p>
            <div className='flex absolute  md:relative lg:w-[90%] md:h-[530px] lg:h-[580px] xl:h-[630px] 2xl:h-[683px] bg-[#C8E3F6] rounded-[80px] p-6 mt-[5rem] shadow-inner-custom justify-evenly space-x-4 text-center text-product-color font-black'>
              {bundles.map((bundle, index) => (
                <BundleCard
                  key={index}
                  {...bundle}
                  amount={quantities.bundles[index]}
                  incrementAmount={() => updateQuantity('bundles', index, quantities.bundles[index] + 1)}
                  decrementAmount={() => updateQuantity('bundles', index, Math.max(quantities.bundles[index] - 1, 0))}
                  handleInputChange={(e) => updateQuantity('bundles', index, parseInt(e.target.value, 10))}
                />
              ))}
            </div>
          </div>

          <div className='visible md:invisible md:absolute w-full flex flex-col items-center relative top-[4vh] h-fit space-y-8'>
            <p className='text-white text-4xl italic font-bold z-40'>Our Products</p>
            <div className='flex right-0 justify-end -mr-8'>
              <BundleCardMobile 
                key={0}
                image='/icon.ico'
                nama='Bundle 1'
                harga={50000}
                description='Product Description + Product Description +Product Description'
                amount={quantities.bundles[0]}
                incrementAmount={() => updateQuantity('bundles', 0, quantities.bundles[0] + 1)}
                decrementAmount={() => updateQuantity('bundles', 0, Math.max(quantities.bundles[0] - 1, 0))}
                handleInputChange={(e) => updateQuantity('bundles', 0, parseInt(e.target.value, 10))}
              />
            </div>
            <div className='flex -ml-8'>
              <BundleCardMobile 
                key={1}
                image='/icon.ico'
                nama='Bundle 2'
                harga={50000}
                description='Product Description + Product Description +Product Description'
                amount={quantities.bundles[1]}
                incrementAmount={() => updateQuantity('bundles', 1, quantities.bundles[1] + 1)}
                decrementAmount={() => updateQuantity('bundles', 1, Math.max(quantities.bundles[1] - 1, 0))}
                handleInputChange={(e) => updateQuantity('bundles', 1, parseInt(e.target.value, 10))}
              />
            </div>
            <div className='flex right-0 justify-end -mr-8'>
              <BundleCardMobile 
                key={2}
                image='/icon.ico'
                nama='Bundle 3'
                harga={50000}
                description='Product Description + Product Description +Product Description'
                amount={quantities.bundles[2]}
                incrementAmount={() => updateQuantity('bundles', 2, quantities.bundles[2] + 1)}
                decrementAmount={() => updateQuantity('bundles', 2, Math.max(quantities.bundles[2] - 1, 0))}
                handleInputChange={(e) => updateQuantity('bundles', 2, parseInt(e.target.value, 10))}
              />
            </div>
          </div>

          <div className='flex flex-col relative h-fit top-[10vh] sm:top-[15vh] md:top-[30vh] lg:top-[45vh] xl:top-[30vh] items-center'>
            <p className='text-white text-4xl lg:text-6xl xl:text-7xl italic font-bold'>Items</p>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-16 sm:w-[90%] md:w-4/5 lg:w-[90%] sm:mt-12 md:mt-16 lg:mt-24'>
              {products.slice(0, lastRowStartIndex).map((product, index) => (
                <ProductCard
                  key={index}
                  {...product}
                  amount={quantities.products[index]}
                  incrementAmount={() => updateQuantity('products', index, quantities.products[index] + 1)}
                  decrementAmount={() => updateQuantity('products', index, Math.max(quantities.products[index] - 1, 0))}
                  handleInputChange={(e) => updateQuantity('products', index, parseInt(e.target.value, 10))}
                />
              ))}
            </div>

            <div className='grid sm:grid-cols-2 gap-4 sm:gap-8 md:w-4/5 mt-4 sm:mt-12 md:mt-16 lg:mt-24 justify-evenly lg:flex pb-2' >
              {products.slice(lastRowStartIndex).map((product, index) => (
                <ProductCard
                  key={lastRowStartIndex + index}
                  {...product}
                  amount={quantities.products[lastRowStartIndex + index]}
                  incrementAmount={() => updateQuantity('products', lastRowStartIndex + index, quantities.products[lastRowStartIndex + index] + 1)}
                  decrementAmount={() => updateQuantity('products', lastRowStartIndex + index, Math.max(quantities.products[lastRowStartIndex + index] - 1, 0))}
                  handleInputChange={(e) => updateQuantity('products', lastRowStartIndex + index, parseInt(e.target.value, 10))}
                />
              ))}
            </div>
          </div>

          <div className='flex absolute sm:bottom-[20vh] md:bottom-[25vh] lg:bottom-[30vh]'>
            <img src="/merch/loli-kiri.svg" alt="Loli Kiri" className='w-3/5 lg:w-full invisible sm:visible'/>
          </div>
          <div className='flex absolute bottom-16 invisible sm:visible'>
            <img src="/merch/ito-1.svg" alt="Ito 1" className='w-3/5 lg:w-4/5' />
          </div>
          <div className='flex absolute sm:invisible bottom-[40vh]'>
            <img src="/merch/mobile/ito-1.svg" alt="Ito Mobile" />
          </div>
          <div className='flex absolute bottom-[8vh] right-0 justify-end invisible sm:visible'>
            <img src="/merch/ivy-1.svg" alt="Ivy 1" className='w-3/5 lg:w-4/5' />
          </div>
          <div className='flex absolute bottom-[12vh] right-0 justify-end sm:invisible'>
            <img src="/merch/mobile/ivy-1.svg" alt="Ivy Mobile" />
          </div>

          <div className={`flex flex-col absolute items-end ${showError ? 'p-2' : 'p-6'} bottom-0 w-full bg-[#FBB3D7] h-[5%] sm:h-[2.5%]`}>
            <p className='text-product-color text-lg font-semibold'>
                Total Price: Rp.{calculateTotalPrice().toLocaleString('id-ID')},00
            </p>
            {showError && (
              <p className='text-red-600'>
                Please add at least one product or bundle to the cart before checking out.
              </p>
            )}
            <button className='bg-[#618758] text-white rounded-[34.15px] w-1/4 sm:w-1/5 md:w-[15%] xl:w-[12%]' onClick={handleCheckout}>
                Check Out
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MerchandisePage;
