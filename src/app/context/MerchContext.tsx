'use client';

import React, { createContext, useContext, useState } from 'react';

export interface Product {
  image: string;
  harga: number;
  nama: string;
  description: string;
  jumlah: number;
  isBaju: boolean;
  size: string;
  uniqueId?: string | undefined;
}

interface Province {
  province_id: string;
  province: string;
}

interface City {
  city_id: string;
  city_name: string;
}

interface MerchValuesType {
  namaLengkap: string;
  noTelp: string;
  idLine: string;
  alamatLengkap: string;
  kodePos: string;
  products: Product[];
  tanggalPengambilan: string; 
  notePemesanan: string;
  totalHargaProduk: number;
  provinsi: Province;
  kota: City;
  extraBubbleWrap: boolean;
  hargaOngkir: number;
  isBaju: boolean;
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
    provinsi: {
      province_id: '',
      province: '',
    },
    kota: {
      city_id: '',
      city_name: '',
    },
    tanggalPengambilan:'',
    extraBubbleWrap: false,
    hargaOngkir: 0,
    isBaju:false,
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