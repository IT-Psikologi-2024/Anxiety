import React from 'react';
import { MerchProvider } from '../context/MerchContext';
import MerchandisePage from './MerchOrder';

const MerchandiseProviderWrapper: React.FC = () => {
  return (
    <MerchProvider>
      <MerchandisePage />
    </MerchProvider>
  );
};

export default MerchandiseProviderWrapper;