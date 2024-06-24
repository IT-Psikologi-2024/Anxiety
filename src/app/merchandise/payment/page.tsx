'use client'
import React, { useState } from 'react'
import Navbar from '../../components/Navbar';
import MerchBackground from '../../components/merch/MerchBackground';
import { useMerchContext } from '../../context/MerchContext';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const PaymentPage = () => {
  const route = useRouter()
  const { merchValues, selectedFileBayar, setSelectedFileBayar, errorMessageBayar, setErrorMessageBayar } = useMerchContext();
  const [fileError, setFileError] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file.type.startsWith('image/')) {
        setSelectedFileBayar(file);
        setErrorMessageBayar('');
        setFileError('');
      } else {
        setErrorMessageBayar('Please select a valid image file.');
      }
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('namaLengkap', merchValues.namaLengkap);
    formData.append('idLine', merchValues.idLine);
    formData.append('noTelepon', merchValues.noTelp);
    var alamatLengkap = '';
    var pengambilanBarang = 'Fakultas Psikologi UI';
    if (merchValues.tanggalPengambilan === '') {
      pengambilanBarang = 'Dikirim berdasarkan alamat'
      alamatLengkap = merchValues.alamatLengkap.concat(", ", merchValues.kota.city_name).concat(", " , merchValues.provinsi.province);
    }
    formData.append('alamatLengkap', alamatLengkap);
    formData.append('kodePos', merchValues.kodePos);
    formData.append('pengambilanBarang', pengambilanBarang);
    formData.append('orders', JSON.stringify(merchValues.products))
    formData.append('extraBubbleWrap', String(merchValues.extraBubbleWrap))
    formData.append('ongkir', String(merchValues.hargaOngkir))

    if (selectedFileBayar) {
      formData.append('Files', selectedFileBayar);
    }
    try {
      console.log(formData)
      const response = await axios.post('http://localhost:8000/merch',formData , {});
      console.log(response.data)
    } catch (error) {
      console.error('Error submitting form', error);
    }
      route.push("/merchandise/terimakasih")
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col overflow-hidden relative">
        <MerchBackground />
        <div className="flex flex-col flex-grow">
          <div className='flex absolute right-[25vw] top-[-10vh] sm:visible invisible'>
            <img src="/merch/payment/awan-1.svg" alt="Awan 1" className='w-3/5 sm:w-3/4'/>
          </div>
          <div className='flex absolute top-[20vh] sm:top-[15vh]'>
            <img src="/merch/payment/awan-2.svg" alt="Awan 2" className='w-3/5 sm:w-3/4'/>
          </div>
          <div className='flex absolute right-0 left-[18vw] top-[20vh] sm:visible invisible'>
            <img src="/merch/payment/awan-3.svg" alt="Awan 3" className='w-3/5 sm:w-3/4'/>
          </div>
          <div className="flex absolute justify-end top-[-5vh] sm:top-[15vh] right-0">
            <img src="/merch/payment/awan-6.svg" alt="Awan 6" className='w-3/5 sm:w-3/4'/>
          </div>
          <div className="flex absolute top-[35vh] sm:top-[55vh] ">
            <img src="/merch/payment/awan-4.svg" alt="Awan 4" className='w-3/5 sm:w-3/4'/>
          </div>
          <div className='flex absolute sm:top-[100vh] w-full justify-end right-0 top-[25vh] sm:right-[5vw]'>
            <img src="/merch/payment/awan-5.svg" alt="Awan 5" className='w-3/5 sm:w-3/4'/>
          </div>
          <div className='flex absolute justify-end right-0 bottom-[42vh] -mr-[3rem] sm:mr-0 sm:bottom-[15vh] md:bottom-[10vh] lg:bottom-[20vh] xl:bottom-[25vh] 2xl:bottom-[40vh]'>
            <img src="/merch/loli-kanan.svg" alt="Loli Kanan" className='w-3/4 sm:w-1/2 md:w-3/5'/>
          </div>
          <div className="flex flex-col absolute bottom-0 w-full sm:visible invisible">
            <img src="/merch/rumput-1.svg" alt="Rumput" />
          </div>
          <div className="flex flex-col absolute bottom-0 w-full sm:invisible">
            <img src="/merch/mobile/rumput-1.svg" alt="Rumput" />
          </div>
          <div className='flex absolute sm:bottom-[15vh] md:bottom-[10vh] lg:bottom-[20vh] xl:bottom-[25vh] 2xl:bottom-[40vh] sm:visible invisible'>
            <img src="/merch/payment/loli-kiri.svg" alt="Loli Kiri" className='sm:w-1/2 md:w-3/5'/>
          </div>
          
          <div className='w-full relative flex items-center justify-center mt-[10vh] mb-[30vh] sm:mt-[10vh] sm:mb-[35vh] z-10'>
            <div className='w-4/5 sm:w-3/5 h-fit bg-[#C8E3F6CC] backdrop-opacity-10 rounded-[25px] shadow-inner-custom flex flex-col text-product-color p-6 sm:p-8 font-black space-y-4'>
              <p className='text-2xl sm:text-4xl text-center italic'>Pembayaran</p>
              <div className='flex flex-col w-full space-y-4 text-black text-center items-center'>
                <div className='bg-white w-full md:w-[90%] lg:w-3/4 rounded-[19px] shadow-inner-custom p-3 '>
                  <p className='text-sm sm:text-lg'>BCA a/n Amanda Aisyah Dungga </p>
                  <p className='text-sm sm:text-lg'>No. Rekening: 7115319213</p>
                </div>
                <div className='bg-white w-full md:w-[90%] lg:w-3/4 rounded-[19px] shadow-inner-custom p-3 '>
                  <p className='text-sm sm:text-lg'>BCA a/n Amanda Aisyah Dungga</p>
                  <p className='text-sm sm:text-lg'>No. Rekening: 7115319213</p>
                </div>
                <div className='bg-white w-full md:w-[90%] lg:w-3/4 rounded-[19px] shadow-inner-custom p-3 '>
                  <p className='text-sm sm:text-lg'>BCA a/n Amanda Aisyah Dungga</p>
                  <p className='text-sm sm:text-lg'>No. Rekening: 7115319213</p>
                </div>
              </div>
              <p className='text-2xl sm:text-4xl text-center italic'>QRIS</p>
              <div className='relative w-full flex justify-center'>
                <div className='md:w-[90%] lg:w-3/4 bg-white flex justify-center items-center rounded-[19px] shadow-inner-custom p-4 sm:p-8'>
                  <img src="/merch/payment/qris.svg" alt="" className='w-4/5 md:w-3/4 lg:w-3/5 2xl:w-2/5'/>
                </div>
              </div>
              <p className='text-2xl sm:text-4xl text-center italic'>Total Harga</p>
              <div className='bg-white w-full md:w-[90%] lg:w-3/4 rounded-[19px] shadow-inner-custom py-3 px-6 flex self-center'>
                <p className='sm:text-2xl text-black'>Total Harga: Rp {(merchValues.hargaOngkir + merchValues.totalHargaProduk + (merchValues.extraBubbleWrap ? 5000 : 0)).toLocaleString('id-ID')}</p>
              </div>


              <p className='text-2xl sm:text-4xl text-center italic'>Bukti Pembayaran</p>
              <div className='flex justify-center w-full md:w-[90%] lg:w-3/4 space-y-4 h-[30px] sm:h-[60px] text-2xl self-center z-30'>
                <label
                  htmlFor="file-input"
                  className={`bg-white w-full h-full rounded-[15px] sm:rounded-[19px] shadow-inner-custom flex justify-center items-center cursor-pointer ${fileError ? 'text-red-500' : 'text-gray-500'}`}
                >
                  <span>
                    {selectedFileBayar ? selectedFileBayar.name : (fileError || "Input File Here")}
                  </span>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className='hidden'
                    id='file-input'
                    accept="image/*"
                  />
                </label>
              </div>
              <div className='flex relative w-full justify-center items-center z-30'>
                <button
                  className='bg-[#FBB3D7] text-black sm:text-xl drop-shadow-md rounded-[37px] hover:scale-110 transition ease-in-out px-4 py-2'
                  onClick={handleSubmit}
                >
                  Kirim Bukti Bayar
                </button>
              </div>
            </div>
          </div>

          <div className='flex absolute bottom-0 invisible sm:visible z-20'>
            <img src="/merch/payment/ito-1.svg" alt="Ito" className='w-1/2 md:w-3/5'/>
          </div>
          <div className='flex absolute bottom-0 right-0 justify-end invisible sm:visible z-20'>
            <img src="/merch/payment/ivy-1.svg" alt="Ivy" className='w-1/2 md:w-3/5'/>
          </div>

          <div className='flex absolute bottom-0 sm:invisible z-10'>
            <img src="/merch/payment/mobile/ito-1.svg" alt="Ito" className='w-4/5'/>
          </div>
          <div className='flex absolute bottom-0 right-0 justify-end sm:invisible z-10'>
            <img src="/merch/payment/mobile/ivy-1.svg" alt="Ivy" className='w-4/5'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage