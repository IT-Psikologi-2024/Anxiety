import React from 'react';
import PsyTag from '@/app/components/ticket/PsyTag';

const TerimaKasih: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex relative top-[15vh] sm:top-[18vh] xl:top-[20vh] justify-center'>
        <div className='flex flex-col gap-y-8 max-w-[832px] w-fit lg:h-[600px] xl:h-[636px] bg-[#FBB3D7] rounded-[20px] p-8 justify-center items-center'>
          <div className='text-center text-lg sm:text-3xl'>
            <p className='text-shadow-white-outline'>Presale Khusus Roadshow</p>
            <p className='font-black text-shadow-white-outline'>12-23 Agustus 2024</p>
          </div>
          <div className='flex bg-white h-4/5 w-fit rounded-[20px] justify-center'>
            <img src="/ticket/terimakasih/terima-kasih-text.svg" alt="Terima Kasih Text" className='invisible sm:visible sm:static absolute'/>
            <img src="/ticket/terimakasih/mobile/terima-kasih-text.svg" alt="Terima Kasih Text" className='sm:invisible visible static sm:absolute '/>
          </div>
          <div className='text-center text-xl sm:text-4xl'>
            <p className='font-bold text-shadow-white-outline'>
              Tunggu Email dari kami untuk
            </p>
            <p className='font-bold text-shadow-white-outline'>
              mendapatkan informasi lebih lanjut, ya!
            </p>
          </div>
        </div>
      </div>
      <PsyTag />
    </div>
  );
};

export default TerimaKasih;
