'use client'
import React from 'react';

interface InputFieldProps {
  label: string;
  type?: string;
  id: string;
  value: string;
  onChange: (id: string, value: string) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type = 'text', id, value, onChange, error }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(id, e.target.value);
  };

  return (
    <div className="flex flex-col mb-4 w-full max-w-xs gap-y-2 z-10">
      <label htmlFor={id} className="text-black text-xl font-bold">{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={handleChange}
        className="rounded-[20px] h-12 border border-gray-300 p-2 px-4"
        required
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
};

export default InputField;