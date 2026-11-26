import { useEffect, useRef, useState } from 'react';
import { Check, Pause, Play } from 'lucide-react';
import type { Language, Project } from '../types';

export function ProjectGallery({project, lang}: {project: Project; lang: Language}) {
  const photos = [...new Set([project.coverImage, ...project.images])];
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const rail = useRef<HTMLDivElement>(null);
  const ar = lang === 'ar';
  const position = (index: number) => ar
    ? `صورة ${index + 1} من ${photos.length}`
    : `Photo ${index + 1} of ${photos.length}`;

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setPaused(preference.matches);
    sync();
    preference.addEventListener('change', sync);
    return () => preference.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (paused || photos.length < 2) return;
    const timer = window.setTimeout(() => setActive((active + 1) % photos.length), 5000);
    return () => window.clearTimeout(timer);
  }, [active, paused, photos.length]);

  useEffect(() => {
    const list = rail.current;
    const thumb = list?.children[active];
    if (!list || !thumb) return;
    const frame = list.getBoundingClientRect(), image = thumb.getBoundingClientRect();
    list.scrollBy({
      top: image.bottom > frame.bottom ? image.bottom - frame.bottom : Math.min(0, image.top - frame.top),
      left: image.right > frame.right ? image.right - frame.right : Math.min(0, image.left - frame.left),
    });
  }, [active]);

  return <section aria-label={ar ? 'صور المشروع' : 'Project photos'} className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_6rem]">
    <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-xl bg-[#191B1F] sm:h-96">
      <img src={photos[active]} alt={project.name[lang]+' — '+position(active)} className="size-full object-contain"/>
      {photos.length > 1 && <div className="absolute bottom-3 start-3 flex items-center gap-2 rounded-lg bg-black/80 px-2 text-sm text-white">
        <button type="button" onClick={()=>setPaused(!paused)} aria-label={paused ? (ar?'تشغيل عرض الصور':'Play slideshow') : (ar?'إيقاف عرض الصور مؤقتًا':'Pause slideshow')} className="grid size-10 place-items-center">
          {paused ? <Play size={17}/> : <Pause size={17}/>}
        </button>
        <span className="pe-2">{position(active)}</span>
      </div>}
    </div>
    {photos.length > 1 && <div ref={rail} className="flex gap-2 overflow-x-auto p-1 sm:h-96 sm:flex-col sm:overflow-x-hidden sm:overflow-y-auto">
      {photos.map((src,i)=><button key={src} type="button" aria-label={position(i)} aria-pressed={active===i} onClick={()=>setActive(i)}
        className={'relative h-16 w-20 shrink-0 overflow-hidden rounded-md border-2 sm:w-full '+(active===i?'border-[#D11A22] ring-1 ring-[#D11A22]':'border-transparent opacity-75 hover:opacity-100')}>
        <img src={src} alt="" loading="lazy" className="size-full object-cover"/>
        {active===i && <span className="absolute bottom-0 end-0 rounded-ss bg-[#D11A22] p-0.5 text-white"><Check size={14}/></span>}
      </button>)}
    </div>}
  </section>;
}
