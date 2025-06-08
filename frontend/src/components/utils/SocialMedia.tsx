import Image from 'next/image';

interface SocialMediaProps {
  className?: string;
}

function SocialMedia({ className }: SocialMediaProps) {
  const iconStyle = { width: '4em', height: '4em' };

  return (
    <div
      className={`flex justify-start gap-2 pt-1 pb-1 pointer-events-auto ${className ?? ''
        }`}
    >
      <a
        className="social-icon"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/thykhuu2105/"
      >
        <Image
          src="/icons/linkedin.svg"
          alt="LinkedIn"
          width={1}
          height={1}
          style={iconStyle}
          loading="lazy"
          priority={false}
        />
      </a>
      <a
        className="social-icon"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/bachthyaglx"
      >
        <Image
          src="/icons/github.svg"
          alt="GitHub"
          width={1}
          height={1}
          style={iconStyle}
          loading="lazy"
          priority={false}
        />
      </a>
      <a
        className="social-icon"
        target="_blank"
        rel="noreferrer"
        href="https://bachthyaglx.s3.us-east-1.amazonaws.com/CV_2025_Thy_Khuu.pdf"
      >
        <Image
          src="/icons/cv.svg"
          alt="CV"
          width={1}
          height={1}
          style={iconStyle}
          loading="lazy"
          priority={false}
        />
      </a>
    </div>
  );
}

export default SocialMedia;
