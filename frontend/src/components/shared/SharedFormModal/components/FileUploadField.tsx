import React from 'react';
import { FileUploadFieldProps } from '../interface/FileUploadField.interface';

export default function FileUploadField({
  name, label, mode, inputRef, onChange, fileUrls, fileInputs, onRemoveFileUrl,
}: FileUploadFieldProps) {
  return (
    <div className="mt-4">
      <label className="block mb-1">{label} <i>(optional)</i></label>
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,image/*"
        multiple={mode === 'multiupload'}
        onChange={onChange}
        className="mt-2"
      />
      {(fileUrls.length > 0 || fileInputs.length > 0) && (
        <ul className="mt-2 text-sm text-black space-y-2">
          {fileUrls.map((url, idx) => (
            <li key={`${name}-url-${idx}-${url}`} className="flex items-center gap-2">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="underline break-all text-blue-600"
              >
                {url.split('/').pop()}
              </a>
              <button
                type="button"
                onClick={() => onRemoveFileUrl(idx)}
                className="text-red-500 text-xs hover:underline"
              >
                ❌
              </button>
            </li>
          ))}
          {fileInputs.map((file, idx) => (
            <li key={`${name}-file-${idx}-${file.name}`}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}