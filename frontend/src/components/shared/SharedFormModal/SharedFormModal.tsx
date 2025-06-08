// ./src/components/shared/SharedFormModal/SharedFormModal.tsx
'use client';

import Form from './components/Form';
import { SharedFormModalProps } from './interface/SharedFormModal.interface';

const SharedFormModal = ({
  isOpen,
  onClose,
  editItem,
  formTitle,
  formFields,
  fileFields,
  createMutation,
  editMutation,
  uploadFileMutation,
  deleteFileMutation,
  refetch,
}: SharedFormModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-70 centered-flex"
      onClick={onClose}
    >
      <div
        className="bg-white text-black rounded-lg shadow-xl max-w-2xl w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {editItem ? formTitle?.edit : formTitle?.add}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-600 text-lg font-bold"
          >
            &times;
          </button>
        </div>
        <Form
          isOpen={true}
          onClose={onClose}
          onSuccess={() => {
            onClose();
            refetch();
          }}
          initialData={editItem}
          fields={formFields}
          fileFields={fileFields}
          createMutation={createMutation}
          editMutation={editMutation}
          uploadFileMutation={uploadFileMutation}
          deleteFileMutation={deleteFileMutation}
        />
      </div>
    </div>
  );
};

export default SharedFormModal;
