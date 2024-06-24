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
    <div className="flex flex-col relative items-center justify-center w-full h-fit mt-[5vh] z-10">
      <p className="text-white drop-shadow-xl text-3xl sm:text-4xl lg:text-5xl font-black mb-2 text-center">Konfirmasi Pesanan Anda</p>
      <div className="flex relative flex-col max-h-[500px] min-w-fit w-4/5 sm:w-3/5 h-fit py-4 mt-5 sm:mt-4 px-5 sm:p-8 space-y-6">
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
  );
};

export default ConfirmationModal;
