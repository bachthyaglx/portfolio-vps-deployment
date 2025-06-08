import React from 'react';
import { FormActionsProps } from '../interface/FormActions.interface';

export default function FormActions({ onClose, isEdit }: FormActionsProps) {
  return (
    <div className="flex justify-end gap-4 mt-6">
      <button type="button" onClick={onClose} className="text-gray-600 hover:underline">
        Cancel
      </button>
      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        {isEdit ? 'Update' : 'Submit'}
      </button>
    </div>
  );
}