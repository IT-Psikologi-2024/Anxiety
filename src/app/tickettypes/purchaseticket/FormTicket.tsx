import React from 'react';
import InputField from '../../components/InputField';

const FormTicket: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex relative justify-center w-full top-[6vh] sm:top-[14vh] md:top-[12vh] lg:top-[15vh] xl:top-[20vh]'>
        <img src="/ticket/data-diri.svg" alt="Data Diri IMG" className='w-3/5 sm:w-auto' />
      </div>

      <div className='flex relative top-[9vh] sm:top-[20vh] md:top-[18vh] lg:top-[20vh] xl:top-[25vh] justify-center'>
        <div className='min-w-fit max-w-[832px] w-[368px] sm:w-auto lg:w-[600px] xl:w-[800px] lg:h-[500px] bg-[#FBB3D7] rounded-[20px] p-8'>
          <div className='grid sm:grid-cols-2 gap-x-10 gap-y-4 h-full mt-10'>
            <InputField label="Jenis Tiket:" id="jenis-tiket" />
            <InputField label="ID Line:" id="id-line" />
            <InputField label="Nama Lengkap:" id="nama-lengkap" />
            <InputField label="No. Telp:" id="no-telp" />
            <InputField label="Email:" id="email" type="email" />
            <InputField label="Asal Sekolah:" id="asal-sekolah" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormTicket;