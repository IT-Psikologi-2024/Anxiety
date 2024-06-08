// /app/form-ticket/page.tsx

'use client'
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import NextButton from '../../components/NextButton';
import BackButton from '../../components/BackButton';
import PsyTag from '../../components/PsyTag';
import PurchaseTicketBackground from '../../components/PurchaseTicketBackground';
import FormTicket from './FormTicket';
import PilihanKelas from './PilihanKelas';
import FollowInstagram from './FollowInstagram';
import Pembayaran from './Pembayaran';
import UploadBuktiPembayaran from './UploadBuktiPembayaran';
import TerimaKasih from './TerimaKasih';
import { useRouter } from 'next/navigation';

const FormProcess: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const route = useRouter();

  const handleNextClick = () => {
    if (currentPage < 6) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleBackClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      route.back();
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <FormTicket />;
      case 2:
        return <PilihanKelas />;
      case 3:
        return <FollowInstagram />;
      case 4:
        return <Pembayaran />;
      case 5:
        return <UploadBuktiPembayaran />;
      case 6:
        return <TerimaKasih />;
      default:
        return <FormTicket />;
    }
  };

  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='relative min-h-[1325px] sm:min-h-[1219px] h-full flex flex-col overflow-hidden'>
        <PurchaseTicketBackground />
        <div className='flex flex-col flex-grow'>
          {renderPage()}
          <div className='absolute flex w-full invisible sm:visible justify-center top-[9rem] gap-x-4'>
            <BackButton onBack={handleBackClick} />
            {currentPage < 6 && <NextButton handleClick={handleNextClick} />}
            {currentPage === 6 && <NextButton handleClick={() => { /* Submit form data */ }} />}
          </div>
          <div className='relative flex w-full justify-center top-[7rem] gap-x-4'>
            <BackButton onBack={handleBackClick} />
            {currentPage < 6 && <NextButton handleClick={handleNextClick} />}
            {currentPage === 6 && <NextButton handleClick={() => { /* Submit form data */ }} />}
          </div>
          <div className='absolute flex w-4/5 md:justify-between invisible sm:visible sm:left-[-10rem] md:left-0 bottom-0 lg:bottom-[-2rem] xl:bottom-0 md:bottom-0 sm:w-4/5 xl:w-full'>
            <img src="/ticket/ito-1.svg" alt="Ito Img" className='sm:-ml-[5rem] md:-ml-[12rem] lg:-ml-[6rem] xl:-ml-[8rem] 2xl:ml-0'/>
            <img src="/ticket/ita-1.svg" alt="Ita Img" className='md:-ml-[4rem] lg:ml-[5rem] xl:-mr-[8rem] 2xl:mr-0'/>
          </div>
          <div className='absolute flex w-full bottom-[4vh] sm:invisible visible right-4'>
            <img src="/ticket/mobile/ito-1.svg" alt="Ito Img" className=''/>
            <img src="/ticket/mobile/ita-1.svg" alt="Ita Img" className=''/>
          </div>
          <PsyTag />
        </div>
      </div>
    </div>
  );
}

export default FormProcess;
