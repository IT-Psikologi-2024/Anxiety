import React from 'react';

const Pembayaran: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex relative justify-center'>
        <img src="/ticket/pembayaran/pembayaran-text.svg" alt="Pembayaran Text" />
      </div>

      <div className='flex relative justify-center'>
        <div className='min-w-fit max-w-[832px] w-[368px] h-fit sm:w-[500px] md:w-auto lg:w-[600px] xl:w-[800px] bg-[#FBB3D7] rounded-[20px] p-8 space-y-4'>
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
            <div className='w-full bg-white h-[1/2] rounded-[20px] flex justify-center p-4'>
              <img src="/ticket/pembayaran/qris-img.svg" alt="QRIS Image"  className='sm:h-full h-4/5'/>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Pembayaran;
