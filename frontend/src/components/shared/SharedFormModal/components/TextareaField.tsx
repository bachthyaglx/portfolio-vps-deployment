import React from 'react';
import { TextareaFieldProps } from '../interface/TextareaField.interface';

export default function TextareaField({
  name, value, onChange, placeholder, required,
}: TextareaFieldProps) {
  return (
    <textarea
      name={name}
      value={value || ''}
      onChange={onChange}
      className="w-full border px-3 py-2 rounded text-black min-h-[150px]"
      placeholder={placeholder}
      required={required}
    />
  );
}