'use client';

import formatMonthYear from '@/components/utils/formatMonthYear';

export default function DateDisplay({ item, textFields }: any) {
  const start = textFields.start ? item[textFields.start] : null;
  const end = textFields.end ? item[textFields.end] : null;

  const formattedStart = start ? formatMonthYear(start) : null;
  const formattedEnd = end ? formatMonthYear(end) : null;

  const displayEnd = formattedEnd ?? 'Present';

  if (!formattedStart) return null;

  return (
    <div className="pt-1 text-sm text-slate-400 leading-snug max-w-[90px] desktop:max-w-none">
      <div className="flex flex-col desktop:flex-row desktop:whitespace-nowrap desktop:gap-1">
        <span>{formattedStart}</span>
        <span className="text-center">–</span>
        <span>{displayEnd}</span>
      </div>
    </div>
  );
}
