'use client';

import React from 'react';
import { GitHubURLProps } from '../interface/GitHubURLProps.interface';

export default function GitHubURL({ item, textFields }: GitHubURLProps) {
  const url = textFields.url ? item?.[textFields.url] : undefined;
  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="text-cyan-300 hover:underline text-sm block"
    >
      Github
    </a>
  );
}
