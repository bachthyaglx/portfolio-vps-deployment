'use client';

import React from 'react';
import { ImagesBlockProps } from '../interface/ImagesBlock.interface';

export default function ImagesBlock({ item, fileFields }: ImagesBlockProps) {
  return (
    <div className="pt-4 flex flex-wrap gap-4">
      {fileFields.map(({ name, mode }) => {
        const urls = item[name];
        if (!Array.isArray(urls)) return null;

        return urls.map((url: string, idx: number) => {
          const ext = url.split('.').pop()?.toLowerCase();
          const isImage = /jpeg|jpg|png|gif|webp/.test(ext || '');
          if (!isImage) return null;

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
                <img
                  src={url}
                  alt="file"
                  className="w-[370px] h-auto object-contain"
                />
              </a>
            </div>
          );
        });
      })}
    </div>
  );
}
