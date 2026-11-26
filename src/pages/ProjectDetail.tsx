import { ProjectGallery } from '../components/ProjectGallery';
import { PROJECTS, OTHER_PROJECTS } from '../data/projects';
import { useApp } from '../context/AppContext';
import { SiteLink } from '../components/SiteLink';

export function ProjectDetail({id}: {id:string}) {
  const {lang,t,navigate} = useApp();
  const p = PROJECTS.find(project=>project.id===id)!;
  if (!p) {
    const other = OTHER_PROJECTS.find(item=>item.id===id)!;
    return <article className="mx-auto max-w-5xl px-5 py-12">
      <SiteLink page="projects" className="text-sm font-bold text-[#D11A22]">{t.nav.projects}</SiteLink>
      <h1 className="font-display mt-4 text-3xl font-bold">{other.name[lang]}</h1>
      <p className="my-4">{other.sector[lang]} · {other.status==='completed'?t.projectsPage.completed:t.projectsPage.inProgress}</p>
      {other.subtitle && <p>{other.subtitle[lang]}</p>}
      <SiteLink page="contact" className="mt-6 inline-block rounded-md bg-[#D11A22] px-5 py-3 text-white">{t.projectModal.requestSimilar}</SiteLink>
    </article>;
  }
  const fields = ['client','owner','mainContractor','consultant','role'] as const;
  return <article className="mx-auto max-w-5xl px-5 py-12">
    <SiteLink page="projects" className="text-sm font-bold text-[#D11A22]">{t.nav.projects}</SiteLink>
    <h1 className="font-display mt-4 text-3xl font-bold sm:text-4xl">{p.name[lang]}</h1>
    <p className="my-4">{p.location[lang]} · {p.sector[lang]} · {p.status==='completed'?t.projectsPage.completed:t.projectsPage.inProgress}</p>
    <ProjectGallery key={p.id} project={p} lang={lang}/>
    <h2 className="my-5 text-xl font-bold">{t.projectModal.scopeTitle}</h2>
    <ul className="list-disc space-y-2 ps-5">{p.scope[lang].map(line=><li key={line}>{line}</li>)}</ul>
    <dl className="my-6 grid gap-3">{fields.filter(key=>p[key]).map(key=><div key={key}>
      <dt className="text-sm text-gray-600">{t.projectModal[key]}</dt><dd>{p[key]?.[lang]}</dd>
    </div>)}</dl>
    <button className="rounded-md bg-[#D11A22] px-5 py-3 text-white" onClick={()=>navigate('contact',{prefillDisciplines:(Object.keys(p.disciplines) as (keyof typeof p.disciplines)[]).filter(key=>p.disciplines[key])})}>{t.projectModal.requestSimilar}</button>
  </article>;
}
