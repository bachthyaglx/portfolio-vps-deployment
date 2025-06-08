// ./src/components/shared/SharePageModal.tsx
'use client';

import { useQuery, useMutation } from '@apollo/client';
import { useIsLoggedIn } from '@/hooks/useIsLoggedIn';
import { useState } from 'react';
import LoginModal from '@/components/shared/SharedLoginModal/SharedLoginModal';
import DateDisplay from './components/DateDisplay';
import ProgramAndFileLinks from './components/ProgramAndFileLinks';
import DescriptionBlock from './components/DescriptionBlock';
import SkillsBlock from './components/SkillsBlock';
import ImagesBlock from './components/ImagesBlock';
import DeleteDialog from './components/DeleteDialog';
import SharedFormModal from '../SharedFormModal/SharedFormModal';
import { SharedPageModalProps } from '../SharedPageModal/interface/SharedPageModal.interface'

export default function SharedPageModal({
  pageTitle,
  query,
  deleteMutation,
  dataKey,
  textFields,
  fileFields = [],
  formFields,
  formTitle,
  createMutation,
  editMutation,
  uploadFileMutation,
  deleteFileMutation,
}: SharedPageModalProps) {
  const { data, loading, refetch } = useQuery(query, { fetchPolicy: 'cache-first' });
  const [deleteItem] = useMutation(deleteMutation);
  const isLoggedIn = useIsLoggedIn();

  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState<any>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    try {
      await deleteItem({ variables: { id } });
      setConfirmDelete(null);
      refetch();
    } catch (error) {
      console.error('Failed to delete item:', error);
      alert('Failed to delete item.');
    }
  };

  const items: any[] = (data?.[dataKey] || []).slice().sort((a: { [x: string]: any; }, b: { [x: string]: any; }) => {
    const aEnd = textFields.end ? new Date(a[textFields.end] || Date.now()) : new Date(0);
    const bEnd = textFields.end ? new Date(b[textFields.end] || Date.now()) : new Date(0);
    return bEnd.getTime() - aEnd.getTime();
  });

  return (
    <div className="page-container">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 pl-4">{pageTitle}</h1>
        {loading && <p className="pl-4">Loading...</p>}

        {items.map((item) => (
          <div key={item.id} className="group block rounded-lg p-4 card-hover">
            <div className="flex items-start gap-6">
              <DateDisplay item={item} textFields={textFields} />
              <div className="flex-1 w-full min-w-0 space-y-2">
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition">
                    {item[textFields.title]}{' '}
                    {textFields.subtitle && item[textFields.subtitle] && (
                      <span className="text-cyan-300">@ {item[textFields.subtitle]}</span>
                    )}
                  </h3>
                  {isLoggedIn && (
                    <div className="flex gap-3">
                      <button
                        className="text-xs text-yellow-400 hover:underline"
                        onClick={() => {
                          setEditItem(item);
                          setShowForm(true);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="text-xs text-red-400 hover:underline"
                        onClick={() => setConfirmDelete(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
                <ProgramAndFileLinks item={item} textFields={textFields} fileFields={fileFields} />
                <DescriptionBlock item={item} textFields={textFields} />
                <SkillsBlock item={item} textFields={textFields} />
                <ImagesBlock item={item} fileFields={fileFields} />
              </div>
            </div>
          </div>
        ))}

        {isLoggedIn && (
          <>
            <div className="centered-flex mt-6 pb-6">
              <button
                onClick={() => {
                  setShowForm(true);
                  setEditItem(null);
                }}
                className="text-cyan-400 hover:underline text-sm"
              >
                ➕ {formTitle?.add || 'Add item'}
              </button>
            </div>
            <SharedFormModal
              isOpen={showForm}
              onClose={() => setShowForm(false)}
              editItem={editItem}
              formTitle={formTitle}
              formFields={formFields}
              fileFields={fileFields}
              createMutation={createMutation}
              editMutation={editMutation}
              uploadFileMutation={uploadFileMutation}
              deleteFileMutation={deleteFileMutation}
              refetch={refetch}
            />
          </>
        )}

        <DeleteDialog
          isOpen={!!confirmDelete}
          onClose={() => setConfirmDelete(null)}
          onConfirm={() => confirmDelete && handleDelete(confirmDelete)}
        />

        <LoginModal
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onLoginSuccess={() => setShowLoginModal(false)}
        />
      </div>
    </div>
  );
}
