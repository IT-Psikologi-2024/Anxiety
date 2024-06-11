import React from 'react';
import { useFormContext } from './context/PurchaseContext';

const UploadBuktiPembayaran: React.FC = () => {
    const { selectedFileBayar, setSelectedFileBayar, errorMessageBayar, setErrorMessageBayar } = useFormContext();
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
          const file = event.target.files[0];
          if (file.type.startsWith('image/')) {
            setSelectedFileBayar(file);
            setErrorMessageBayar(''); 
          } else {
            setErrorMessageBayar('Please select a valid image file.');
          }
        }
      };
  return (
    <div className='flex flex-col'>
      <div className='flex relative justify-center w-full top-[5vh] sm:top-[14vh] md:top-[12vh] lg:top-[15vh] xl:top-[15vh]'>
        <img src="/ticket/uploadbukti/upload-text.svg" alt="Last Step Text" className='sm:visible invisible absolute sm:static'/>
        <img src="/ticket/uploadbukti/mobile/upload-text.svg" alt="Follow Instagram Text" className='sm:absolute visible sm:invisible'/>
      </div>

      <div className='flex relative top-[10vh] sm:top-[25vh] md:top-[17vh] lg:top-[20vh] xl:top-[20vh] justify-center'>
        <div className='max-w-[520px] max-h-[280px] w-[368px] sm:w-auto lg:w-[600px] xl:w-[800px] lg:h-[500px] bg-[#FBB3D7] rounded-[20px] p-8'>
          <div className='flex flex-col items-center justify-center h-full'>
            <div className='flex space-x-8 items-center z-10'>
              <input 
                type="file" 
                onChange={handleFileChange} 
                className='hidden' 
                id='file-input'
                accept="image/*"  // Accept only image files
              />
              <label htmlFor='file-input' className='cursor-pointer'>
                <div className='w-[100px] h-[100px] bg-white rounded-[20px] flex items-center justify-center'>
                  {selectedFileBayar ? (
                    <span className='text-9xl text-[#FBB3D7]'>&#10003;</span> // Checkmark symbol
                  ) : (
                    <span className='text-9xl text-[#FBB3D7]'>+</span>
                  )}
                </div>
              </label>
              <label className='block text-lg sm:text-2xl md:text-4xl font-medium mb-2'>
              Upload Bukti Transfer atau Pembayaran
              </label>
            </div>
            {selectedFileBayar && (
              <div className='mt-4 text-base sm:text-xl text-gray-700 text-center'>
                Selected file: {selectedFileBayar.name}
              </div>
            )}
            {errorMessageBayar && (
              <div className='mt-2 text-base sm:text-xl text-red-500 text-center'>
                {errorMessageBayar}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadBuktiPembayaran;