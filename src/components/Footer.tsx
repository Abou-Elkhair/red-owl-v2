import { CONTACT } from '../data/contact';
import React from 'react';
import { Globe, Mail, MapPin, Phone, Globe2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PageId } from '../types';

export const Footer: React.FC = () => {
  const { t, lang, toggleLang, navigate } = useApp();

  const links: { id: PageId; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'projects', label: t.nav.projects },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'quality', label: t.nav.quality },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-[#2E323B] bg-[#191B1F] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand Frame matching Page 69 of official Company Profile */}
          <div className="md:col-span-5">
            <div className="inline-block rounded-md bg-white p-4">
              <img
                src="./assets/redowl/obj_1723.jpg"
                alt={lang === 'ar' ? t.brandName : 'Red Owl Construction'}
                referrerPolicy="no-referrer"
                className="h-11 w-auto object-contain"
              />
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#B8BDC7]">
              {t.footer.tagline}
            </p>
            <div className="mt-5 flex items-center gap-3 text-xs font-medium text-[#8C93A0]">
              <span>{t.footer.regionsBadge}</span>
              <span aria-hidden="true">·</span>
              <span>ISO 9001 / 14001 / 45001</span>
              <span aria-hidden="true">·</span>
              <span>NFPA</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold tracking-wide text-white">
              {t.footer.quickLinks}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    type="button"
                    onClick={() => navigate(l.id)}
                    className="text-sm text-[#B8BDC7] transition-colors hover:text-white"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info from Page 69 */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold tracking-wide text-white">
              {t.footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#B8BDC7]">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#D11A22]" />
                <a href={`tel:${CONTACT.phone}`} className="tabular-nums hover:text-white" dir="ltr">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#D11A22]" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white" dir="ltr">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Globe2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D11A22]" />
                <span dir="ltr">{CONTACT.website}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D11A22]" />
                <span>{t.contactPage.addressValue}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#2E323B] pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-[#8C93A0]">
            © <span className="tabular-nums">{new Date().getFullYear()}</span> {t.footer.rights}
          </p>
          <button
            type="button"
            onClick={toggleLang}
            className="inline-flex items-center gap-2 rounded-md border border-[#2E323B] bg-[#25282E] px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:border-[#4B505B]"
          >
            <Globe className="h-3.5 w-3.5 text-[#D11A22]" />
            <span>{lang === 'ar' ? 'Switch to English (LTR)' : 'التبديل إلى العربية (RTL)'}</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
