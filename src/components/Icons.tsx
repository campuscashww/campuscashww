import React from 'react';

export const LogoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M16 2L2 16L16 30L30 16L16 2Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 16H22M16 10V22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="16" cy="16" r="3" fill="currentColor" />
  </svg>
);

// Custom designed premium SVG icons
export const SurveyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M11 11H21M11 16H21M11 21H16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26 12V24C26 27.3137 23.3137 30 20 30H12C8.68629 30 6 27.3137 6 24V8C6 4.68629 8.68629 2 12 2H16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 2C24 2 24.5 4.5 27 5C24.5 5.5 24 8 24 8C24 8 23.5 5.5 21 5C23.5 4.5 24 2 24 2Z" fill="currentColor" />
  </svg>
);

export const CryptoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 17L13 20L21 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3"/>
  </svg>
);

export const SweepstakesIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M16 2L19.464 12.536L30 16L19.464 19.464L16 30L12.536 19.464L2 16L12.536 12.536L16 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M16 12V20M12 16H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export const BonusIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M16 2L20.326 11.674L30 16L20.326 20.326L16 30L11.674 20.326L2 16L11.674 11.674L16 2Z" fill="url(#paint0_linear)"/>
    <path d="M16 8L18.472 13.528L24 16L18.472 18.472L16 24L13.528 18.472L8 16L13.528 13.528L16 8Z" fill="currentColor"/>
    <defs>
      <linearGradient id="paint0_linear" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
        <stop stopColor="currentColor" stopOpacity="0.2"/>
        <stop offset="1" stopColor="currentColor" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);

export const SparklesIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
     <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor"/>
  </svg>
);
