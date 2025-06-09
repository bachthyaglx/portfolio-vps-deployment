'use client';

import React from 'react';
import { FilesBlockProps } from '../interface/FilesBlock.interface';

export default function FilesBlock({
  item,
  fileFields,
}: FilesBlockProps) {
  return (
    <div className="text-sm text-cyan-400 flex flex-wrap gap-4">
      {fileFields.map((field) => {
        const { name, label, mode, display = 'file' } = field;
        const rawFiles = item[name];
        if (!rawFiles) return null;

        const urlsToRender =
          mode === 'singleupload'
            ? [rawFiles]
            : Array.isArray(rawFiles)
              ? rawFiles
              : [];

        // Pre-filter non-image files first
        const validUrls = urlsToRender.filter((url: string) => {
          const ext = url.split('.').pop()?.toLowerCase();
          return !/jpeg|jpg|png|gif|webp/.test(ext || '');
        });

        // Render
        return validUrls.map((url: string, idx: number) => {
          const key = `${name}-${item.id}-${idx}`;
          const isSingleFile = validUrls.length === 1;

          if (display === 'iframe') {
            return (
              <div
                key={key}
                className="rounded overflow-hidden w-[370px] h-[320px] hover:shadow-xl transition-transform duration-200 cursor-pointer"
              >
                <a href={url} target="_blank" rel="noreferrer">
                  <iframe
                    src={url}
                    title={key}
                    className="w-[370px] h-[320px] border-none pointer-events-none"
                  ></iframe>
                </a>
              </div>
            );
          }

          return (
            <div key={key} className="text-sm text-center">
              📝{' '}
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                {isSingleFile ? label : `${label}_${idx + 1}`}
              </a>
            </div>
          );
        });
      })}
    </div>
  );
}
