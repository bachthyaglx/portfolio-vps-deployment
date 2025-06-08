'use client';

import { isImageFile } from '@/components/utils/fileUtils';

export default function ImagesBlock({ item, fileFields }: any) {
  return (
    <div className="pt-4 flex flex-wrap gap-4">
      {fileFields.map(({ name, mode }: any) => {
        const urls = item[name];
        if (!Array.isArray(urls)) return null;

        return urls.map((url: any, idx: number) => {
          if (typeof url !== 'string') return null;
          if (!isImageFile(url)) return null;

          return (
            <div
              key={`${name}-img-${idx}`}
              className="rounded overflow-hidden w-[370px] hover:shadow-xl transition-transform duration-200"
            >
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="block hover:scale-105 transition-transform duration-200"
              >
                <img src={url} alt={`image-${idx}`} className="w-[370px] h-auto object-contain" />
              </a>
            </div>
          );
        });
      })}
    </div>
  );
}
