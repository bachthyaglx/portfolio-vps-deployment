'use client';

export default function SkillsBlock({ item, textFields }: any) {
  if (!textFields.tags || !item[textFields.tags] || !Array.isArray(item[textFields.tags])) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {item[textFields.tags].map((tag: string, i: number) => (
        <span
          key={`tag-${tag}-${i}`}
          className="bg-teal-400/10 text-teal-300 px-3 py-1 text-xs rounded-full font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
