import React from 'react'
import MerchInput from '../components/MerchInput'
import ProductShow from '../components/ProductShow'
import ProductShowMobile from '../components/ProductShowMobile'
import { useRouter } from 'next/navigation'
import { useMerchContext } from '../context/MerchContext'

const ConfirmationModal = () => {
  const route = useRouter();
  const { merchValues, setMerchValues } = useMerchContext();
  const products = merchValues.products;

  const handleInputChange = async (id: string, value: string | boolean | number ) => {
    setMerchValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  }
  return (
    <div className="flex flex-col relative items-center justify-center w-full h-fit mt-[5vh] z-10">
            <div className="flex relative flex-col max-h-[500px] w-4/5 sm:w-3/5 bg-[#C8E3F6CC] backdrop-opacity-10 h-fit rounded-[25px] py-4 mt-5 sm:mt-4 px-5 sm:p-8 space-y-6 shadow-inner-custom">
              <p className="text-white text-3xl sm:text-4xl lg:text-5xl italic font-black mb-2 text-center">Pesanan</p>
              {products.length > 0 && (
                <>
                  <div className={`space-y-8 p-4 overflow-y-scroll min-h-[100px] h-3/5 sm:visible invisible absolute sm:static`}>
                    {products.map((product, index) => (
                      <ProductShow
                        key={index}
                        image={product.image}
                        nama={product.nama}
                        description={product.description}
                        harga={product.harga}
                        jumlah={product.jumlah}
                      />
                    ))}
                  </div>
                  <div className={`space-y-8 p-2 h-3/5 sm:invisible sm:absolute overflow-y-scroll`}>
                    {products.map((product, index) => (
                      <ProductShowMobile
                        key={index}
                        image={product.image}
                        nama={product.nama}
                        description={product.description}
                        harga={product.harga}
                        jumlah={product.jumlah}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
  )
}

export default ConfirmationModal