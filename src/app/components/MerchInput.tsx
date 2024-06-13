import React from 'react';

interface MerchInputProps {
  label: string;
  type?: string;
  id: string;
  value: string;
  onChange: (id: string, value: string) => void;
  error?: string;
  className?:string;
}

const MerchInput: React.FC<MerchInputProps> = ({ label, type = 'text', id, value, onChange, error, className = 'h-[115px]'}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(id, e.target.value);
  };

  return (
    <div className="flex flex-col mb-4 w-full gap-y-2 z-10">
        <div>
            <label htmlFor={id} className="ml-3 text-3xl font-black text-product-color">{label}</label>
            {label === 'Alamat Lengkap' && <p className='ml-3 font-black text-product-color'>*Sertakan Nama Jalan, Nomor Rumah, Kelurahan dan Kecamatan</p>}
        </div>
        <input
            type={type}
            id={id}
            value={value}
            onChange={handleChange}
            className={`rounded-[19px] ${className} border shadow-inner-custom p-2 px-4 text-5xl`}
            required
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
};

export default MerchInput;