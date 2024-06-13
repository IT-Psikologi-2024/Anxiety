import React from 'react';
import { FormProvider } from '../../context/PurchaseContext';
import FormProcess from './FormProcess';

const FormProviderWrapper: React.FC = () => {
  return (
    <FormProvider>
      <FormProcess />
    </FormProvider>
  );
};

export default FormProviderWrapper;