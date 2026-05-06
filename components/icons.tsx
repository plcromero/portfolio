type IconProps = {
  className?: string;
};

const base = "h-4 w-4";

export const ArrowRight = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export const ArrowUpRight = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

export const Check = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 13l4 4L19 7" />
  </svg>
);

export const Mail = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const Globe = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15 15 0 0 1 0 20" />
    <path d="M12 2a15 15 0 0 0 0 20" />
  </svg>
);

export const Github = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="currentColor" aria-hidden>
    <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.79.55C20.21 21.4 23.5 17.1 23.5 12.02 23.5 5.66 18.35.5 12 .5z" />
  </svg>
);

export const Linkedin = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="currentColor" aria-hidden>
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6S0 4.88 0 3.5 1.12 1 2.49 1s2.49 1.12 2.49 2.5zM.22 8h4.54v14H.22V8zm7.39 0h4.35v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.54v-6.18c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.36 1.6-2.36 3.25V22H7.61V8z" />
  </svg>
);

export const Logo = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 17l5-10 3 6 3-4 5 8" />
  </svg>
);

export const Menu = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`h-5 w-5 ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18" />
    <path d="M3 12h18" />
    <path d="M3 18h18" />
  </svg>
);

export const Close = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`h-5 w-5 ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const ChevronDown = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`h-3 w-3 ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);
