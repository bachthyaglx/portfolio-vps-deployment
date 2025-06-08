'use client';

import timelineData from './timeline.json';
import Tag from './Tag';

function Timeline() {
  return (
    <div className="text-xl">
      {timelineData.data.map((item: any, index: number) => (
        <div key={`W${index}`} className="flex mb-6">
          {/* Timeline circle + line */}
          <div>
            <div className="flex justify-center items-center text-white rounded-full w-20 h-20 bg-slate-600">
              <div className="flex h-[72px] w-[72px] bg-slate-800 font-bold rounded-full justify-center items-center">
                {item.year?.toString() ?? ''}
              </div>
            </div>

            {index < timelineData.data.length - 1 ? (
              <div className="w-1 bg-slate-600 m-auto h-full"></div>
            ) : (
              <div className="h-16"></div>
            )}
          </div>

          {/* Timeline content */}
          <div className="flex flex-col justify-start h-max mt-5 px-6 text-white">
            <div className="font-bold">
              {item.title ? item.title : ''} @{' '}
              <span className="text-teal-400 font-bold">{item.company ?? ''}</span>
            </div>

            {/* Tasks (support multi-line, split by sentence) */}
            {item.tasks &&
              item.tasks
                .split(/\. (?=[A-Z])/g) // split sau dấu chấm + khoảng trắng + chữ hoa
                .filter((line: string) => line.trim() !== '')
                .map((line: string, i: number) => (
                  <p
                    key={`task-line-${i}`}
                    className="text-sm mt-1 leading-relaxed text-slate-300"
                  >
                    - {line.trim()}.
                  </p>
                ))}

            {/* Tags */}
            {Array.isArray(item.tags) && item.tags.length > 0 && (
              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                {item.tags.map((tag: string, i: number) => (
                  <li key={`L${i}`} className="mr-1.5 mt-2">
                    <Tag title={tag} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
