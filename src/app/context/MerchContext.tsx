'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
  image: string;
  harga: number;
  nama: string;
  description: string;
  jumlah: number;
}

interface Bundle {
  image: string;
  harga: number;
  nama: string;
  description: string;
  jumlah: number;
}

interface MerchValuesType {
  namaLengkap: string;
  noTelp: string;
  idLine: string;
  alamatLengkap: string;
  kodePos: string;
  cart: {
    products: Product[];
    bundles: Bundle[];
  };
  notePemesanan: string;
}

interface MerchContextType {
  merchValues: MerchValuesType;
  setMerchValues: React.Dispatch<React.SetStateAction<MerchValuesType>>;
}

interface MerchProviderProps {
  children: ReactNode;
}

const MerchContext = createContext<MerchContextType | undefined>(undefined);

export const MerchProvider: React.FC<MerchProviderProps> = ({ children }) => {
  const [merchValues, setMerchValues] = useState<MerchValuesType>({
    namaLengkap: '',
    noTelp: '',
    idLine: '',
    alamatLengkap: '',
    kodePos: '',
    cart: {
      products: [],
      bundles: []
    },
    notePemesanan: ''
  });

  return (
    <MerchContext.Provider value={{ merchValues, setMerchValues }}>
      {children}
    </MerchContext.Provider>
  );
};

export const useMerchContext = (): MerchContextType => {
  const context = useContext(MerchContext);
  if (!context) {
    throw new Error('useMerchContext must be used within a MerchProvider');
  }
  return context;
};