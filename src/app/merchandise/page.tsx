'use client'
import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import MerchBackground from '../components/MerchBackground';
import ProductCard from '../components/ProductCard';
import BundleCard from '../components/BundleCard';
import BundleCardMobile from '../components/BundleCardMobile';

const MerchandisePage = () => {
  const [quantities, setQuantities] = useState({
    products: [0, 0, 0, 0, 0, 0, 0, 0],
    bundles: [0, 0, 0]
  });

  const products = [
    { harga: 55000, nama: "Product Name", description: 'Product Description' },
    { harga: 55000, nama: "Product Name", description: 'Product Description' },
    { harga: 55000, nama: "Product Name", description: 'Product Description' },
    { harga: 55000, nama: "Product Name", description: 'Product Description' },
    { harga: 55000, nama: "Product Name", description: 'Product Description' },
    { harga: 55000, nama: "Product Name", description: 'Product Description' },
    { harga: 55000, nama: "Product Name", description: 'Product Description' },
    { harga: 55000, nama: "Product Name", description: 'Product Description' },
  ];

  const bundles = [
    { harga: 50000, nama: "Bundle 1", description: 'Product Description + Product Description +Product Description' },
    { harga: 50000, nama: "Bundle 1", description: 'Product Description + Product Description +Product Description' },
    { harga: 50000, nama: "Bundle 1", description: 'Product Description + Product Description +Product Description' },
  ];

  const updateQuantity = (type: 'products' | 'bundles', index: number, amount: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [type]: prevQuantities[type].map((qty, i) => (i === index ? amount : qty))
    }));
  };

  const calculateTotalPrice = () => {
    const productsTotal = products.reduce((total, product, index) => total + product.harga * quantities.products[index], 0);
    const bundlesTotal = bundles.reduce((total, bundle, index) => total + bundle.harga * quantities.bundles[index], 0);
    return productsTotal + bundlesTotal;
  };

  const rows = Math.ceil(products.length / 3);
  const lastRowStartIndex = (rows - 1) * 3;

  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='min-h-[3855px] h-full flex flex-col overflow-hidden relative'>
        <MerchBackground />
        <div className='flex flex-col flex-grow'>
          <div className='flex absolute top-[10vh]'>
            <img src="/merch/awan-1.svg" alt="Awan 1" className='sm:w-3/5 lg:w-4/5 xl:w-full' />
          </div>
          <div className='flex absolute top-[5vh] right-0 justify-end'>
            <img src="/merch/awan-2.svg" alt="Awan 2" className='sm:w-3/5 g:w-4/5 xl:w-full' />
          </div>
          <div className='flex absolute top-[111vh]'>
            <img src="/merch/awan-3.svg" alt="Awan 3" className='sm:w-3/5 lg:w-4/5 xl:w-full' />
          </div>
          <div className='flex absolute justify-end sm:top-[200vh] md:top-[170vh] lg:top-[150vh] xl:top-[130vh] 2xl:top-[115vh] right-0'>
            <img src="/merch/awan-4.svg" alt="Awan 4" className='sm:w-3/5 lg:w-4/5 xl:w-[90%] 2xl:w-full' />
          </div>
          <div className='flex absolute top-[238vh]'>
            <img src="/merch/awan-5.svg" alt="Awan 5" className='lg:w-4/5 xl:w-full' />
          </div>
          <div className='flex absolute top-[330vh] right-8'>
            <img src="/merch/awan-6.svg" alt="Awan 6" className='lg:w-4/5 xl:w-full' />
          </div>

          <div className='flex absolute justify-end sm:bottom-[10vh] md:bottom-[15vh] xl:bottom-[20vh] 2xl:bottom-[35vh] right-0'>
            <img src="/merch/loli-kanan.svg" alt="Loli Kanan" className='w-3/5 lg:w-full'/>
          </div>
          <div className='flex flex-col absolute bottom-[7vh] w-full'>
            <img src="/merch/rumput-1.svg" alt="Rumput" />
          </div>
          <div className='flex flex-col relative items-center w-full top-[15vh] h-fit invisible md:visible'>
            <p className='text-white md:text-4xl lg:text-6xl xl:text-8xl italic font-bold'>Our Products</p>
            <div className='flex absolute  md:relative lg:w-[90%] xl:h-[683px] bg-[#C8E3F6] rounded-[80px] p-6 mt-[5rem] shadow-inner-custom justify-evenly space-x-4 text-center text-product-color font-black'>
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

          <div className='visible md:invisible md:absolute w-full flex flex-col relative top-[15vh] h-fit space-y-10'>
            <div className='flex right-0 justify-end -mr-8'>
              <BundleCardMobile 
                key={0}
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
                key={0}
                nama='Bundle 1'
                harga={50000}
                description='Product Description + Product Description +Product Description'
                amount={quantities.bundles[0]}
                incrementAmount={() => updateQuantity('bundles', 0, quantities.bundles[0] + 1)}
                decrementAmount={() => updateQuantity('bundles', 0, Math.max(quantities.bundles[0] - 1, 0))}
                handleInputChange={(e) => updateQuantity('bundles', 0, parseInt(e.target.value, 10))}
              />
            </div>
            <div className='flex right-0 justify-end -mr-8'>
              <BundleCardMobile 
                key={0}
                nama='Bundle 1'
                harga={50000}
                description='Product Description + Product Description +Product Description'
                amount={quantities.bundles[0]}
                incrementAmount={() => updateQuantity('bundles', 0, quantities.bundles[0] + 1)}
                decrementAmount={() => updateQuantity('bundles', 0, Math.max(quantities.bundles[0] - 1, 0))}
                handleInputChange={(e) => updateQuantity('bundles', 0, parseInt(e.target.value, 10))}
              />
            </div>
          </div>

          <div className='flex flex-col relative h-fit sm:top-[25vh] md:top-[30vh] lg:top-[45vh] xl:top-[30vh] items-center'>
            <p className='text-white sm:text-4xl md:text-4xl lg:text-6xl xl:text-7xl italic font-bold'>Items</p>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-16 w-[90%] sm:mt-12 md:mt-16 lg:mt-24'>
              {products.slice(0, lastRowStartIndex).map((product, index) => (
                <ProductCard
                  key={index}
                  harga={product.harga}
                  nama={product.nama}
                  description={product.description}
                  amount={quantities.products[index]}
                  incrementAmount={() => updateQuantity('products', index, quantities.products[index] + 1)}
                  decrementAmount={() => updateQuantity('products', index, Math.max(quantities.products[index] - 1, 0))}
                  handleInputChange={(e) => updateQuantity('products', index, parseInt(e.target.value, 10))}
                />
              ))}
            </div>

            <div className='grid grid-cols-2 gap-8 w-[90%] sm:mt-12 md:mt-16 lg:mt-24 justify-evenly lg:flex pb-2' >
              {products.slice(lastRowStartIndex).map((product, index) => (
                <ProductCard
                  key={lastRowStartIndex + index}
                  harga={product.harga}
                  nama={product.nama}
                  description={product.description}
                  amount={quantities.products[lastRowStartIndex + index]}
                  incrementAmount={() => updateQuantity('products', lastRowStartIndex + index, quantities.products[lastRowStartIndex + index] + 1)}
                  decrementAmount={() => updateQuantity('products', lastRowStartIndex + index, Math.max(quantities.products[lastRowStartIndex + index] - 1, 0))}
                  handleInputChange={(e) => updateQuantity('products', lastRowStartIndex + index, parseInt(e.target.value, 10))}
                />
              ))}
            </div>
          </div>

          <div className='flex absolute sm:bottom-[20vh] md:bottom-[25vh] lg:bottom-[30vh]'>
            <img src="/merch/loli-kiri.svg" alt="Loli Kiri" className='w-3/5 lg:w-full'/>
          </div>
          <div className='flex absolute bottom-16'>
            <img src="/merch/ito-1.svg" alt="Ito 1" className='w-3/5 lg:w-4/5' />
          </div>
          <div className='flex absolute bottom-[8vh] right-0 justify-end '>
            <img src="/merch/ivy-1.svg" alt="Ivy 1" className='w-3/5 lg:w-4/5' />
          </div>

          <div className='flex flex-col absolute items-end p-6 bottom-0 w-full bg-[#FBB3D7] h-[2.5%]'>
            <p className='text-product-color text-lg font-semibold'>
              Total Price: Rp.{calculateTotalPrice().toLocaleString('id-ID')},00
            </p>
            <button className='bg-[#618758] text-white rounded-[34.15px] sm:w-1/5 md:w-[15%] xl:w-[12%]'>
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchandisePage;
