import React from 'react';

interface RadioInputProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const RadioInput: React.FC<RadioInputProps> = ({ label, name, value, checked, onChange }) => {
  const handleChange = () => {
    onChange(value);
  };

  return (
    <div className="flex items-center mb-4">
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        className="mr-4 w-6 h-6 sm:w-8 sm:h-8"
      />
      <label htmlFor={value} className="text-xl sm:text-2xl md:text-3xl font-bold text-product-color">{label}</label>
    </div>
  );
};

export default RadioInput;
