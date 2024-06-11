import React, { useState, useImperativeHandle, forwardRef } from 'react';
import InputField from '../../components/InputField';
import { useFormContext } from './context/PurchaseContext';

interface FormTicketHandles {
  validate: () => boolean;
}

const FormTicket = forwardRef<FormTicketHandles>((_, ref) => {
  const { formValues, setFormValues } = useFormContext();
  const [errors, setErrors] = useState({
    jenisTiket: '',
    idLine: '',
    namaLengkap: '',
    noTelp: '',
    email: '',
    asalSekolah: '',
  });

  useImperativeHandle(ref, () => ({
    validate: () => {
      const newErrors = {
        jenisTiket: '',
        idLine: '',
        namaLengkap: '',
        noTelp: '',
        email: '',
        asalSekolah: '',
      };

      if (!formValues.jenisTiket) {
        newErrors.jenisTiket = 'Jenis Tiket is required';
      } else if (formValues.jenisTiket !== 'Presale' && formValues.jenisTiket !== 'Presale Roadshow') {
        newErrors.jenisTiket = 'Jenis Tiket must be either "Presale" or "Presale Roadshow"';
      }

      newErrors.idLine = formValues.idLine ? '' : 'ID Line is required';
      newErrors.namaLengkap = formValues.namaLengkap ? '' : 'Nama Lengkap is required';
      newErrors.noTelp = formValues.noTelp ? '' : 'No. Telp is required';
      newErrors.asalSekolah = formValues.asalSekolah ? '' : 'Asal Sekolah is required';

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      newErrors.email = emailRegex.test(formValues.email) ? '' : 'Please enter a valid email address';

      const indonesianPhoneRegex = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;
      newErrors.noTelp = indonesianPhoneRegex.test(formValues.noTelp) ? '' : 'Please enter a valid phone number';

      setErrors(newErrors);

      return !Object.values(newErrors).some(error => error);
    }
  }));

  const handleInputChange = (id: string, value: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: '',
    }));
  };

  return (
    <div className='flex flex-col'>
      <div className='flex relative justify-center w-full top-[6vh] sm:top-[14vh] md:top-[12vh] lg:top-[15vh] xl:top-[20vh]'>
        <img src="/ticket/form/data-diri.svg" alt="Data Diri Text" className='w-3/5 sm:w-auto' />
      </div>

      <div className='flex relative top-[9vh] sm:top-[20vh] md:top-[18vh] lg:top-[20vh] xl:top-[25vh] justify-center'>
        <div className='min-w-fit max-w-[832px] max-h-[840px] w-[368px] sm:w-auto lg:w-[600px] xl:w-[800px] lg:h-[500px] bg-[#FBB3D7] rounded-[20px] p-8'>
          <div className='grid sm:grid-cols-2 gap-x-10 gap-y-2 sm:gap-y-4 h-full sm:mt-10'>
            <InputField label="Jenis Tiket:" id="jenisTiket" value={formValues.jenisTiket} onChange={handleInputChange} error={errors.jenisTiket} />
            <InputField label="ID Line:" id="idLine" value={formValues.idLine} onChange={handleInputChange} error={errors.idLine} />
            <InputField label="Nama Lengkap:" id="namaLengkap" value={formValues.namaLengkap} onChange={handleInputChange} error={errors.namaLengkap} />
            <InputField label="No. Telp:" id="noTelp" value={formValues.noTelp} onChange={handleInputChange} error={errors.noTelp} />
            <InputField label="Email:" id="email" type="email" value={formValues.email} onChange={handleInputChange} error={errors.email} />
            <InputField label="Asal Sekolah:" id="asalSekolah" value={formValues.asalSekolah} onChange={handleInputChange} error={errors.asalSekolah} />
          </div>
        </div>
      </div>
    </div>
  );
});

FormTicket.displayName = 'FormTicket';

export default FormTicket;