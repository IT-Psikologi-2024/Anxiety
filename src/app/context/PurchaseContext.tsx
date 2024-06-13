'use client'
import React, { createContext, useContext, useState } from 'react';

interface FormValues {
  jenisTiket: string;
  idLine: string;
  namaLengkap: string;
  noTelp: string;
  email: string;
  asalSekolah: string;
}

interface FormContextProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  formValues: FormValues;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
  checkedItems: { [key: string]: number };
  setCheckedItems: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>;
  selectedFileInsta: File | null;
  setSelectedFileInsta: React.Dispatch<React.SetStateAction<File | null>>;
  errorMessageInsta: string;
  setErrorMessageInsta: React.Dispatch<React.SetStateAction<string>>;
  selectedFileBayar: File | null;
  setSelectedFileBayar: React.Dispatch<React.SetStateAction<File | null>>;
  errorMessageBayar: string;
  setErrorMessageBayar: React.Dispatch<React.SetStateAction<string>>;
}

const FormContext = createContext({} as FormContextProps);
  
export const useFormContext = () => useContext(FormContext)

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formValues, setFormValues] = useState<FormValues>({
    jenisTiket: '',
    idLine: '',
    namaLengkap: '',
    noTelp: '',
    email: '',
    asalSekolah: '',
  });
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: number }>({});
  const [selectedFileInsta, setSelectedFileInsta] = useState<File | null>(null);
  const [errorMessageInsta, setErrorMessageInsta] = useState<string>('');
  const [selectedFileBayar, setSelectedFileBayar] = useState<File | null>(null);
  const [errorMessageBayar, setErrorMessageBayar] = useState<string>('');

  return (
    <FormContext.Provider value={{
      currentPage, setCurrentPage,
      formValues, setFormValues,
      checkedItems, setCheckedItems,
      selectedFileInsta, setSelectedFileInsta,
      errorMessageInsta, setErrorMessageInsta,
      selectedFileBayar, setSelectedFileBayar,
      errorMessageBayar, setErrorMessageBayar
    }}>
      {children}
    </FormContext.Provider>
  );
};