'use client';

export default function DescriptionBlock({ item, textFields }: any) {
  if (!textFields.description || !item[textFields.description]) return null;

  return (
    <div className="text-slate-300 text-sm space-y-1">
      {item[textFields.description]
        .split(/\n+/g)
        .map((line: string, idx: number) => (
          <p key={`desc-line-${idx}`}>{line.trim()}</p>
        ))}
    </div>
  );
}
