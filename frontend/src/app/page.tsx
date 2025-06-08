// ./src/app/page.tsx
'use client';

import Typing from '@/components/utils/Typing';
import SocialMedia from '@/components/utils/SocialMedia';
import Timeline from '@/components/utils/TimeLine';

export default function HomePage() {
  return (
    <>
      {/* Greetings and Image */}
      <div className="page-container items-center flex-col mobile:p-6">
        <div className="flex items-start w-full desktop:flex-row desktop:items-start mobile:justify-center mobile:flex-col">
          <div className="flex-col z-20 pointer-events-none desktop:w-3/5 mobile:w-full mobile:text-center">
            <p
              className="font-bold text-lightcyan w-full leading-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 6rem)' }}
            >
              Greetings, I&apos;m Thy
            </p>
            <p
              className="mb-4 pr-4 leading-tight"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 3.5rem)' }}
            >
              A developer specializing in web applications with&nbsp;
              <Typing />
            </p>

            <div className="flex desktop:justify-start mobile:justify-center mt-4 pb-10">
              <SocialMedia />
            </div>
          </div>

          <Timeline />
        </div>
      </div>
    </>
  );
}
