'use client';

import React, { createContext, useContext, useState } from 'react';

interface Product {
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
  products: Product[];
  notePemesanan: string;
  totalHargaProduk: number;
  provinsi: string;
  kota: string;
  extraBubbleWrap: boolean;
}

interface MerchContextType {
  merchValues: MerchValuesType;
  setMerchValues: React.Dispatch<React.SetStateAction<MerchValuesType>>;
  selectedFileBayar: File | null;
  setSelectedFileBayar: React.Dispatch<React.SetStateAction<File | null>>;
  errorMessageBayar: string;
  setErrorMessageBayar: React.Dispatch<React.SetStateAction<string>>;
}

const MerchContext = createContext({} as MerchContextType );
  
export const useMerchContext = () => useContext(MerchContext)

export const MerchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [merchValues, setMerchValues] = useState<MerchValuesType>({
    namaLengkap: '',
    noTelp: '',
    idLine: '',
    alamatLengkap: '',
    kodePos: '',
    products: [],
    notePemesanan: '',
    totalHargaProduk: 0,
    provinsi:'',
    kota: '',
    extraBubbleWrap: false,
  });
  const [selectedFileBayar, setSelectedFileBayar] = useState<File | null>(null);
  const [errorMessageBayar, setErrorMessageBayar] = useState<string>('');

  return (
    <MerchContext.Provider value={{ 
      merchValues, setMerchValues, 
      selectedFileBayar, setSelectedFileBayar, 
      errorMessageBayar, setErrorMessageBayar
      }}>
      {children}
    </MerchContext.Provider>
  );
};