'use client'
import React from 'react';
import BackButton from '@/app/components/BackButton';
import Navbar from '../../components/Navbar';
import TicketBackground from '../../components/PurchaseTicketBackground';
import NextButton from '../../components/NextButton';
import PsyTag from '../../components/PsyTag';
import InputField from '../../components/InputField';

const FormTicket: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='relative min-h-[1219px] h-full flex flex-col overflow-hidden'>
        <TicketBackground />
        <div className='flex flex-col flex-grow'>
          <BackButton />
          <div className='flex relative justify-center top-[30vh]'>
            <img src="/ticket/data-diri.svg" alt="Data Diri IMG" />
          </div>

          <div className='flex relative top-[35vh] justify-center'>
            <div className='min-w-fit max-w-[832px] max-h-[636px] w-[800px] h-[500px] bg-[#FBB3D7] rounded-[20px] p-8'>
              <div className='grid grid-cols-2 gap-x-10 gap-y-4 h-full mt-10'>
                <InputField label="Jenis Tiket:" id="jenis-tiket" />
                <InputField label="ID Line:" id="id-line" />
                <InputField label="Nama Lengkap:" id="nama-lengkap" />
                <InputField label="No. Telp:" id="no-telp" />
                <InputField label="Email:" id="email" type="email" />
                <InputField label="Asal Sekolah:" id="asal-sekolah" />
              </div>
            </div>
          </div>
          <div className='absolute flex w-full justify-between left-0 bottom-0'>
              <img src="/ticket/ito-1.svg" alt="Ita Img" className=''/>
              <img src="/ticket/ita-1.svg" alt="Ita Img" className=''/>
          </div>
          <NextButton />
          <PsyTag />
        </div>
      </div>
    </div>
  );
}

export default FormTicket;
