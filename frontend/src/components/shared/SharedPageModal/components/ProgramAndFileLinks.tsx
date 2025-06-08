'use client';

import { isImageFile } from '@/components/utils/fileUtils';

export default function ProgramAndFileLinks({ item, textFields, fileFields }: any) {
  return (
    <div className="text-sm text-cyan-400 flex flex-wrap gap-4">
      {textFields.program ? item[textFields.program] : ''}

      {fileFields.map(({ name, label, mode }: any) => {
        const files = item[name];
        if (!files) return null;

        if (mode === 'singleupload') {
          if (typeof files !== 'string') return null;
          return (
            <div key={`${name}-${item.id}`} className="text-sm text-center">
              📝{' '}
              <a href={files} target="_blank" rel="noreferrer" className="hover:underline">
                {label}
              </a>
            </div>
          );
        }

        if (mode === 'multiupload' && Array.isArray(files)) {
          return files.map((url: any, idx: number) => {
            if (typeof url !== 'string') return null;

            if (!isImageFile(url)) {
              return (
                <div key={`${name}-${item.id}-${idx}`} className="text-sm text-center">
                  📝{' '}
                  <a href={url} target="_blank" rel="noreferrer" className="hover:underline">
                    {label}_{idx + 1}
                  </a>
                </div>
              );
            }
            return null;
          });
        }

        return null;
      })}
    </div>
  );
}
