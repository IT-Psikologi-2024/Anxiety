'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import MerchBackground from '../../components/MerchBackground';
import MerchInput from '../../components/MerchInput';
import RadioInput from '../../components/RadioInput';
import { useMerchContext } from '../../context/MerchContext';
import ProductShow from '../../components/ProductShow';
import ProductShowMobile from '@/app/components/ProductShowMobile';
import { useRouter } from 'next/navigation';

const CheckOutPage = () => {
    const route = useRouter();
    const { merchValues, setMerchValues } = useMerchContext();
    const [errors, setErrors] = useState<{
      namaLengkap: string;
      noTelp: string;
      idLine: string;
      alamatLengkap: string;
    }>({
      namaLengkap: '',
      noTelp: '',
      idLine: '',
      alamatLengkap: '',
    });

    const [pickupLocation, setPickupLocation] = useState<string>('');
    const [shippingCost, setShippingCost] = useState<number>(0);
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [dateError, setDateError] = useState<string>('');

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
              setMerchValues((prevValues) => ({
                ...prevValues,
                alamatLengkap: '',
                kodePos: '',
              }));
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

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSelectedDate(value);
      setDateError('');

      if (value) {
        const [year, month, day] = value.split('-').map(Number);
        const date = new Date(year, month - 1, day);  // month is 0-indexed

        const minDate = new Date(2024, 7, 1); 
        const maxDate = new Date(2024, 7, 5);

        if (date < minDate || date > maxDate) {
          setDateError('Please select a date between 1 and 5 August 2024');
        }
      }
    };

    const validateInputs = () => {
      const newErrors = {
        namaLengkap: '',
        noTelp: '',
        idLine: '',
        alamatLengkap: '',
      };

      newErrors.namaLengkap = merchValues.namaLengkap ? '' : 'Nama Lengkap is required';
      newErrors.noTelp = merchValues.noTelp ? '' : 'No. Telp is required';
      newErrors.idLine = merchValues.idLine ? '' : 'ID Line is required';
      if (pickupLocation !== 'Fakultas Psikologi UI') {
        newErrors.alamatLengkap = merchValues.alamatLengkap ? '' : 'Alamat Lengkap is required';
      }

      const indonesianPhoneRegex = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;
      newErrors.noTelp = indonesianPhoneRegex.test(merchValues.noTelp) ? '' : 'Please enter a valid phone number';

      setErrors(newErrors);

      return !Object.values(newErrors).some(error => error);
    };

    const calculateTotalPrice = () => {
      const totalHarga = merchValues.totalHargaProduk + shippingCost;
      if(extraBubbleWrap ) {
        return totalHarga + 5000;
      }
      return totalHarga;
    };

    const handleSubmit = () => {
      console.log("masuk sini juga bang")
      const isValid = validateInputs();

      if (pickupLocation === 'Fakultas Psikologi UI') {
        console.log("masuk psiko")
        if (!selectedDate) {
          setDateError('Please select a date');
        }
      }
      
      console.log(isValid + " valid")
      if (isValid && (pickupLocation !== 'Fakultas Psikologi UI' || (selectedDate && dateError === ''))) {
        console.log(dateError)
        console.log("masuk sini")
        route.push('/merchandise/checkout/payment');
      }
    };

    const hasErrors = Object.values(errors).some(error => error !== '');
    const products  = merchValues.products;
    const [extraBubbleWrap, setExtraBubbleWrap] = useState<boolean>(false);

    const [provinces, setProvinces] = useState<string[]>([]);
    useEffect(() => {
      const fetchProvinces = async () => {
        try {
          const response = await fetch('/api/provinces');
          const data = await response.json();
          setProvinces(data);
        } catch (error) {
          console.error('Error fetching provinces:', error);
        }
      };

      fetchProvinces();
    }, []);

    return (
      <div className="flex flex-col">
        <Navbar />
        <div className="min-h-[2321px] max-h-[2321px] sm:min-h-[3962px] sm:max-h-[3962px] h-full flex flex-col overflow-hidden relative">
          <MerchBackground />
          <div className="flex flex-col flex-grow">
              <div className="flex absolute top-[105vh] sm:top-[10vh]">
                  <img src="/merch/awan-1.svg" alt="Awan 1" className="w-3/5 lg:w-4/5 xl:w-full" />
              </div>
              <div className="flex absolute right-[-1.5rem] sm:right-0 justify-end">
                  <img src="/merch/awan-2.svg" alt="Awan 2" className="w-3/5 g:w-4/5 xl:w-full" />
              </div>
              <div className='flex absolute sm:invisible top-[30vh]'>
                <img src="/merch/mobile/awan-mobile.svg" alt="Awan Mobile" />
              </div>
              <div className="flex absolute top-[85vh] right-[-10rem] justify-end sm:left-0 sm:top-[111vh]">
                  <img src="/merch/awan-3.svg" alt="Awan 3" className="w-3/5 lg:w-4/5 xl:w-full" />
              </div>
              <div className="flex absolute justify-end top-[50vh] sm:top-[200vh] md:top-[170vh] lg:top-[150vh] xl:top-[130vh] 2xl:top-[115vh] right-0">
                  <img src="/merch/awan-4.svg" alt="Awan 4" className="sm:w-3/5 lg:w-4/5 xl:w-[90%] 2xl:w-full" />
              </div>
              <div className="flex absolute invisible sm:visible sm:top-[238vh]">
                  <img src="/merch/awan-5.svg" alt="Awan 5" className="lg:w-4/5 xl:w-full" />
              </div>
              <div className="flex absolute top-[130vh] sm:top-[250vh] right-0 justify-end">
                  <img src="/merch/checkout/awan-1.svg" alt="Awan 6" className="w-2/5 lg:w-4/5 xl:w-full" />
              </div>
              <div className="flex absolute top-[155vh] left-[-2rem] sm:left-0">
                  <img src="/merch/checkout/awan-2.svg" alt="Awan 7" className="w-2/5 lg:w-4/5 xl:w-full" />
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

              <div className='flex absolute w-full justify-end sm:invisible bottom-[55vh] right-[-8vw]'>
                <img src="/merch/mobile/pohon-tengah.svg" alt="Pohon tengah" className=''/>
              </div>

              <div className="flex flex-col relative items-center justify-center w-full mt-[5vh] sm:mt-[15vh] h-fit z-10">
                <p className="text-white text-5xl sm:text-4xl lg:text-6xl xl:text-7xl italic font-black">Data Diri</p>
                <div className={`flex relative flex-col w-4/5 bg-[#C8E3F6CC] backdrop-opacity-10 h-fit rounded-[25px] mt-10 p-8 sm:p-12 ${hasErrors ? 'space-y-2' : 'space-y-4'} sm:space-y-12 shadow-inner-custom`}>
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
                  <div className="flex flex-col w-full space-y-2 sm:space-y-8 ml-3">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-black text-product-color sm:mb-2 sm:mt-0 mt-2">Pengambilan Barang</p>
                    <RadioInput
                      label="Fakultas Psikologi UI"
                      name="pickupLocation"
                      value="Fakultas Psikologi UI"
                      checked={pickupLocation === 'Fakultas Psikologi UI'}
                      onChange={handlePickupLocationChange}
                    />
                    {pickupLocation === 'Fakultas Psikologi UI' && (
                    <div className="flex sm:mb-4 flex-col sm:flex-row w-full sm:items-center z-10 sm:ml-10 sm:space-x-8">
                      <label htmlFor="pickupDate" className="sm:ml-3 sm:text-2xl font-black text-product-color">Select Pickup Date</label>
                      <input
                        type="date"
                        id="pickupLocation"
                        value={selectedDate}
                        onChange={handleDateChange}
                        className={`p-2 border rounded ${dateError ? 'border-red-500' : 'border-gray-300'}`}
                        min="2024-08-01"
                        max="2024-08-05"
                      />
                      {dateError !== '' && <div className="text-red-500 text-sm">{dateError}</div>}
                    </div>
                  )}
                    <RadioInput
                      label="Dikirim berdasarkan alamat"
                      name="pickupLocation"
                      value="Jabodetabek (+19.000)"
                      checked={pickupLocation === 'Jabodetabek (+19.000)'}
                      onChange={handlePickupLocationChange}
                    />
                  </div>
                  {pickupLocation && pickupLocation !== 'Fakultas Psikologi UI' && (
                    <>
                      <div className="flex flex-col w-full space-y-2 sm:space-y-2 ml-3">
                        <label htmlFor="province" className="ml-3 text-2xl font-black text-product-color">Provinsi</label>
                        <select
                          id="province"
                          className="p-4 border rounded-[20px] shadow-inner-custom h-[30px] sm:h-[60px]"
                          value={merchValues.provinsi}
                          onChange={(e) => handleInputChange('province', e.target.value)}
                        >
                          <option value="">Pilih Provinsi</option>
                          {provinces.map((province) => (
                            <option key={province} value={province}>
                              {province}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col w-full ml-3">
                        <label htmlFor="kota" className="ml-3 text-2xl font-black text-product-color">Kota/Kabupaten</label>
                        <select
                          id="kota"
                          className="p-4 border rounded-[20px] shadow-inner-custom h-[30px] sm:h-[60px]"
                          value={merchValues.kota}
                          onChange={(e) => handleInputChange('kota', e.target.value)}
                        >
                          <option value="">Pilih Kota/Kabupaten</option>
                          {provinces.map((province) => (
                            <option key={province} value={province}>
                              {province}
                            </option>
                          ))}
                        </select>
                      </div>
                      <MerchInput
                      label="Alamat Lengkap"
                      id="alamatLengkap"
                      type="textarea"
                      value={merchValues.alamatLengkap}
                      onChange={handleInputChange}
                      error={errors.alamatLengkap}
                      className='h-[80px] sm:h-[115px] p-4'
                      />
                    </>
                  )}
                  
                </div>
              </div>


              <div className='flex flex-col relative items-center justify-center w-full h-fit mt-[10vh] z-10'>
                  <p className="text-white text-5xl sm:text-4xl lg:text-6xl xl:text-7xl italic font-black">Pesanan</p>
                  <div className="flex relative flex-col max-h-[700px] w-4/5 bg-[#C8E3F6CC] backdrop-opacity-10 h-fit rounded-[25px] py-4 mt-5 sm:mt-10 px-5  sm:p-16 space-y-6 shadow-inner-custom">
                    {products.length > 0 && (
                      <>
                        <div className={`space-y-8 p-8 overflow-y-scroll min-h-[200px] h-3/5 sm:visible invisible absolute sm:static`}>
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
                        <div className={`space-y-8 p-2  h-3/5 sm:invisible sm:absolute overflow-y-scroll`}>
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

                      <div className="flex items-center space-x-4">
                          <input
                          type="radio"
                          id="extraBubbleWrap"
                          name="extraBubbleWrap"
                          checked={extraBubbleWrap}
                          onChange={(e) => setExtraBubbleWrap(e.target.checked)}
                          className='sm:mr-4 w-6 sm:w-8 h-6 sm:h-8'
                          />
                          <div className='flex flex-col'>
                              <label htmlFor="extraBubbleWrap" className="text-xl sm:text-3xl font-bold text-product-color">
                              Extra Bubble Wrap
                              </label>
                              <p className='text-white text-lg sm:text-2xl drop-shadow-md'>Rp 5.000</p>
                          </div>
                      </div>

                      <div>
                          <MerchInput
                                  label="Note Pemesanan"
                                  id="notePemesanan"
                                  value={merchValues.notePemesanan}
                                  onChange={handleInputChange}
                                  className='h-[50px]'
                              />
                      </div>
                  </div>
              </div>

              <div className='flex relative justify-center w-full h-fit mt-12 sm:mt-[10vh]'>
                  <div className='flex relative flex-col items-center w-4/5 bg-[#c8e3f696] h-[350px] sm:h-[489px] rounded-[25px] sm:mt-10 p-8 sm:p-16 space-y-4 sm:space-y-8 shadow-inner-custom'>
                      <div className='flex flex-col relative h-4/5 text-product-color w-full font-black space-y-8 sm:space-y-16 sm:justify-center'>
                          <div className='flex flex-col relative space-y-2'>
                              <div className='flex justify-between'>
                                  <p className='text-xl sm:text-3xl md:text-4xl'>
                                      Total Harga
                                  </p>
                                  <p className='text-white text-xl sm:text-3xl md:text-4xl drop-shadow-md'>
                                      Rp {merchValues.totalHargaProduk.toLocaleString('id-ID')}
                                  </p>
                              </div>
                              <div className='flex justify-between'>
                                  <p className='text-xl sm:text-3xl md:text-4xl'>
                                      Biaya Ongkir
                                  </p>
                                  <p className='text-white text-xl sm:text-3xl md:text-4xl drop-shadow-md'>
                                      Rp {shippingCost.toLocaleString('id-ID')}
                                  </p>
                              </div>
                              <div className='flex justify-between'>
                                  <p className='text-xl sm:text-3xl lg:text-4xl w-1/2'>
                                      Extra Bubble Wrap
                                  </p>
                                  <p className='flex justify-end w-1/2 text-white text-xl sm:text-3xl md:text-4xl drop-shadow-md'>
                                      Rp {extraBubbleWrap ? '5.000' : '0'}
                                  </p>
                              </div>
                          </div>
                          
                          <div className='flex justify-between sm:mt-4'>
                              <p className='w-1/2 text-xl sm:text-3xl lg:text-4xl'>
                                  Total Pembelanjaan
                              </p>
                              <p className='flex w-1/2 text-white text-xl sm:text-3xl md:text-4xl drop-shadow-md justify-end'>
                                  Rp {calculateTotalPrice().toLocaleString('id-ID')}
                              </p>
                          </div>
                      </div>
                      
                      <div className='flex relative w-full h-1/5 justify-center items-center'>
                          <button className='bg-[#FBB3D7] text-black sm:text-2xl drop-shadow-md rounded-[37px] w-3/5 sm:w-1/2 md:w-2/5 lg:w-[29%] 2xl:w-1/5 h-3/5 sm:h-4/5 z-10' onClick={handleSubmit}>
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
              <div className='flex absolute bottom-0 sm:invisible'>
                <img src="/merch/checkout/mobile/ito-1.svg" alt="Ito 1" />
              </div>
              <div className="flex absolute bottom-0 right-0 justify-end invisible sm:visible">
                  <img src="/merch/checkout/ivy-1.svg" alt="Ivy 1" className="w-3/5 lg:w-4/5" />
              </div>
              <div className="flex absolute bottom-0 right-0 justify-end sm:invisible">
                  <img src="/merch/checkout/mobile/ivy-1.svg" alt="Ivy 1" className="" />
              </div>
          </div>
        </div>
      </div>
    );
};

export default CheckOutPage;