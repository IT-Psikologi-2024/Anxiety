import React from 'react';

interface MerchInputProps {
  label: string;
  type?: string;
  id: string;
  value: string;
  onChange: (id: string, value: string) => void;
  error?: string;
}

const MerchInput: React.FC<MerchInputProps> = ({
  label,
  type = 'text',
  id,
  value,
  onChange,
  error,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(id, e.target.value);
  };

  return (
    <div className="flex flex-col w-full gap-y-2 z-10">
      <div>
        <label htmlFor={id} className="ml-3 text-xl font-black text-product-color">{label}</label>
        {label === 'Alamat Lengkap' && <p className='ml-3 font-black text-product-color text-xs'>*Sertakan Nama Jalan, Nomor Rumah, Kelurahan, Kecamatan, dan Kode Pos</p>}
      </div>
      {type === 'textarea' ? (
        <textarea
          id={id}
          value={value}
          onChange={handleChange}
          className={`rounded-[19px] border shadow-inner-custom h-[80px] sm:h-[115px] p-4 px-4 text-xl sm:text-xl`}
          required
          rows={4}
        />
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={handleChange}
          className={`rounded-[19px] h-[40px] border shadow-inner-custom p-2 px-4 text-xl sm:text-xl`}
          required
        />
      )}
      {error && <div className="text-red-500 text-sm ml-3">{error}</div>}
    </div>
  );
};

export default MerchInput;
