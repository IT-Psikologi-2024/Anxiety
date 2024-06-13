import React from 'react';
import { MerchProvider } from '../../context/MerchContext';
import CheckOutPage from './MerchForm';

const MerchandiseProviderWrapper: React.FC = () => {
  return (
    <MerchProvider>
      <CheckOutPage />
    </MerchProvider>
  );
};

export default MerchandiseProviderWrapper;