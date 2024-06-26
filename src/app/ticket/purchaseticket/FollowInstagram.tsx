import React from 'react';
import { useFormContext } from '../../context/PurchaseContext';

const FollowInstagram: React.FC = () => {
  const { selectedFileInsta, setSelectedFileInsta, errorMessageInsta, setErrorMessageInsta } = useFormContext();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file.type.startsWith('image/')) {
        setSelectedFileInsta(file);
        setErrorMessageInsta('');
      } else {
        setErrorMessageInsta('Please select a valid image file.');
      }
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='flex relative justify-center w-full top-[5vh] sm:top-[14vh] md:top-[12vh] lg:top-[15vh] xl:top-[15vh]'>
        <img src="/ticket/followinstagram/follow-instagram-text.svg" alt="Follow Instagram Text" className='sm:visible invisible absolute sm:static' />
        <img src="/ticket/followinstagram/mobile/follow-instagram-text.svg" alt="Follow Instagram Text" className='sm:absolute visible sm:invisible' />
      </div>

      <div className='flex relative top-[10vh] sm:top-[25vh] md:top-[17vh] lg:top-[20vh] xl:top-[20vh] justify-center'>
        <div className='w-fit h-fit bg-[#FBB3D7] rounded-[20px] px-4 py-8 sm:px-8 sm:py-16'>
            <div className='flex flex-col items-center justify-center h-full'>
                <div className='flex space-x-8 items-center z-10'>
              <input 
                type="file" 
                onChange={handleFileChange} 
                className='hidden' 
                id='file-input'
                accept="image/*"  // Accept only image files
              />
              <label htmlFor='file-input' className='cursor-pointer mb-4'>
                <div className='w-[100px] h-[100px] bg-white rounded-[20px] flex items-center justify-center'>
                  {selectedFileInsta ? (
                    <span className='text-9xl text-[#FBB3D7]'>&#10003;</span> // Checkmark symbol
                  ) : (
                    <span className='text-9xl text-[#FBB3D7]'>+</span>
                  )}
                </div>
              </label>
              <label htmlFor='file-input' className='block text-xl sm:text-4xl font-medium mb-2 max-w-xs'>
                Upload Bukti Follow Instagram @itp_psikoui
              </label>
            </div>
            {selectedFileInsta && (
              <div className='mt-4 text-base sm:text-xl text-gray-700 text-center'>
                Selected file: {selectedFileInsta.name}
              </div>
            )}
            {errorMessageInsta && (
              <div className='mt-2 text-base sm:text-xl text-red-500 text-center'>
                {errorMessageInsta}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowInstagram;