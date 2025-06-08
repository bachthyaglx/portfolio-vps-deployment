import React from 'react';
import { SelectFieldProps } from '../interface/SelectField.interface';

export default function SelectField({
  name, value, onChange, required, options, label,
}: SelectFieldProps) {
  return (
    <select
      name={name}
      value={value || ''}
      onChange={onChange}
      className="w-full border px-3 py-2 rounded text-black"
      required={required}
    >
      <option value="">-- Select {label} --</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}