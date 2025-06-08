import React from 'react';
import { InputFieldProps } from '../interface/InputField.interface';

export default function InputField({
  name, type, value, onChange, placeholder, required,
}: InputFieldProps) {
  return (
    <input
      name={name}
      type={type}
      value={value || ''}
      onChange={onChange}
      className="w-full border px-3 py-2 rounded text-black"
      placeholder={placeholder}
      required={required}
    />
  );
}