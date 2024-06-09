'use client'
import React, { useState, useRef } from 'react';
import Navbar from '../../components/Navbar';
import NextButton from '../../components/NextButton';
import BackButton from '../../components/BackButton';
import PsyTag from '../../components/PsyTag';
import PurchaseTicketBackground from '../../components/PurchaseTicketBackground';
import FormTicket from './FormTicket';
import CheckboxGroup from './PilihanKelas';  // Make sure to import correctly
import FollowInstagram from './FollowInstagram';
import Pembayaran from './Pembayaran';
import UploadBuktiPembayaran from './UploadBuktiPembayaran';
import TerimaKasih from './TerimaKasih';
import { useRouter } from 'next/navigation';

interface FormTicketHandles {
  validate: () => boolean;
}

interface CheckboxGroupHandles {
  validate: () => boolean;
}

const FormProcess: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formValues, setFormValues] = useState({
    jenisTiket: '',
    idLine: '',
    namaLengkap: '',
    noTelp: '',
    email: '',
    asalSekolah: '',
  });
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: number }>({}); // State for checkboxes
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const route = useRouter();
  const formTicketRef = useRef<FormTicketHandles>(null);
  const pilihanKelasRef = useRef<CheckboxGroupHandles>(null);

  const handleNextClick = () => {
    console.log(`Current page: ${currentPage}`);
    if (currentPage === 1) {
      if (formTicketRef.current?.validate()) {
        console.log('FormTicket validation passed');
        setCurrentPage(currentPage + 1);
      } else {
        console.log('FormTicket validation failed');
      }
    } else if (currentPage === 2) {
      if (pilihanKelasRef.current?.validate()) {
        console.log('PilihanKelas validation passed');
        setCurrentPage(currentPage + 1);
      } else {
        console.log('PilihanKelas validation failed');
      }
    } else if (currentPage === 3) {
      if (selectedFile) {
        console.log('File is selected, proceeding to next page');
        setCurrentPage(currentPage + 1);
      } else {
        setErrorMessage('Please select a file to upload.');
      }
    } else {
      if (currentPage < 6) {
        setCurrentPage(currentPage + 1);
      }
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
        return <FormTicket ref={formTicketRef} formValues={formValues} setFormValues={setFormValues} />;
      case 2:
        return <CheckboxGroup ref={pilihanKelasRef} labels={[
          { id: 'pendidikan', label: 'Psikologi Pendidikan' },
          { id: 'perkembangan', label: 'Psikologi Perkembangan' },
          { id: 'sosial', label: 'Psikologi Sosial' },
          { id: 'klinis', label: 'Psikologi Klinis' },
          { id: 'industri', label: 'Psikologi Industri Organisasi' },
        ]} checkedItems={checkedItems} setCheckedItems={setCheckedItems} />; // Pass the state and setter
      case 3:
        return <FollowInstagram 
          selectedFile={selectedFile} 
          setSelectedFile={setSelectedFile} 
          errorMessage={errorMessage} 
          setErrorMessage={setErrorMessage} 
        />;
      case 4:
        return <Pembayaran />;
      case 5:
        return <UploadBuktiPembayaran />;
      case 6:
        return <TerimaKasih />;
      default:
        return <FormTicket ref={formTicketRef} formValues={formValues} setFormValues={setFormValues} />;
    }
  };

  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className={`relative ${currentPage === 3 || currentPage === 5 || currentPage === 6 ? 'min-h-[880px] sm:min-h-[1219px]' : 'min-h-[1325px] sm:min-h-[1219px]'} h-full flex flex-col overflow-hidden`}>
        <PurchaseTicketBackground currentPage={currentPage} />
        <div className='flex flex-col flex-grow'>
          {renderPage()}
          <div className='absolute flex w-full invisible sm:visible justify-center top-[9rem] gap-x-4'>
            <BackButton onBack={handleBackClick} />
            {currentPage < 6 && <NextButton handleClick={handleNextClick} />}
            {currentPage === 6 && <NextButton handleClick={() => {}} />}
          </div>
          <div className={`relative flex w-full justify-center ${currentPage === 3 || currentPage === 5 || currentPage === 6 ? 'top-[8rem]' : 'top-[10rem]'} gap-x-4`}>
            <BackButton onBack={handleBackClick} />
            {currentPage < 6 && <NextButton handleClick={handleNextClick} />}
            {currentPage === 6 && <NextButton handleClick={() => {}} />}
          </div>

          <div className='absolute flex w-4/5 md:justify-between invisible sm:visible sm:left-[-10rem] md:left-0 bottom-0 lg:bottom-[-2rem] xl:bottom-0 md:bottom-0 sm:w-4/5 xl:w-full'>
            {currentPage <= 2 && <img src="/ticket/ito-1.svg" alt="Ito Img" className='sm:-ml-[5rem] md:-ml-[12rem] lg:-ml-[6rem] xl:-ml-[8rem] 2xl:ml-0'/>}
            {currentPage > 2 && <img src="/ticket/ito-1.svg" alt="Ito Img" className='sm:-ml-[5rem] md:-ml-[12rem] lg:-ml-[4rem] xl:-ml-[8rem] 2xl:ml-0 rotate-15.60'/>}
            {currentPage <= 2 && <img src="/ticket/ita-1.svg" alt="Ita Img" className='md:-ml-[4rem] lg:ml-[5rem] xl:-mr-[8rem] 2xl:mr-0'/>}
            {currentPage > 2 && <img src="/ticket/ita-1.svg" alt="Ita Img" className='md:-ml-[4rem] lg:ml-8 xl:-mr-[8rem] 2xl:mr-0 -rotate-11.34'/>}
          </div>
          
          <div className='absolute flex w-full bottom-0 sm:invisible visible right-4'>
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
