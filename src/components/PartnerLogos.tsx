import React from 'react';

export interface PartnerLogoItem {
  id: string;
  name: string;
  renderLogo: () => React.ReactNode;
}

export const PARTNER_LOGOS: PartnerLogoItem[] = [
  {
    id: 'neom',
    name: 'NEOM Saudi Arabia',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
          <polygon points="20,2 35,11 35,29 20,38 5,29 5,11" fill="none" stroke="#E0A82E" strokeWidth="2" />
          <path d="M20 4 L20 20 L34 12 Z" fill="#009B77" />
          <path d="M20 20 L34 28 L20 36 Z" fill="#00A9E0" />
          <path d="M20 20 L6 28 L6 12 Z" fill="#E0A82E" />
          <circle cx="20" cy="20" r="4" fill="#D11A22" />
        </svg>
        <div className="flex flex-col leading-none">
          <span className="text-base font-extrabold tracking-[0.18em] text-[#191B1F]">NEOM</span>
          <span className="mt-1 text-[10px] font-semibold tracking-wider text-[#009B77]">SAUDI ARABIA</span>
        </div>
      </div>
    ),
  },
  {
    id: 'bechtel',
    name: 'Bechtel (USA)',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
          <circle cx="20" cy="20" r="17" fill="#004B87" />
          <ellipse cx="20" cy="20" rx="8" ry="17" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="3" y1="20" x2="37" y2="20" stroke="#FFFFFF" strokeWidth="1.5" />
          <path d="M7 11 Q20 15 33 11" fill="none" stroke="#D22630" strokeWidth="2.5" />
          <path d="M7 29 Q20 25 33 29" fill="none" stroke="#D22630" strokeWidth="2.5" />
        </svg>
        <div className="flex flex-col leading-none">
          <span className="text-base font-black tracking-wide text-[#D22630]">BECHTEL</span>
          <span className="mt-1 text-[10px] font-bold tracking-wider text-[#004B87]">USA · CONSULTANT</span>
        </div>
      </div>
    ),
  },
  {
    id: 'pepsi',
    name: 'Pepsi',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
          <circle cx="20" cy="20" r="17" fill="#FFFFFF" stroke="#E2E4E9" strokeWidth="1" />
          <path d="M4 16 C10 6, 28 4, 36 14 C27 21, 13 20, 4 16 Z" fill="#E32934" />
          <path d="M5 25 C15 26, 26 22, 36 19 C34 31, 20 39, 9 33 C7 31, 5 28, 5 25 Z" fill="#004B93" />
        </svg>
        <span className="text-lg font-extrabold tracking-tight text-[#004B93]">pepsi</span>
      </div>
    ),
  },
  {
    id: 'atos',
    name: 'Atos',
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <svg viewBox="0 0 36 36" className="h-8 w-8 shrink-0" aria-hidden="true">
          <circle cx="18" cy="18" r="16" fill="#0066A1" />
          <path d="M9 24 L18 10 L27 24" fill="none" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="26" cy="11" r="2.5" fill="#00A9E0" />
        </svg>
        <span className="text-xl font-extrabold tracking-tight text-[#0066A1]">Atos</span>
      </div>
    ),
  },
  {
    id: 'gastec',
    name: 'Gastec (150+ Stations)',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
          <path d="M20 3 C29 13, 33 21, 30 29 C28 34, 24 37, 20 37 C14 37, 10 32, 10 25 C10 18, 15 11, 20 3 Z" fill="#0072BC" />
          <path d="M21 12 C26 19, 27 25, 25 30 C24 33, 21 35, 19 35 C16 35, 14 31, 14 27 C14 21, 18 16, 21 12 Z" fill="#009B4D" />
          <circle cx="20" cy="28" r="3.5" fill="#F7941D" />
        </svg>
        <div className="flex flex-col leading-none">
          <span className="text-base font-extrabold tracking-wide text-[#0072BC]">GASTEC</span>
          <span className="mt-1 text-[10px] font-bold text-[#009B4D]">150+ STATIONS</span>
        </div>
      </div>
    ),
  },
  {
    id: 'contact-dev',
    name: 'Contact Developments',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
          <circle cx="20" cy="20" r="15" fill="none" stroke="#1D3557" strokeWidth="3.5" />
          <path d="M12 10 A13 13 0 0 1 12 30" fill="none" stroke="#008080" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="20" cy="20" r="5" fill="#1D3557" />
        </svg>
        <div className="flex flex-col leading-none">
          <span className="text-sm font-extrabold tracking-wider text-[#1D3557]">CONTACT</span>
          <span className="mt-1 text-[9px] font-bold tracking-[0.16em] text-[#008080]">DEVELOPMENTS</span>
        </div>
      </div>
    ),
  },
  {
    id: 'xd-egemac',
    name: 'XD EGEMAC',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
          <rect x="3" y="5" width="34" height="30" rx="5" fill="#00529B" />
          <polygon points="22,8 12,22 19,22 17,32 28,18 21,18" fill="#FDB913" />
          <rect x="3" y="31" width="34" height="4" rx="1" fill="#D11A22" />
        </svg>
        <div className="flex flex-col leading-none">
          <span className="text-base font-black tracking-tight text-[#00529B]">
            XD <span className="text-[#D11A22]">EGEMAC</span>
          </span>
          <span className="mt-1 text-[10px] font-semibold text-[#4B505B]">POWER & SUBSTATIONS</span>
        </div>
      </div>
    ),
  },
  {
    id: 'al-ayuni',
    name: 'Al-Ayuni Contracting',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
          <rect x="4" y="4" width="32" height="32" rx="6" fill="#006C35" />
          <path d="M11 28 L20 11 L29 28" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinejoin="round" />
          <path d="M15 24 L25 24" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <div className="flex flex-col leading-none">
          <span className="text-sm font-extrabold tracking-wide text-[#006C35]">AL-AYUNI</span>
          <span className="mt-1 text-[10px] font-semibold text-[#9A7B1C]">INVESTMENT & CONTRACTING</span>
        </div>
      </div>
    ),
  },
  {
    id: 'arcon',
    name: 'ARCON GROUP',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
          <polygon points="20,4 36,34 4,34" fill="#191B1F" />
          <polygon points="20,14 29,31 11,31" fill="#E86C1E" />
        </svg>
        <div className="flex flex-col leading-none">
          <span className="text-sm font-black tracking-wider text-[#191B1F]">
            ARCON <span className="text-[#E86C1E]">GROUP</span>
          </span>
          <span className="mt-1 text-[10px] font-semibold text-[#6E7482]">ENGINEERING & EPC</span>
        </div>
      </div>
    ),
  },
  {
    id: 'ncrb',
    name: 'National Company for Roads & Bridges',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
          <circle cx="20" cy="20" r="17" fill="#0F3D6E" />
          <path d="M6 26 Q20 14 34 26" fill="none" stroke="#D4A017" strokeWidth="2.8" />
          <line x1="12" y1="21" x2="12" y2="30" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="20" y1="18" x2="20" y2="30" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="28" y1="21" x2="28" y2="30" stroke="#FFFFFF" strokeWidth="2" />
        </svg>
        <div className="flex flex-col leading-none">
          <span className="text-xs font-extrabold text-[#0F3D6E]">National Co. for Roads & Bridges</span>
          <span className="mt-1 text-[10px] font-semibold text-[#B3860E]">الشركة الوطنية للطرق والكباري</span>
        </div>
      </div>
    ),
  },
  {
    id: 'corps-of-engineers',
    name: 'Egyptian Armed Forces — Corps of Engineers',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
          <path d="M20 3 L34 9 V21 C34 29 27 35 20 37 C13 35 6 29 6 21 V9 Z" fill="#8B1E24" stroke="#C59B27" strokeWidth="2" />
          <path d="M14 27 L20 12 L26 27" fill="none" stroke="#F4D06F" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="20" cy="12" r="2.2" fill="#FFFFFF" />
        </svg>
        <div className="flex flex-col leading-none">
          <span className="text-xs font-extrabold text-[#8B1E24]">Corps of Engineers</span>
          <span className="mt-1 text-[10px] font-semibold text-[#7A6018]">الهيئة الهندسية للقوات المسلحة</span>
        </div>
      </div>
    ),
  },
  {
    id: 'military-works',
    name: 'Military Works Authority',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
          <rect x="5" y="7" width="30" height="26" rx="4" fill="#1E3A5F" stroke="#C59B27" strokeWidth="2" />
          <path d="M12 27 V15 H16 V18 H24 V15 H28 V27 Z" fill="#C59B27" />
        </svg>
        <div className="flex flex-col leading-none">
          <span className="text-xs font-extrabold text-[#1E3A5F]">Military Works Authority</span>
          <span className="mt-1 text-[10px] font-semibold text-[#9A7B1C]">إدارة الأشغال العسكرية</span>
        </div>
      </div>
    ),
  },
];
