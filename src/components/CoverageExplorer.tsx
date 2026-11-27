import { useState } from 'react';
import { ArrowLeft, ArrowRight, MapPin, Undo2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { geography } from '../data/coverageGeography';
import { SiteLink } from './SiteLink';

// Representative regional locations.
const regions = [
  { lon: 29.92, lat: 31.2 },
  { lon: 31.48, lat: 30.01 },
  { lon: 31.75, lat: 30.02 },
  { lon: 31.24, lat: 30.05 },
  { lon: 30.75, lat: 28.09 },
  { lon: 35.25, lat: 28.15 },
];
const number = (index: number) => String(index + 1).padStart(2, '0');
const countries = Object.entries(geography).filter(([key]) => key !== 'nile');

export function CoverageExplorer() {
  const { t, lang } = useApp();
  const ar = lang === 'ar';
  const ForwardArrow = ar ? ArrowLeft : ArrowRight;
  const [selected, select] = useState<number | null>(null);
  const region = selected === null ? null : regions[selected];
  const zoom = region ? 2.25 : 1;
  const x = region ? 240 - (region.lon - 27) * 47 * zoom : 0;
  const y = region ? 167 - (33 - region.lat) * 54 * zoom : 0;
  const resetLabel = ar ? 'كل المناطق' : 'All regions';
  return (
    <div id="coverage" className="mt-10 grid scroll-mt-24 gap-5 lg:grid-cols-12" onKeyDown={e => { if (e.key === 'Escape') select(null); }}>
      <div className="flex gap-2 overflow-x-auto pb-2 lg:col-span-5 lg:flex-col">
        {t.about.regions.map((item, i) => (
          <button type="button" key={i} aria-pressed={selected === i} onClick={() => select(i)}
            className={'flex min-h-11 shrink-0 items-center gap-3 rounded-lg border px-4 py-3 text-start text-sm font-semibold transition-colors ' + (selected === i ? 'border-[#d11a22] bg-[#d11a22] text-white' : 'border-[#343842] bg-[#25282e] text-[#d9dce3] hover:border-[#858996]')}>
            <MapPin size={16} aria-hidden="true" /><span className="grow">{item.name}</span><span className="text-xs opacity-70">{number(i)}</span>
          </button>
        ))}
      </div>
      <div className="overflow-hidden rounded-xl border border-[#343842] bg-[#22252a] lg:col-span-7">
        <div dir="ltr" className="relative isolate overflow-hidden bg-[#15191e]" onClick={() => select(null)}>
          <svg viewBox="0 0 480 330" className="block w-full" role="img" aria-label={ar ? 'خريطة مناطق العمل في مصر ونيوم' : 'Project coverage in Egypt and NEOM'}>
            <g style={{transform: 'translate('+x+'px,'+y+'px) scale('+zoom+')', transition: 'transform 480ms ease-out'}} className="motion-reduce:!transition-none">
              {countries.map(([key,d]) => <path key={key} d={d} fill={key === 'EGY' || key === 'SAU' ? '#353a40' : '#282c32'} stroke="#50565d" strokeWidth=".8" vectorEffect="non-scaling-stroke" />)}
              <path d={geography.nile} fill="none" stroke="#69717a" strokeWidth="1.3" vectorEffect="non-scaling-stroke" />
              <g fill="#c5c9cc" fontSize="13" textAnchor="middle">
                <text x="76" y="237">{ar ? 'مصر' : 'Egypt'}</text>
                <text x="420" y="305">{ar ? 'السعودية' : 'Saudi Arabia'}</text>
                <text x="155" y="52" fill="#838b96" fontSize="10">{ar ? 'البحر المتوسط' : 'Mediterranean Sea'}</text>
              </g>
            </g>
          </svg>
          {regions.map((p,i) => {
            if (selected !== null && selected !== i) return null;
            const left = ((p.lon-27)*47*zoom+x)/480*100;
            const top = ((33-p.lat)*54*zoom+y)/330*100;
            return <button key={i} type="button" aria-label={t.about.regions[i].name} title={t.about.regions[i].name}
              onClick={e => { e.stopPropagation(); select(i); }}
              style={{left:left+'%',top:top+'%'}}
              className="absolute transition-[left,top] duration-[480ms] ease-out motion-reduce:transition-none flex h-10 w-10 -translate-x-1/2 -translate-y-full items-end justify-center rounded-md text-[#df202b] drop-shadow-md hover:text-[#fb3440] focus-visible:z-10">
              <svg aria-hidden="true" viewBox="0 0 32 40" width="28" height="35">
                <path d="M16 39C13 35 1 21 1 16a15 15 0 1 1 30 0c0 5-12 19-15 23Z" fill="currentColor" stroke="#ffd0d2" strokeWidth="1.2" />
                <circle cx="16" cy="15" r="5" fill="white" />
              </svg>
            </button>;
          })}
          {region && <button type="button" className="absolute end-3 top-3 flex items-center gap-2 rounded-full border border-[#575e67] bg-[#202329] px-3 py-2 text-xs text-white" onClick={() => select(null)}><Undo2 size={14}/>{resetLabel}</button>}
        </div>
        <div aria-live="polite" className="border-t border-[#393d44] px-5 py-4">
          {selected !== null && <><h3 className="font-bold">{t.about.regions[selected].name}</h3><ul className="mt-2 list-inside list-disc space-y-1 text-sm text-[#d3d6db]">{t.about.regions[selected].items.map(line => <li key={line}>{line}</li>)}</ul></>}
          <div className={'flex flex-wrap items-center justify-between gap-2 text-xs' + (selected !== null ? ' mt-4 border-t border-[#393d44] pt-3' : '')}>
            <span className="text-[#bec3ca]">{ar ? 'العلامات بتوضح مناطق المشاريع بشكل تقريبي' : 'Pins show approximate project areas'}</span>
            <SiteLink page="projects" className="inline-flex items-center gap-2 rounded-sm font-bold text-[#ff7379] hover:underline focus-visible:outline-current">
              {t.home.viewAllProjects}
              <ForwardArrow aria-hidden="true" className="h-4 w-4 shrink-0" />
            </SiteLink>
          </div>
        </div>
      </div>
    </div>
  );
}
