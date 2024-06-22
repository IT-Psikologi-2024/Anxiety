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

interface Province {
  province_id: string;
  province: string;
}

interface City {
  city_id: string;
  city_name: string;
}

const CheckOutPage = () => {
  const route = useRouter();
  const { merchValues, setMerchValues } = useMerchContext();
  const [errors, setErrors] = useState<{
    namaLengkap: string;
    noTelp: string;
    idLine: string;
    alamatLengkap: string;
    provinsi: string;
    kota: string;
  }>({
    namaLengkap: '',
    noTelp: '',
    idLine: '',
    alamatLengkap: '',
    provinsi: '',
    kota: '',
  });

  const [pickupLocation, setPickupLocation] = useState<string>('');
  const [shippingCost, setShippingCost] = useState<number>(0);
  const [dateError, setDateError] = useState<string>('');
  const [cities, setCities] = useState<City[]>([]);

  const handleInputChange = async (id: string, value: string | Province | City | boolean | number | undefined) => {
    setMerchValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));

    if (id === 'provinsi') {
      const province = value as Province;
      try {
        const response = await fetch(`http://localhost:8000/ongkir/get-city/${province.province_id}`);
        const data = await response.json();
        setCities(data);
        setMerchValues((prevValues) => ({
          ...prevValues,
          kota: { city_id: '', city_name: '' },
          hargaOngkir: 0,
        }));
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    } else if (id === 'kota') {
      const city = value as City;
      try {
        const response = await fetch(`http://localhost:8000/ongkir/get-ongkir/${city.city_id}`);
        const data = await response.json();
        setShippingCost(data.cost);
        setMerchValues((prevValues) => ({
          ...prevValues,
          hargaOngkir: data.cost,
        }));
      } catch (error) {
        console.error('Error fetching shipping cost:', error);
      }
    }

    console.log(merchValues);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: '',
    }));
  };

  const handlePickupLocationChange = (value: string) => {
    setPickupLocation(value);
    setMerchValues((prevValues) => ({
      ...prevValues,
      provinsi: {
        province_id: '',
        province: '',
      },
      kota: {
        city_id: '',
        city_name: '',
      },
      tanggalPengambilan: '',
      hargaOngkir: 0,
    }));
    setCities([]);
    setDateError('');
    setErrors((prevErrors) => ({
      ...prevErrors,
      provinsi: '',
      kota: '',
      alamatLengkap: '',
    }));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMerchValues((prevValues) => ({
      ...prevValues,
      tanggalPengambilan: value,
    }));
    setDateError('');

    if (value) {
      const [year, month, day] = value.split('-').map(Number);
      const date = new Date(year, month - 1, day); // month is 0-indexed

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
      provinsi: '',
      kota: '',
    };

    newErrors.namaLengkap = merchValues.namaLengkap ? '' : 'Nama Lengkap is required';
    newErrors.noTelp = merchValues.noTelp ? '' : 'No. Telp is required';
    newErrors.idLine = merchValues.idLine ? '' : 'ID Line is required';
    if (pickupLocation !== 'Fakultas Psikologi UI') {
      newErrors.alamatLengkap = merchValues.alamatLengkap ? '' : 'Alamat Lengkap is required';
      newErrors.provinsi = merchValues.provinsi.province_id ? '' : 'Provinsi is required';
      newErrors.kota = merchValues.kota.city_id ? '' : 'Kota is required';
    }

    const indonesianPhoneRegex = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;
    newErrors.noTelp = indonesianPhoneRegex.test(merchValues.noTelp) ? '' : 'Please enter a valid phone number';

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = () => {
    console.log('masuk sini juga bang');
    const isValid = validateInputs();

    if (pickupLocation === 'Fakultas Psikologi UI') {
      console.log('masuk psiko');
      if (!merchValues.tanggalPengambilan) {
        setDateError('Please select a date');
      }
    }

    console.log(isValid + ' valid');
    if (
      isValid &&
      (pickupLocation !== 'Fakultas Psikologi UI' || (merchValues.tanggalPengambilan && dateError === ''))
    ) {
      setMerchValues((prevValues) => ({
        ...prevValues,
      }));
      route.push('/merchandise/payment');
    }
  };

  const hasErrors = Object.values(errors).some((error) => error !== '');
  const products = merchValues.products;
  const [extraBubbleWrap, setExtraBubbleWrap] = useState<boolean>(false);

  const [provinces, setProvinces] = useState<Province[]>([]);

  useEffect(() => {
    handleInputChange('hargaOngkir', 0);
    handleInputChange('extraBubbleWrap', false);
    const fetchProvinces = async () => {
      try {
        const response = await fetch('http://localhost:8000/ongkir/get-province');
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
      <div className="h-full flex flex-col overflow-hidden relative">
        <MerchBackground />
        <div className="flex flex-col flex-grow">
          <div className="flex absolute top-[105vh] sm:top-[10vh]">
            <img src="/merch/awan-1.svg" alt="Awan 1" className="w-3/5" />
          </div>
          <div className="flex absolute right-[-1.5rem] sm:right-0 justify-end">
            <img src="/merch/awan-2.svg" alt="Awan 2" className="w-3/5" />
          </div>
          <div className="flex absolute sm:invisible top-[30vh]">
            <img src="/merch/mobile/awan-mobile.svg" alt="Awan Mobile" />
          </div>
          <div className="flex absolute top-[85vh] right-[-10rem] justify-end sm:left-0 sm:top-[111vh]">
            <img src="/merch/awan-3.svg" alt="Awan 3" className="w-2/5" />
          </div>
          <div className="flex absolute justify-end top-[50vh] sm:top-[200vh] md:top-[170vh] lg:top-[150vh] xl:top-[130vh] 2xl:top-[65vh] right-0">
            <img src="/merch/awan-4.svg" alt="Awan 4" className="w-1/2" />
          </div>
          <div className="flex absolute invisible sm:visible sm:top-[238vh]">
            <img src="/merch/awan-5.svg" alt="Awan 5" className="w-3/5" />
          </div>
          <div className="flex absolute top-[130vh] sm:top-[250vh] right-0 justify-end">
            <img src="/merch/checkout/awan-1.svg" alt="Awan 6" className="w-2/5" />
          </div>
          <div className="flex absolute top-[155vh] left-[-2rem] sm:left-0">
            <img src="/merch/checkout/awan-2.svg" alt="Awan 7" className="w-2/5" />
          </div>

          <div className="flex absolute justify-end sm:bottom-[10vh] md:bottom-[15vh] xl:bottom-[20vh] 2xl:bottom-[30vh] right-0">
            <img src="/merch/loli-kanan.svg" alt="Loli Kanan" className="w-3/5 lg:w-full invisible sm:visible" />
          </div>
          <div className="flex absolute sm:bottom-[20vh] md:bottom-[25vh] lg:bottom-[30vh] xl:bottom-[35vh]">
            <img src="/merch/loli-kiri.svg" alt="Loli Kiri" className="w-3/5 lg:w-full invisible sm:visible" />
          </div>

          <div className="flex flex-col absolute bottom-0 w-full sm:visible invisible">
            <img src="/merch/rumput-1.svg" alt="Rumput" />
          </div>
          <div className="flex flex-col absolute bottom-0 w-full sm:invisible">
            <img src="/merch/mobile/rumput-1.svg" alt="Rumput" />
          </div>

          <div className="flex absolute w-full justify-end sm:invisible bottom-[55vh] right-[-8vw]">
            <img src="/merch/mobile/pohon-tengah.svg" alt="Pohon tengah" className="" />
          </div>

          <div className="flex flex-col relative items-center justify-center w-full mt-[5vh] sm:mt-[10vh] h-fit z-10">
            <div
              className={`flex relative flex-col w-4/5 sm:w-3/5 bg-[#C8E3F6CC] backdrop-opacity-10 h-fit rounded-[25px] p-8 ${
                hasErrors ? 'space-y-2' : 'space-y-4'
              } sm:space-y-6 shadow-inner-custom`}
            >
              <p className="text-white text-3xl sm:text-4xl lg:text-5xl italic font-black text-center mb-2">Data Diri</p>
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
              <div className="flex flex-col w-full space-y-2 sm:space-y-4 ml-3">
                <p className="text-2xl font-black text-product-color sm:mb-2 sm:mt-0 mt-2">Pengambilan Barang</p>
                <RadioInput
                  label="Fakultas Psikologi UI"
                  name="pickupLocation"
                  value="Fakultas Psikologi UI"
                  checked={pickupLocation === 'Fakultas Psikologi UI'}
                  onChange={handlePickupLocationChange}
                />
                {pickupLocation === 'Fakultas Psikologi UI' && (
                  <div className="flex sm:mb-4 flex-col sm:flex-row w-full sm:items-center z-10 sm:ml-10 sm:space-x-8">
                    <label htmlFor="pickupDate" className="sm:ml-3 sm:text-lg font-black text-product-color">Select Pickup Date</label>
                    <input
                      type="date"
                      id="pickupLocation"
                      value={merchValues.tanggalPengambilan}
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
                    <label htmlFor="province" className="ml-3 text-xl font-black text-product-color">Provinsi</label>
                    <select
                      id="provinsi"
                      className="p-2 border rounded-[20px] shadow-inner-custom h-[40px]"
                      value={merchValues.provinsi.province_id || ''}
                      onChange={(e) => {
                        const selectedProvince = provinces.find((prov) => prov.province_id === e.target.value);
                        handleInputChange('provinsi', selectedProvince);
                      }}
                    >
                      <option value="" disabled>Pilih Provinsi</option>
                      {provinces.map((province) => (
                        <option key={province.province_id} value={province.province_id}>
                          {province.province}
                        </option>
                      ))}
                    </select>
                    {errors.provinsi && <span className="text-red-500 text-sm">{errors.provinsi}</span>}
                  </div>

                  <div className="flex flex-col w-full space-y-2 sm:space-y-2 ml-3">
                    <label htmlFor="city" className="ml-3 text-xl font-black text-product-color">Kota</label>
                    <select
                      id="city"
                      className="p-2 border rounded-[20px] shadow-inner-custom h-[40px]"
                      value={merchValues.kota.city_id || ''}
                      onChange={(e) => {
                        const selectedCity = cities.find((city) => city.city_id === e.target.value);
                        handleInputChange('kota', selectedCity);
                      }}
                    >
                      <option value="" disabled>Pilih Kota</option>
                      {cities.map((city) => (
                        <option key={city.city_id} value={city.city_id}>
                          {city.city_name}
                        </option>
                      ))}
                    </select>
                    {errors.kota && <span className="text-red-500 text-sm">{errors.kota}</span>}
                  </div>
                  <MerchInput
                    label="Alamat Lengkap"
                    id="alamatLengkap"
                    type="textarea"
                    value={merchValues.alamatLengkap}
                    onChange={handleInputChange}
                    error={errors.alamatLengkap}
                  />
                </>
              )}
            </div>
          </div>

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

              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  id="extraBubbleWrap"
                  name="extraBubbleWrap"
                  checked={extraBubbleWrap}
                  onChange={(e) => {
                    setExtraBubbleWrap(e.target.checked);
                    console.log(e.target.checked + ' ini target');
                    handleInputChange('extraBubbleWrap', e.target.checked);
                  }}
                  className="w-6 h-6"
                />
                <div className="flex flex-col">
                  <label htmlFor="extraBubbleWrap" className="text-xl font-bold text-product-color">
                    Extra Bubble Wrap
                  </label>
                  <p className="text-white text-lg drop-shadow-md">Rp 5.000</p>
                </div>
              </div>

              <div>
                <MerchInput label="Note Pemesanan" id="notePemesanan" value={merchValues.notePemesanan} onChange={handleInputChange} />
              </div>
            </div>
          </div>

          <div className="flex relative justify-center w-full h-fit mt-12 mb-40 sm:mt-[10vh] sm:mb-[20vh]">
            <div className="flex relative flex-col items-center w-4/5 sm:w-3/5 bg-[#c8e3f696] h-fit rounded-[25px] sm:mt-10 p-8 sm:p-12 space-y-4 shadow-inner-custom">
              <div className="flex flex-col relative h-4/5 text-product-color w-full font-black space-y-8 sm:justify-center">
                <div className="flex flex-col relative space-y-2">
                  <div className="flex justify-between">
                    <p className="text-lg sm:text-2xl">Total Harga</p>
                    <p className="text-white text-lg sm:text-2xl drop-shadow-md">Rp {merchValues.totalHargaProduk.toLocaleString('id-ID')}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-lg sm:text-2xl">Biaya Ongkir</p>
                    <p className="text-white text-lg sm:text-2xl drop-shadow-md">Rp {merchValues.hargaOngkir.toLocaleString('id-ID')}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-lg sm:text-2xl w-1/2">Extra Bubble Wrap</p>
                    <p className="flex justify-end w-1/2 text-white text-lg sm:text-2xl drop-shadow-md">Rp {extraBubbleWrap ? '5.000' : '0'}</p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <p className="w-1/2 text-lg sm:text-2xl">Total Pembelanjaan</p>
                  <p className="flex w-1/2 text-white text-lg sm:text-2xl drop-shadow-md justify-end">
                    Rp {(merchValues.hargaOngkir + merchValues.totalHargaProduk + (merchValues.extraBubbleWrap ? 5000 : 0)).toLocaleString('id-ID')}
                  </p>
                </div>
              </div>

              <div className="flex relative w-full h-1/5 justify-center items-center">
                <button
                  className="bg-[#FBB3D7] text-black sm:text-xl drop-shadow-md rounded-[37px] p-2 z-10 hover:scale-110 transition ease-in-out"
                  onClick={handleSubmit}
                >
                  Bayar Sekarang
                </button>
              </div>
            </div>
          </div>

          <div className="flex absolute bottom-0 invisible sm:visible">
            <img src="/merch/checkout/ito-1.svg" alt="Ito 1" className="w-3/5 lg:w-4/5" />
          </div>
          <div className="flex absolute bottom-0 sm:invisible">
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