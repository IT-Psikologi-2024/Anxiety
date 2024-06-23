'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../components/Navbar';
import MerchBackground from '../components/MerchBackground';
import ProductCard from '../components/ProductCard';
import BundleCard from '../components/BundleCard';
import BundleCardMobile from '../components/BundleCardMobile';
import { useMerchContext } from '../context/MerchContext';
import ConfirmationModal from './ConfirmationModal';


const MerchandisePage: React.FC = () => {
    const { merchValues, setMerchValues } = useMerchContext();
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();
    const [quantities, setQuantities] = useState<{ products: number[]; bundles: number[] }>({
      products: new Array(8).fill(0),
      bundles: new Array(3).fill(0),
    });

  const products = [
    { image:"/icon.ico", harga: 55000, nama: "Product Name 1", description: 'Product Description', isBaju:false},
    { image:"/icon.ico", harga: 55000, nama: "Product Name 2", description: 'Product Description', isBaju:false },
    { image:"/icon.ico", harga: 55000, nama: "Product Name 3", description: 'Product Description', isBaju:false },
    { image:"/icon.ico", harga: 55000, nama: "Product Name 4", description: 'Product Description', isBaju:false },
    { image:"/icon.ico", harga: 55000, nama: "Product Name 5", description: 'Product Description', isBaju:false },
    { image:"/icon.ico", harga: 55000, nama: "Product Name 6", description: 'Product Description', isBaju:false },
    { image:"/icon.ico", harga: 55000, nama: "Product Name 7", description: 'Product Description', isBaju:true },
    { image:"/icon.ico", harga: 55000, nama: "Product Name 8", description: 'Product Description', isBaju:true },
  ];

  const bundles = [
    { image:"/icon.ico", harga: 50000, nama: "Bundle 1", description: 'Product Description', isBaju:true},
    { image:"/icon.ico", harga: 50000, nama: "Bundle 2", description: 'Product Description + Product Description +Product Description + Product Description + Product Description + Product Description', isBaju:false },
    { image:"/icon.ico", harga: 50000, nama: "Bundle 3", description: 'Product Description + Product Description +Product Description', isBaju:false },
  ];

  const updateQuantity = (type: 'products' | 'bundles', index: number, amount: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [type]: prevQuantities[type].map((qty, i) => (i === index ? amount : qty)),
    }));

    setShowError(false);
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
    
    const combinedFilteredItems = [...filteredProducts, ...filteredBundles];
    
    console.log(combinedFilteredItems)
    if (combinedFilteredItems.length === 0) {
      setShowError(true);
      return;
    }

    const isAnyBaju = combinedFilteredItems.some(item => item.isBaju);
    setShowError(false);

    setMerchValues((prevValues) => ({
        ...prevValues,
        products: combinedFilteredItems,
        totalHargaProduk: calculateTotalPrice(),
        isBaju: isAnyBaju,
    }));
    
    setShowModal(true)
};

  const rows = Math.ceil(products.length / 3);
  const lastRowStartIndex = (rows - 1) * 3;

  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='h-fit flex flex-col overflow-hidden relative'>
        <MerchBackground />
        <div className='flex flex-col flex-grow'>
          <div className='flex absolute top-[105vh] sm:top-[10vh]'>
            <img src="/merch/awan-1.svg" alt="Awan 1" className='w-3/5 ' />
          </div>
          <div className='flex absolute right-[-4rem] sm:right-0 justify-end'>
            <img src="/merch/awan-2.svg" alt="Awan 2" className='w-3/5' />
          </div>
          <div className='flex absolute sm:invisible top-[30vh]'>
            <img src="/merch/mobile/awan-mobile.svg" alt="Awan Mobile" />
          </div>
          <div className='flex absolute top-[75vh] left-[10rem] sm:left-0 sm:top-[111vh]'>
            <img src="/merch/awan-3.svg" alt="Awan 3" className='w-3/5' />
          </div>
          <div className='flex absolute justify-end top-[50vh] sm:top-[200vh] md:top-[170vh] lg:top-[150vh] xl:top-[130vh] 2xl:top-[115vh] right-0'>
            <img src="/merch/awan-4.svg" alt="Awan 4" className='w-3/5' />
          </div>
          <div className='flex absolute top-[130vh] sm:top-[238vh]'>
            <img src="/merch/awan-5.svg" alt="Awan 5" className='w-3/5' />
          </div>
          <div className='flex absolute top-[120vh] sm:top-[330vh] right-0 justify-end sm:right-8 invisible sm:visible'>
            <img src="/merch/awan-6.svg" alt="Awan 6" className='w-3/5' />
          </div>

          <div className='flex absolute justify-end sm:bottom-[10vh] md:bottom-[15vh] lg:bottom-[25vh] xl:bottom-[35vh] 2xl:bottom-[45vh] right-0'>
            <img src="/merch/loli-kanan.svg" alt="Loli Kanan" className='w-3/5 lg:w-4/5 invisible sm:visible'/>
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

          <div className='flex absolute sm:bottom-[20vh] md:bottom-[25vh] lg:bottom-[30vh] xl:bottom-[40vh] 2xl:bottom-[50vh]'>
            <img src="/merch/loli-kiri.svg" alt="Loli Kiri" className='w-3/5 lg:w-4/5 invisible sm:visible'/>
          </div>

          <div className='flex flex-col relative items-center w-full top-[10vh] h-fit invisible md:visible'>
            <p className='text-white md:text-4xl lg:text-6xl italic font-bold'>Our Products</p>
            <div className='flex absolute  md:relative lg:w-4/5 bg-[#C8E3F6] rounded-[80px] pt-6 mt-8 shadow-inner-custom justify-evenly space-x-4 text-center text-product-color font-black'>
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

          <div className='flex flex-col relative h-fit top-[10vh] sm:top-[20vh] items-center'>
            <p className='text-white text-4xl lg:text-6xl italic font-bold'>Items</p>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-32 sm:gap-y-10 mt-8'>
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

            <div className='grid gap-4 w-1/2 sm:w-full sm:gap-8 md:w-4/5 mt-4 sm:mt-12 justify-evenly lg:flex pb-2 mb-[40vh] sm:mb-[100vh] md:mb-[85vh]' >
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

          
          <div className='flex absolute bottom-16 invisible sm:visible'>
            <img src="/merch/ito-1.svg" alt="Ito 1" className='w-3/5' />
          </div>
          <div className='flex absolute sm:invisible bottom-[40vh]'>
            <img src="/merch/mobile/ito-1.svg" alt="Ito Mobile" />
          </div>
          <div className='flex absolute bottom-[8vh] right-0 justify-end invisible sm:visible'>
            <img src="/merch/ivy-1.svg" alt="Ivy 1" className='w-3/5' />
          </div>
          <div className='flex absolute bottom-[12vh] right-0 justify-end sm:invisible'>
            <img src="/merch/mobile/ivy-1.svg" alt="Ivy Mobile" />
          </div>

          <div className={`flex flex-col absolute items-end ${showError ? 'p-2' : 'p-6'} bottom-0 w-full bg-[#FBB3D7] h-fit`}>
            <p className='text-product-color text-lg font-semibold'>
                Total Price: Rp.{calculateTotalPrice().toLocaleString('id-ID')},00
            </p>
            {showError && (
              <p className='text-red-600'>
                Please add at least one product or bundle to the cart before checking out.
              </p>
            )}
            <button className='bg-[#618758] text-white rounded-[34.15px] px-6 py-1' onClick={handleCheckout}>
                Check Out
            </button>
          </div>
        </div>
      </div>
      {showModal && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
                    <div className='bg-white p-4 rounded-lg w-4/5'>
                        <ConfirmationModal />
                        <div className='flex w-full justify-center gap-6'>
                          <button className='mt-4 bg-red-500 text-white px-4 py-2 rounded-[34.15px]' onClick={() => setShowModal(false)}>
                              Close
                          </button>
                          <button className='mt-4 bg-[#618758] text-white px-4 py-2 rounded-[34.15px]' onClick={() => setShowModal(false)}>
                              Confirm
                          </button>
                        </div>
                    </div>
                </div>
            )}
    </div>
  );
};

export default MerchandisePage;
