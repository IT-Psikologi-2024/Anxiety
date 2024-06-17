'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

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
}

interface MerchProviderProps {
  children: ReactNode;
}

const MerchContext = createContext({} as MerchContextType );
  
export const useMerchContext = () => useContext(MerchContext)

export const MerchProvider: React.FC<MerchProviderProps> = ({ children }) => {
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

  console.log(merchValues)

  return (
    <MerchContext.Provider value={{ merchValues, setMerchValues }}>
      {children}
    </MerchContext.Provider>
  );
};