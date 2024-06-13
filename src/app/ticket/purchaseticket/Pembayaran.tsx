import React from 'react';

const Pembayaran: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex relative md:-top-6 2xl:top-[5vh] justify-center'>
        <img src="/ticket/pembayaran/pembayaran-text.svg" alt="Pembayaran Text" />
      </div>

      <div className='flex relative justify-center md:-top-6 2xl:top-[5vh]'>
        <div className='min-w-fit max-w-[832px] max-h-[905px] w-[368px] h-[500px] sm:h-[750px] xl:h-[850px] 2xl:h-[905px] sm:w-[500px] md:w-auto lg:w-[600px] xl:w-[800px] bg-[#FBB3D7] rounded-[20px] p-8 space-y-4'>
            <div className='w-full bg-white h-[15%] sm:h-[12.5%] rounded-[20px] text-normal sm:text-2xl md:text-3xl xl:text-4xl font-black p-4'>
                <p>
                    BCA a/n Amanda Aisyah Dungga
                </p>
                <p>
                    No. Rekening: 7115319213
                </p>
            </div>
            <div className='w-full bg-white h-[15%] sm:h-[12.5%] rounded-[20px] text-normal sm:text-2xl md:text-3xl xl:text-4xl font-black p-4'>
                <p>
                    BNI a/n Jennifer Alextin Unggul
                </p>
                <p>
                    No. Rekening: 2977888896
                </p>
            </div>
            <div className='w-full bg-white h-[65%] sm:h-[70%] rounded-[20px]'>

            </div>
        </div>
      </div>

    </div>
  );
};

export default Pembayaran;
