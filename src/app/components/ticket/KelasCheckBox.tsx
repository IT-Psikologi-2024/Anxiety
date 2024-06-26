import React, { useState } from 'react';

interface CustomCheckboxProps {
  label: string;
  id: string;
  onChange: (id: string, isChecked: boolean) => void;
  checkedOrder: number | null;
  className?: string
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ label, id, onChange, checkedOrder, className }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(id, e.target.checked);
  };
  return (
    <div className={`${className}`}>
        <div className={`flex items-center mb-4 bg-white h-fit rounded-[20px] px-4 `}>
        <label htmlFor={id} className="flex items-center space-x-4 cursor-pointer z-10 p-2 sm:p-4">
            <input
            type="checkbox"
            id={id}
            onChange={handleChange}
            className="hidden"
            />
            <div className={`relative flex items-center justify-center w-7 h-7 md:w-10 md:h-10 border border-gray-300 rounded bg-gray-300`}>
            {checkedOrder !== null && (
                <span className="absolute text-black font-bold">{checkedOrder}</span>
            )}
            </div>
            <span className="text-black text-md sm:text-lg md:text-xl font-bold">{label}</span>
        </label>
        </div>
    </div>
  );
};

export default CustomCheckbox;