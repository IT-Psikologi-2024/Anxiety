import React, { useState, useEffect } from 'react';
import { useMerchContext, Product } from '../context/MerchContext';
import ProductShowConfirmation from '../components/merch/ProductShowConfirmation';
import ProductShowConfirmationMobile from '../components/merch/ProductShowConfirmationMobile';

const ConfirmationModal = () => {
  const { merchValues, setMerchValues } = useMerchContext();

  useEffect(() => {
    console.log(merchValues.products)
  }, []);

  const handleSizeChange = (uniqueId: string | undefined, newSize: string) => {
    const updatedProducts = merchValues.products.map((product) =>
      product.uniqueId === uniqueId ? { ...product, size: newSize } : product
    );
    setMerchValues((prevValues) => ({
      ...prevValues,
      products: updatedProducts,
    }));
  };

  const renderProducts = (product: Product) => (
    <ProductShowConfirmation
      key={product.uniqueId}
      image={product.image}
      nama={product.nama}
      description={product.description}
      harga={product.harga}
      jumlah={product.jumlah}
      isBaju={product.isBaju}
      size={product.size}
      onSizeChange={(newSize) => handleSizeChange(product.uniqueId, newSize)}
    />
  );

  const renderProductsMobile = (product: Product) => (
    <ProductShowConfirmationMobile
      key={product.uniqueId}
      image={product.image}
      nama={product.nama}
      description={product.description}
      harga={product.harga}
      jumlah={product.jumlah}
      isBaju={product.isBaju}
      size={product.size}
      onSizeChange={(newSize) => handleSizeChange(product.uniqueId, newSize)}
    />
  );

  return (
    <div className="flex flex-col relative items-center justify-center w-full h-fit mt-[5vh] z-10 space-y-4">
      <p className="text-white drop-shadow-xl text-3xl sm:text-4xl lg:text-5xl font-black mb-2 text-center">Konfirmasi Pesanan Anda</p>
      <div className={`flex flex-col lg:flex-row px-8 items-center justify-center`}>
        {merchValues.isBaju && 
          <div className='flex sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%] p-4 items-center justify-center'>
            <div className='h-1/2'>
              <img src="/sizechart.svg" alt="Size Chart" />
            </div>
          </div>
          }
        <div className="flex relative flex-col max-h-[300px] min-w-fit w-4/5 sm:w-3/5 h-fit px-5 space-y-6 mb-12">
          {merchValues.products.length > 0 && (
            <>
              <div className={`space-y-8 p-4 ${merchValues.products.length > 2 ? 'overflow-y-scroll' : ''} min-h-[100px] h-3/5 sm:visible invisible absolute sm:static`}>
                {merchValues.products.map(renderProducts)}
              </div>
              <div className={`space-y-8 p-2 h-3/5 sm:invisible sm:absolute ${merchValues.products.length > 1 ? 'overflow-y-scroll' : ''}`}>
                {merchValues.products.map(renderProductsMobile)}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
