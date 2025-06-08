// src/components/shared/SharedLoginModal/SharedLoginModal.tsx
'use client';

import LoginForm from './components/LoginForm';
import { LoginModalProps } from './interface/LoginModal.interface';

export default function SharedLoginModal({ isOpen, onClose, onLoginSuccess }: LoginModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl font-bold" onClick={onClose}>
          &times;
        </button>
        <LoginForm onSuccess={() => {
          onClose();
          onLoginSuccess();
        }} />
      </div>
    </div>
  );
}