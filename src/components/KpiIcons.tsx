import React from 'react';

interface IconProps {
  className?: string;
}

/** Modern architectural skyline inside circular base arc */
export const ProjectsSkylineIcon: React.FC<IconProps> = ({ className = 'h-12 w-12' }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <path
      d="M12.5 34.5C9.7 31.6 8 27.6 8 23.2C8 14.3 15.2 7 24 7C32.8 7 40 14.3 40 23.2C40 27.2 38.5 30.8 36.1 33.6"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
    />
    <path
      d="M16 33V20.5L21 18.5V33"
      fill="currentColor"
      fillOpacity="0.18"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinejoin="round"
    />
    <path
      d="M21 33V12.5L27 10.5V33"
      fill="currentColor"
      fillOpacity="0.85"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinejoin="round"
    />
    <path
      d="M27 33V17.5L32.5 19.5V33"
      fill="currentColor"
      fillOpacity="0.28"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinejoin="round"
    />
    <path
      d="M9 37C14 34 20.5 32.8 27.5 33.8C32.2 34.4 36.2 36 39 38"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
    />
    <path
      d="M12 40.2C17.2 37.5 23.5 36.6 30 37.8C33.4 38.4 36.4 39.5 38.8 41"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

/** Rosette quality & heritage ribbon seal with checkmark */
export const FoundedAwardIcon: React.FC<IconProps> = ({ className = 'h-12 w-12' }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <path
      d="M18 29.5L15 41L21 38L24 41.5L24 31"
      fill="currentColor"
      fillOpacity="0.75"
    />
    <path
      d="M30 29.5L33 41L27 38L24 41.5L24 31"
      fill="currentColor"
      fillOpacity="0.9"
    />
    <path
      d="M24 7.5L26.9 9.5L30.4 9.1L32.1 12.2L35.4 13.4L35.6 16.9L37.9 19.5L36.5 22.8L37.4 26.2L34.7 28.4L34.1 31.8L30.6 32.5L28.6 35.4L25.1 34.6L22.1 36.2L19.4 34L15.9 34.2L14.5 31L11.2 29.6L11.3 26.1L9.1 23.4L10.7 20.2L9.9 16.8L12.7 14.7L13.4 11.3L16.9 10.7L19 7.8L22.5 8.7L24 7.5Z"
      fill="currentColor"
      fillOpacity="0.88"
    />
    <circle cx="23.6" cy="21.8" r="8.6" stroke="#EBECEE" strokeWidth="1.8" />
    <path
      d="M19.5 22L22.4 24.9L28.2 18.8"
      stroke="#EBECEE"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Engineering lattice tower crane */
export const CraneInfrastructureIcon: React.FC<IconProps> = ({ className = 'h-12 w-12' }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <path d="M10 41H22" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M13 41V12H19V41" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M13 35L19 30M13 30L19 25M13 25L19 20M13 20L19 15" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 16H40L38 12H10L8 16Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M16 6.5L13 12M16 6.5L19 12M16 6.5L36.5 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="8.5" y="16" width="4.5" height="4" rx="0.6" fill="currentColor" />
    <path d="M35.5 16V27" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    <path
      d="M35.5 27C37.2 27 38.2 28.1 38.2 29.4C38.2 30.8 37 31.8 35.5 31.8C34.2 31.8 33.4 31 33.2 30"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

/** Construction safety hard hat silhouette */
export const TeamHelmetIcon: React.FC<IconProps> = ({ className = 'h-12 w-12' }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <path
      d="M21 12C21 10.6 22.3 9.5 24 9.5C25.7 9.5 27 10.6 27 12V13.5H21V12Z"
      fill="currentColor"
    />
    <path
      d="M11 31C11 21.8 16.6 15 24 15C31.4 15 37 21.8 37 31H11Z"
      fill="currentColor"
      fillOpacity="0.92"
    />
    <path
      d="M21 15.4L19.8 30.5M27 15.4L28.2 30.5"
      stroke="#EBECEE"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <rect x="8.5" y="30.5" width="31" height="4.5" rx="2.2" fill="currentColor" />
  </svg>
);

/** Regional footprint globe for Egypt & Saudi Arabia */
export const RegionalPresenceIcon: React.FC<IconProps> = ({ className = 'h-12 w-12' }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <circle cx="24" cy="24" r="14.5" stroke="currentColor" strokeWidth="2.1" />
    <ellipse cx="24" cy="24" rx="7" ry="14.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M10.5 19H37.5M10.5 29H37.5" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="19.5" cy="21" r="2.2" fill="currentColor" />
    <circle cx="28.5" cy="25.5" r="2.2" fill="currentColor" />
  </svg>
);
