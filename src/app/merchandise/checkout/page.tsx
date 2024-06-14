'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import MerchBackground from '../../components/MerchBackground';
import MerchInput from '../../components/MerchInput';
import RadioInput from '../../components/RadioInput';
import { useMerchContext } from '../../context/MerchContext';
import ProductShow from '../../components/ProductShow';

const CheckOutPage = () => {
    const { merchValues, setMerchValues } = useMerchContext();
    const [errors, setErrors] = useState<{
      namaLengkap: string;
      noTelp: string;
      idLine: string;
      alamatLengkap: string;
      kodePos: string;
    }>({
      namaLengkap: '',
      noTelp: '',
      idLine: '',
      alamatLengkap: '',
      kodePos: ''
    });

    const [pickupLocation, setPickupLocation] = useState<string>('');
    const [shippingCost, setShippingCost] = useState<number>(0);

    const handleInputChange = (id: string, value: string) => {
        setMerchValues((prevValues) => ({
          ...prevValues,
          [id]: value,
        }));
        setErrors((prevErrors) => ({
          ...prevErrors,
          [id]: '',
        }));
    };

    const handlePickupLocationChange = (value: string) => {
      setPickupLocation(value);
      switch (value) {
          case 'Fakultas Psikologi UI':
              setShippingCost(0);
              break;
          case 'Jabodetabek (+19.000)':
              setShippingCost(19000);
              break;
          case 'Pulau Jawa (+29.000)':
              setShippingCost(29000);
              break;
          case 'Luar Pulau Jawa (+49.000)':
              setShippingCost(49000);
              break;
          default:
              setShippingCost(0);
      }
  };
    
      const validateInputs = () => {
        const newErrors = {
          namaLengkap: '',
          noTelp: '',
          idLine: '',
          alamatLengkap: '',
          kodePos: '',
        };
    
        newErrors.namaLengkap = merchValues.namaLengkap ? '' : 'Nama Lengkap is required';
        newErrors.noTelp = merchValues.noTelp ? '' : 'No. Telp is required';
        newErrors.idLine = merchValues.idLine ? '' : 'ID Line is required';
        newErrors.alamatLengkap = merchValues.alamatLengkap ? '' : 'Alamat Lengkap is required';
        newErrors.kodePos = merchValues.kodePos ? '' : 'Kode Pos is required';
    
        const indonesianPhoneRegex = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;
        newErrors.noTelp = indonesianPhoneRegex.test(merchValues.noTelp) ? '' : 'Please enter a valid phone number';
    
        setErrors(newErrors);
    
        return !Object.values(newErrors).some(error => error);
    };

    const { products, bundles } = merchValues.cart;
    const [extraBubbleWrap, setExtraBubbleWrap] = useState<boolean>(false);
    
    const calculateTotalPrice = () => {
      const totalHarga = merchValues.totalHargaProduk + shippingCost;
      if(extraBubbleWrap ) {
        return totalHarga + 5000;
      }
      return totalHarga
    };

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="min-h-[2321px] sm:min-h-[3962px] h-full flex flex-col overflow-hidden relative">
        <MerchBackground />
        <div className="flex flex-col flex-grow">
            <div className="flex absolute top-[105vh] sm:top-[10vh]">
                <img src="/merch/awan-1.svg" alt="Awan 1" className="w-3/5 lg:w-4/5 xl:w-full" />
            </div>
            <div className="flex absolute right-[-4rem] sm:right-0 justify-end">
                <img src="/merch/awan-2.svg" alt="Awan 2" className="w-3/5 g:w-4/5 xl:w-full" />
            </div>
            <div className="flex absolute top-[75vh] left-[10rem] sm:left-0 sm:top-[111vh]">
                <img src="/merch/awan-3.svg" alt="Awan 3" className="w-3/5 lg:w-4/5 xl:w-full" />
            </div>
            <div className="flex absolute justify-end top-[50vh] sm:top-[200vh] md:top-[170vh] lg:top-[150vh] xl:top-[130vh] 2xl:top-[115vh] right-0">
                <img src="/merch/awan-4.svg" alt="Awan 4" className="w-3/5 lg:w-4/5 xl:w-[90%] 2xl:w-full" />
            </div>
            <div className="flex absolute top-[130vh] sm:top-[238vh]">
                <img src="/merch/awan-5.svg" alt="Awan 5" className="lg:w-4/5 xl:w-full" />
            </div>
            <div className="flex absolute top-[120vh] sm:top-[250vh] right-0 justify-end">
                <img src="/merch/checkout/awan-1.svg" alt="Awan 6" className="w-3/5 lg:w-4/5 xl:w-full" />
            </div>
            <div className="flex absolute top-[360vh]">
                <img src="/merch/checkout/awan-2.svg" alt="Awan 7" className="w-3/5 lg:w-4/5 xl:w-full" />
            </div>

            <div className="flex absolute justify-end sm:bottom-[10vh] md:bottom-[15vh] xl:bottom-[20vh] 2xl:bottom-[30vh] right-0">
                <img src="/merch/loli-kanan.svg" alt="Loli Kanan" className="w-3/5 lg:w-full invisible sm:visible" />
            </div>

            <div className="flex flex-col absolute bottom-0 w-full sm:visible invisible">
                <img src="/merch/rumput-1.svg" alt="Rumput" />
            </div>
            <div className="flex flex-col absolute bottom-0 w-full sm:invisible">
                <img src="/merch/mobile/rumput-1.svg" alt="Rumput" />
            </div>

            <div className="flex flex-col relative items-center justify-center w-full mt-[15vh] h-fit">
                <p className="text-white sm:text-4xl lg:text-6xl xl:text-7xl italic font-black">Data Diri</p>
                <div className="flex relative flex-col w-4/5 bg-[#C8E3F6] h-[1536px] rounded-[25px] mt-10 p-16 space-y-12 shadow-inner-custom">
                    <MerchInput
                        label="Nama Lengkap"
                        id="namaLengkap"
                        value={merchValues.namaLengkap}
                        onChange={handleInputChange}
                        error={errors.namaLengkap}
                    />
                    <MerchInput
                        label="No. Telepon Aktif"
                        id="noTelp"
                        value={merchValues.noTelp}
                        onChange={handleInputChange}
                        error={errors.noTelp}
                    />
                    <MerchInput
                        label="ID Line"
                        id="idLine"
                        value={merchValues.idLine}
                        onChange={handleInputChange}
                        error={errors.idLine}
                    />
                    <MerchInput
                        label="Alamat Lengkap"
                        id="alamatLengkap"
                        value={merchValues.alamatLengkap}
                        onChange={handleInputChange}
                        error={errors.alamatLengkap}
                    />
                    <MerchInput
                        label="Kode Pos"
                        id="kodePos"
                        value={merchValues.kodePos}
                        onChange={handleInputChange}
                        error={errors.kodePos}
                    />

                    <div className="flex flex-col w-full space-y-8 ml-3">
                        <p className="text-3xl md:text-4xl font-black text-product-color mb-2">Pengambilan Barang</p>
                        <RadioInput
                        label="Fakultas Psikologi UI"
                        name="pickupLocation"
                        value="Fakultas Psikologi UI"
                        checked={pickupLocation === 'Fakultas Psikologi UI'}
                        onChange={handlePickupLocationChange}
                        />
                        <RadioInput
                        label="Jabodetabek (+19.000)"
                        name="pickupLocation"
                        value="Jabodetabek (+19.000)"
                        checked={pickupLocation === 'Jabodetabek (+19.000)'}
                        onChange={handlePickupLocationChange}
                        />
                        <RadioInput
                        label="Pulau Jawa (+29.000)"
                        name="pickupLocation"
                        value="Pulau Jawa (+29.000)"
                        checked={pickupLocation === 'Pulau Jawa (+29.000)'}
                        onChange={handlePickupLocationChange}
                        />
                        <RadioInput
                        label="Luar Pulau Jawa (+49.000)"
                        name="pickupLocation"
                        value="Luar Pulau Jawa (+49.000)"
                        checked={pickupLocation === 'Luar Pulau Jawa (+49.000)'}
                        onChange={handlePickupLocationChange}
                        />
                    </div>
                </div>
            </div>

            <div className='flex flex-col relative items-center justify-center w-full h-fit mt-[10vh] z-10'>
                <p className="text-white sm:text-4xl lg:text-6xl xl:text-7xl italic font-black">Pesanan</p>

                <div className="flex relative flex-col w-4/5 bg-[#C8E3F6] h-[1119px] rounded-[25px] mt-10 p-16 space-y-12 shadow-inner-custom">
                    <div className={`space-y-8 p-8 ${(products.length + bundles.length > 2)? 'overflow-y-scroll' : 'overflow-hidden'} h-3/5`}>
                        {bundles.map((bundle, index) => (
                        <ProductShow
                            key={index}
                            image={bundle.image}
                            nama={bundle.nama}
                            description={bundle.description}
                            harga={bundle.harga}
                            jumlah={bundle.jumlah}
                        />
                        ))}
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

                    <div className="flex items-center space-x-4">
                        <input
                        type="radio"
                        id="extraBubbleWrap"
                        name="extraBubbleWrap"
                        checked={extraBubbleWrap}
                        onChange={(e) => setExtraBubbleWrap(e.target.checked)}
                        className='mr-4 w-6 h-6 sm:w-8 sm:h-8'
                        />
                        <div className='flex flex-col'>
                            <label htmlFor="extraBubbleWrap" className="text-3xl font-bold text-product-color">
                            Extra Bubble Wrap
                            </label>
                            <p className='text-white text-2xl drop-shadow-md'>Rp 5.000</p>
                        </div>
                    </div>

                    <div>
                        <MerchInput
                                label="Note Pemesanan"
                                id="notePemesanan"
                                value={merchValues.notePemesanan}
                                onChange={handleInputChange}
                                className='h-[88px]'
                            />
                    </div>
                </div>
            </div>

            <div className='flex relative justify-center w-full h-fit mt-[10vh]'>
                <div className='flex relative flex-col items-center w-4/5 bg-[#C8E3F6] h-[489px] rounded-[25px] mt-10 p-16 space-y-8 lg:space-y-12 z-10 shadow-inner-custom'>
                    <div className='flex flex-col relative h-4/5 text-product-color w-full font-black space-y-16 justify-center'>
                        <div className='flex flex-col relative space-y-2'>
                            <div className='flex justify-between'>
                                <p className='text-3xl md:text-4xl'>
                                    Total Harga
                                </p>
                                <p className='text-white text-3xl md:text-4xl drop-shadow-md'>
                                    Rp {merchValues.totalHargaProduk.toLocaleString('id-ID')}
                                </p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='text-3xl md:text-4xl'>
                                    Biaya Ongkir
                                </p>
                                <p className='text-white text-3xl md:text-4xl drop-shadow-md'>
                                    Rp {shippingCost.toLocaleString('id-ID')}
                                </p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='text-3xl lg:text-4xl w-1/2'>
                                    Extra Bubble Wrap
                                </p>
                                <p className='flex justify-end w-1/2 text-white text-3xl md:text-4xl drop-shadow-md'>
                                    Rp {extraBubbleWrap ? '5.000' : '0'}
                                </p>
                            </div>
                        </div>
                        
                        <div className='flex justify-between mt-4'>
                            <p className='w-1/2 text-3xl lg:text-4xl'>
                                Total Pembelanjaan
                            </p>
                            <p className='flex w-1/2 text-white text-3xl md:text-4xl drop-shadow-md justify-end'>
                                Rp {calculateTotalPrice().toLocaleString('id-ID')}
                            </p>
                        </div>
                    </div>
                    
                    <div className='flex relative w-full h-1/5 justify-center items-center'>
                        <button className='bg-[#FBB3D7] text-black text-2xl drop-shadow-md rounded-[37px] sm:w-1/2 md:w-2/5 lg:w-[29%] 2xl:w-1/5 h-4/5'>
                            Bayar Sekarang
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex absolute sm:bottom-[20vh] md:bottom-[25vh] lg:bottom-[30vh] xl:bottom-[35vh]">
                <img src="/merch/loli-kiri.svg" alt="Loli Kiri" className="w-3/5 lg:w-full invisible sm:visible" />
            </div>
            <div className="flex absolute bottom-0 invisible sm:visible">
                <img src="/merch/checkout/ito-1.svg" alt="Ito 1" className="w-3/5 lg:w-4/5" />
            </div>
            <div className="flex absolute bottom-0 right-0 justify-end invisible sm:visible">
                <img src="/merch/checkout/ivy-1.svg" alt="Ivy 1" className="w-3/5 lg:w-4/5" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
