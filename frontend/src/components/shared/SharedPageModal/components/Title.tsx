'use client';

import React from 'react';
import { TitleProps } from '../interface/Title.interface';

export default function SharedPageItemTitle({ item, textFields }: TitleProps) {
  return (
    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition">
      {item[textFields.title]}{' '}
      {textFields.subtitle && item[textFields.subtitle] && (
        <span className="text-cyan-300">@ {item[textFields.subtitle]}</span>
      )}
    </h3>
  );
}
