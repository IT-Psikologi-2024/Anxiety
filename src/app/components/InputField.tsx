'use client'
import React, { useState } from 'react';

interface InputFieldProps {
  label: string;
  type?: string;
  id: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type = 'text', id }) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return (
    <div className="flex flex-col mb-4 w-full max-w-xs gap-y-2 z-10">
      <label htmlFor={id} className="text-black text-xl font-bold">{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={handleChange}
        className="rounded-[20px] h-12 border border-gray-300 p-2 px-4"
      />
    </div>
  );
}

export default InputField;
