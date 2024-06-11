'use client'
import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import MerchBackground from '../components/MerchBackground';
import ProductCard from '../components/ProductCard';
import BundleCard from '../components/BundleCard';

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
    { harga: 50000, nama: "Bundle 2", description: 'Product Description + Product Description +Product Description' },
    { harga: 50000, nama: "Bundle 3", description: 'Product Description + Product Description +Product Description' },
    // Add more bundles as needed
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

  return (
    <div className='flex-flex-col'>
      <Navbar />
      <div className='min-h-[3855px] h-full flex flex-col overflow-hidden relative'>
        <MerchBackground />
        <div className='flex flex-col flex-grow'>
        <div className='flex absolute top-[10vh]'>
            <img src="/merch/awan-1.svg" alt="Awan 1" />
          </div>
          <div className='flex absolute top-[5vh] right-0'>
            <img src="/merch/awan-2.svg" alt="Awan 2" />
          </div>
          <div className='flex absolute top-[111vh] '>
            <img src="/merch/awan-3.svg" alt="Awan 3" />
          </div>
          <div className='flex absolute top-[115vh] right-0'>
            <img src="/merch/awan-4.svg" alt="Awan 4" />
          </div>
          <div className='flex absolute top-[238vh]'>
            <img src="/merch/awan-5.svg" alt="Awan 5" />
          </div>
          <div className='flex absolute top-[330vh] right-8'>
            <img src="/merch/awan-6.svg" alt="Awan 6" />
          </div>
          
          <div className='flex absolute bottom-[35vh] right-0'>
            <img src="/merch/loli-kanan.svg" alt="Loli Kanan" />
          </div>
          <div className='flex flex-col absolute bottom-[7vh] w-full'>
            <img src="/merch/rumput-1.svg" alt="Rumput" />
          </div>
          <div className='flex flex-col relative items-center w-full top-[15vh] h-fit'>
            <p className='text-white text-8xl italic font-bold'>Our Products</p>
            <div className='flex w-4/5 h-[683px] bg-[#C8E3F6] rounded-[80px] p-6 mt-[5rem] shadow-inner-custom justify-evenly space-x-4 text-center text-product-color font-black'>
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
          <div className='flex flex-col relative h-fit top-[30vh] items-center'>
            <p className='text-white text-7xl italic font-bold'>Items</p>
            <div className='flex relative justify-evenly h-full self-center w-full mt-24'>
              <ProductCard
                harga={products[0].harga}
                nama={products[0].nama}
                description={products[0].description}
                amount={quantities.products[0]}
                incrementAmount={() => updateQuantity('products', 0, quantities.products[0] + 1)}
                decrementAmount={() => updateQuantity('products', 0, Math.max(quantities.products[0] - 1, 0))}
                handleInputChange={(e) => updateQuantity('products', 0, parseInt(e.target.value, 10))}
              />
                <ProductCard
                harga={products[1].harga}
                nama={products[1].nama}
                description={products[1].description}
                amount={quantities.products[1]}
                incrementAmount={() => updateQuantity('products', 1, quantities.products[1] + 1)}
                decrementAmount={() => updateQuantity('products', 1, Math.max(quantities.products[1] - 1, 0))}
                handleInputChange={(e) => updateQuantity('products', 1, parseInt(e.target.value, 10))}
              />
              <ProductCard
                harga={products[2].harga}
                nama={products[2].nama}
                description={products[2].description}
                amount={quantities.products[2]}
                incrementAmount={() => updateQuantity('products', 2, quantities.products[2] + 1)}
                decrementAmount={() => updateQuantity('products', 2, Math.max(quantities.products[2] - 1, 0))}
                handleInputChange={(e) => updateQuantity('products', 2, parseInt(e.target.value, 10))}
              />
              </div>
              <div className='flex relative justify-evenly h-full self-center w-full mt-32'>
              <ProductCard
                harga={products[3].harga}
                nama={products[3].nama}
                description={products[3].description}
                amount={quantities.products[3]}
                incrementAmount={() => updateQuantity('products', 3, quantities.products[3] + 1)}
                decrementAmount={() => updateQuantity('products', 3, Math.max(quantities.products[3] - 1, 0))}
                handleInputChange={(e) => updateQuantity('products', 3, parseInt(e.target.value, 10))}
              />
              <ProductCard
                harga={products[4].harga}
                nama={products[4].nama}
                description={products[4].description}
                amount={quantities.products[4]}
                incrementAmount={() => updateQuantity('products', 4, quantities.products[4] + 1)}
                decrementAmount={() => updateQuantity('products', 4, Math.max(quantities.products[4] - 1, 0))}
                handleInputChange={(e) => updateQuantity('products', 4, parseInt(e.target.value, 10))}
              />
              <ProductCard
                harga={products[5].harga}
                nama={products[5].nama}
                description={products[5].description}
                amount={quantities.products[5]}
                incrementAmount={() => updateQuantity('products', 5, quantities.products[5] + 1)}
                decrementAmount={() => updateQuantity('products', 5, Math.max(quantities.products[5] - 1, 0))}
                handleInputChange={(e) => updateQuantity('products', 5, parseInt(e.target.value, 10))}
              />
              </div>
              <div className='flex relative justify-center space-x-10 h-full self-center w-full mt-32'>
              <ProductCard
                harga={products[6].harga}
                nama={products[6].nama}
                description={products[6].description}
                amount={quantities.products[6]}
                incrementAmount={() => updateQuantity('products', 6, quantities.products[6] + 1)}
                decrementAmount={() => updateQuantity('products', 6, Math.max(quantities.products[6] - 1, 0))}
                handleInputChange={(e) => updateQuantity('products', 6, parseInt(e.target.value, 10))}
              />
              <ProductCard
                harga={products[7].harga}
                nama={products[7].nama}
                description={products[7].description}
                amount={quantities.products[7]}
                incrementAmount={() => updateQuantity('products', 7, quantities.products[7] + 1)}
                decrementAmount={() => updateQuantity('products', 7, Math.max(quantities.products[7] - 1, 0))}
                handleInputChange={(e) => updateQuantity('products', 7, parseInt(e.target.value, 10))}
              />
              </div>
          </div>

          <div className='flex absolute bottom-[30vh]'>
            <img src="/merch/loli-kiri.svg" alt="Loli Kiri" />
          </div>
          <div className='flex absolute bottom-16'>
            <img src="/merch/ito-1.svg" alt="Ito 1" className='w-4/5'/>
          </div>
          <div className='flex absolute bottom-[8vh] right-0 justify-end '>
            <img src="/merch/ivy-1.svg" alt="Ivy 1" className='w-4/5'/>
          </div>
          
          <div className='flex flex-col absolute items-end p-6 bottom-0 w-full bg-[#FBB3D7] h-[2.5%]'>
            <p className='text-product-color text-lg font-semibold'>
              Total Price: Rp.{calculateTotalPrice().toLocaleString('id-ID')},00
            </p>
            <button className='bg-[#618758] text-white rounded-[34.15px] w-[10%]'>
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchandisePage;
