'use client';

import { useEffect, useRef, useState } from 'react';
import { useMutation } from '@apollo/client';
import { DUMMY_MUTATION } from '@/graphql';

import { FormProps } from '../interface/Form.interface';
import InputField from './InputField';
import TextareaField from './TextareaField';
import SelectField from './SelectField';
import FileUploadField from './FileUploadField';
import FormActions from './FormActions';


export default function Form({
  isOpen,
  onClose,
  onSuccess,
  initialData,
  fields,
  fileFields = [],
  createMutation,
  editMutation,
  uploadFileMutation,
  deleteFileMutation,
}: FormProps) {
  const [form, setForm] = useState<Record<string, any>>({});
  const [fileInputs, setFileInputs] = useState<Record<string, File[]>>({});
  const [fileUrls, setFileUrls] = useState<Record<string, string[]>>({});
  const [filesToDelete, setFilesToDelete] = useState<Record<string, string[]>>({});
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const [createItem] = useMutation(createMutation);
  const [editItem] = useMutation(editMutation);

  // useMutation must be used in order
  const [upload] = useMutation(uploadFileMutation ?? DUMMY_MUTATION);
  const [deleteFile] = useMutation(deleteFileMutation ?? DUMMY_MUTATION);

  useEffect(() => {
    if (initialData) {
      const newForm: Record<string, any> = {};

      fields.forEach((field) => {
        const raw = initialData[field.name];
        if (field.type === 'date') {
          newForm[field.name] = raw ? toInputDate(raw) : '';
        } else {
          newForm[field.name] = raw ?? '';
        }
      });

      setForm(newForm);

      const urls: Record<string, string[]> = {};
      fileFields.forEach(({ name }) => {
        const value = initialData[name];
        urls[name] = Array.isArray(value) ? value : value ? [value] : [];
      });
      setFileUrls(urls);
    }
  }, [initialData, fields, fileFields]);

  const toInputDate = (dateStr: string | null | undefined) =>
    dateStr ? new Date(dateStr).toISOString().split('T')[0] : '';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRemoveFileUrl = (fieldName: string, index: number) => {
    const url = fileUrls[fieldName][index];
    setFilesToDelete((prev) => ({
      ...prev,
      [fieldName]: [...(prev[fieldName] || []), url],
    }));
    setFileUrls((prev) => ({
      ...prev,
      [fieldName]: prev[fieldName].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const uploadedFiles: Record<string, string[]> = { ...fileUrls };

      for (const field of fileFields) {
        const name = field.name;

        // Delete old files if deleteFileMutation are called
        if (filesToDelete[name]?.length && deleteFileMutation) {
          await Promise.all(
            filesToDelete[name].map((url) => deleteFile({ variables: { fileUrl: url } }))
          );
        }

        // Upload new files if uploadFileMutation are called
        if (fileInputs[name]?.length && uploadFileMutation) {
          const variables: any = field.mode === 'singleupload'
            ? { file: fileInputs[name][0] }
            : { files: fileInputs[name] };

          const res = await upload({ variables });
          const urls = field.mode === 'singleupload'
            ? [res?.data?.singleUpload]
            : res?.data?.multiUpload || [];

          uploadedFiles[name] = field.mode === 'singleupload'
            ? urls
            : [...(uploadedFiles[name] || []), ...urls];
        }
      }

      const input: Record<string, any> = { ...form };

      if (fields.find((f) => f.name === 'skills')) {
        input.skills = Array.isArray(form.skills)
          ? form.skills
          : form.skills.split(',').map((s: string) => s.trim());
      }

      fileFields.forEach(({ name, mode }) => {
        input[name] = mode === 'singleupload'
          ? uploadedFiles[name]?.[0] || ''
          : uploadedFiles[name] || [];
      });

      if (form.dateAchieved) {
        input.dateAchieved = new Date(form.dateAchieved).toISOString();
      }

      if (initialData?.id) {
        await editItem({ variables: { id: initialData.id, input } });
      } else {
        await createItem({ variables: { input } });
      }

      setFilesToDelete({});
      onSuccess();
      onClose();
    } catch (err: any) {
      console.error('❌ Submit error:', err);
      alert(err.message || '❌ Failed to submit');
    }
  };

  if (!isOpen) return null;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-h-[80vh] overflow-y-auto p-4">
      {fields.map((field) => {
        if (field.type === 'textarea') {
          return (
            <TextareaField
              key={field.name}
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              placeholder={field.label}
              required={field.required}
            />
          );
        }
        if (field.type === 'select') {
          return (
            <SelectField
              key={field.name}
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              required={field.required}
              options={field.options || []}
              label={field.label}
              placeholder={field.label}
            />
          );
        }
        return (
          <InputField
            key={field.name}
            name={field.name}
            type={field.type}
            value={form[field.name]}
            onChange={handleChange}
            placeholder={field.label}
            required={field.required}
          />
        );
      })}

      {fileFields.map(({ name, label, mode }) => (
        <FileUploadField
          key={name}
          name={name}
          label={label}
          mode={mode}
          inputRef={el => { inputRefs.current[name] = el; }}
          onChange={(e) => {
            const newFiles = Array.from(e.target.files || []);
            setFileInputs((prev) => {
              const existing = prev[name] || [];
              return {
                ...prev,
                [name]: mode === 'singleupload'
                  ? newFiles
                  : [...existing, ...newFiles.filter(f => !existing.some(ef => ef.name === f.name))],
              };
            });
            if (mode === 'singleupload') {
              setFileUrls((prev) => ({
                ...prev,
                [name]: [],
              }));
            }
          }}
          fileUrls={fileUrls[name] || []}
          fileInputs={fileInputs[name] || []}
          onRemoveFileUrl={(idx) => handleRemoveFileUrl(name, idx)}
        />
      ))}

      <FormActions onClose={onClose} isEdit={!!initialData} />
    </form>
  );
}