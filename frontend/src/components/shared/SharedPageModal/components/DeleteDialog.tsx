'use client';

import React from 'react';
import { DeleteDialogProps } from '../interface/DeleteDialog.interface';

export default function DeleteDialog({ isOpen, onClose, onConfirm }: DeleteDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 centered-flex">
      <div className="bg-white text-black rounded-lg shadow-lg p-6">
        <p className="mb-4">Are you sure you want to delete this item?</p>
        <div className="flex justify-end gap-4">
          <button onClick={onClose} className="text-gray-600 hover:underline">
            No
          </button>
          <button onClick={onConfirm} className="text-red-600 hover:underline">
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
