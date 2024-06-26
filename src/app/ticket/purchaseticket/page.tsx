'use client';
import React, { useRef, useState } from 'react';
import Navbar from '../../components/Navbar';
import NextButton from '../../components/ticket/NextButton';
import BackButton from '../../components/ticket/BackButton';
import PsyTag from '../../components/ticket/PsyTag';
import PurchaseTicketBackground from '../../components/ticket/PurchaseTicketBackground';
import FormTicket from './FormTicket';
import CheckboxGroup from './PilihanKelas';
import FollowInstagram from './FollowInstagram';
import Pembayaran from './Pembayaran';
import UploadBuktiPembayaran from './UploadBuktiPembayaran';
import TerimaKasih from './TerimaKasih';
import { useRouter } from 'next/navigation';
import { useFormContext } from '../../context/PurchaseContext';
import axios from 'axios';
import InstagramEmbed from '../../components/home/InstagramPost';

interface FormTicketHandles {
  validate: () => boolean;
}

interface CheckboxGroupHandles {
  validate: () => boolean;
}

const FormProcess: React.FC = () => {
  const router = useRouter();
  const formTicketRef = useRef<FormTicketHandles>(null);
  const pilihanKelasRef = useRef<CheckboxGroupHandles>(null);
  const [loading, setLoading] = useState(false);

  const labels = [
    { id: 'pendidikan', label: 'Psikologi Pendidikan' },
    { id: 'perkembangan', label: 'Psikologi Perkembangan' },
    { id: 'sosial', label: 'Psikologi Sosial' },
    { id: 'klinis', label: 'Psikologi Klinis' },
    { id: 'industri', label: 'Psikologi Industri Organisasi' },
    { id: 'kepribadian', label: 'Teori Kepribadian' },
  ];

  const { currentPage, setCurrentPage, formValues, checkedItems, selectedFileInsta, setErrorMessageInsta, selectedFileBayar, setErrorMessageBayar } = useFormContext();

  const handleNextClick = async () => {
    if (loading) return;

    if (currentPage === 1) {
      if (formTicketRef.current?.validate()) {
        setCurrentPage(currentPage + 1);
      }
    } else if (currentPage === 2) {
      if (pilihanKelasRef.current?.validate()) {
        setCurrentPage(currentPage + 1);
      }
    } else if (currentPage === 3) {
      if (selectedFileInsta) {
        setCurrentPage(currentPage + 1);
      } else {
        setErrorMessageInsta('Please select a file to upload.');
      }
    } else if (currentPage === 5) {
      if (selectedFileBayar) {
        setLoading(true);
        await handleSubmit();
        setLoading(false);
      } else {
        setErrorMessageBayar('Please select a file to upload.');
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
      router.back();
    }
  };

  const handleSubmit = async () => {
    const pilihanKelas = Object.keys(checkedItems)
      .sort((a, b) => checkedItems[a] - checkedItems[b])
      .map(id => {
        const label = labels.find(label => label.id === id)?.label;
        return label;
      });

    console.log(pilihanKelas)
    
    while (pilihanKelas.length < 3) {
    pilihanKelas.push("");
    }
      
    console.log(pilihanKelas)
    const formData = new FormData();
    formData.append('jenisTiket', formValues.jenisTiket);
    formData.append('idLine', formValues.idLine);
    formData.append('nama', formValues.namaLengkap);
    formData.append('noTelepon', formValues.noTelp);
    formData.append('email', formValues.email);
    formData.append('asalSekolah', formValues.asalSekolah);
    formData.append('pilihanKelas', JSON.stringify(pilihanKelas));
    formData.append('hadir', 'Tidak');

    if (selectedFileInsta) {
      formData.append('Files', selectedFileInsta);
    }

    if (selectedFileBayar) {
      formData.append('Files', selectedFileBayar);
    }

    try {
      const response = await axios.post('http://localhost:8000/ticket',formData , {});
      console.log(response.data)
      setCurrentPage(currentPage + 1);
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <FormTicket ref={formTicketRef} />;
      case 2:
        return <CheckboxGroup ref={pilihanKelasRef} labels={labels} />;
      case 3:
        return <FollowInstagram />;
      case 4:
        return <Pembayaran />;
      case 5:
        return <UploadBuktiPembayaran />;
      case 6:
        return <TerimaKasih />;
      default:
        return <FormTicket ref={formTicketRef} />;
    }
  };

  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className={`relative ${currentPage === 3 || currentPage === 5 || currentPage === 6 ? 'min-h-[880px] sm:min-h-[1219px]' : (currentPage === 4 ? 'min-h-[1500px] sm:min-h-[1642px]' : (currentPage === 2 ? 'min-h-[1378px] sm:min-h-[1219px]' : 'min-h-[1325px] sm:min-h-[1219px]'))}
          h-full flex flex-col overflow-hidden`}>
        <PurchaseTicketBackground currentPage={currentPage} />
        <div className='flex flex-col flex-grow'>
          {renderPage()}
          {currentPage !== 6 && (
            <>
              <div className='absolute flex w-full invisible sm:visible justify-center top-[9rem] gap-x-4'>
                <BackButton onBack={handleBackClick} />
                <NextButton handleClick={handleNextClick} disabled={loading} />
              </div>
              <div className={`relative flex w-full justify-center ${currentPage === 3 || currentPage === 5 ? 'top-[8rem]' : (currentPage === 4 || currentPage === 2 ? 'top-[2rem]' : 'top-[10rem]')} gap-x-4`}>
                <BackButton onBack={handleBackClick} />
                <NextButton handleClick={handleNextClick} disabled={loading} />
              </div>
            </>
          )}

          <div className={`${currentPage === 4 ? "relative" : "absolute"} flex sm:justify-between invisible sm:visible bottom-16 w-full -mb-12`}>
            <div className='w-1/2 flex items-end '>
              {currentPage <= 1 && <img src="/ticket/ito-1.svg" alt="Ito Img" className={`w-full xl:w-3/4`} />}
              {currentPage > 1 && <img src="/ticket/ito-2.svg" alt="Ito Img" className={`${currentPage === 2 ? 'w-1/2': (currentPage === 4 ? 'w-3/5' : ' w-3/4 lg:w-1/2')} `} />}
            </div>
            <div className='w-1/2 flex items-end justify-end'>
              {currentPage <= 1 && <img src="/ticket/ita-1.svg" alt="Ita Img" className={`w-full xl:w-3/4`} />}
              {currentPage > 1 && currentPage !== 4 && <img src="/ticket/ita-3.svg" alt="Ita Img" className={`${currentPage === 2 ? 'w-1/2': ' w-3/4 lg:w-1/2'}`} />}
              {currentPage === 4 && <img src="/ticket/ita-2.svg" alt="Ita Img" className='right-0' />}
            </div>
          </div>

          <div className={`justify-evenly flex w-full absolute ${currentPage === 4 ? 'bottom-0' : 'bottom-10'} sm:invisible visible right-4`}>
            <img src="/ticket/mobile/ito-1.svg" alt="Ito Img" className='' />
            <img src={`${currentPage === 4 ? "/ticket/mobile/ita-2.svg" : "/ticket/mobile/ita-1.svg"}`} alt="Ita Img" className={`${currentPage === 4 ? "-ml-[3.5rem]" : "-ml-8"}`} />
          </div>
          <PsyTag />
        </div>
      </div>
    </div>
  );
}

export default FormProcess;