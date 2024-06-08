import React from 'react';

const UploadBuktiPembayaran: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <div className='max-w-md w-full bg-white rounded-lg shadow-md p-8 z-10'>
        <h2 className='text-2xl font-bold mb-4'>Upload Bukti Pembayaran</h2>
        <p className='mb-4'>Please upload your payment receipt.</p>
      </div>
    </div>
  );
};

export default UploadBuktiPembayaran;
