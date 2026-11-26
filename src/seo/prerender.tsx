import {renderToString, renderToStaticMarkup} from 'react-dom/server';
import App from '../App';
import {metadata,site} from './metadata';
import {routes,routePath,type Route} from './routes';
export {routes,routePath,site};

export function render(route: Route) {
  const m=metadata(route);
  const head=renderToStaticMarkup(<>
    <title>{m.title}</title>
    <meta name="description" content={m.description}/>
    <link rel="canonical" href={m.url}/>
    {Object.entries({ar:m.ar,en:m.en,'x-default':m.ar}).map(([lang,url])=><link key={lang} rel="alternate" hrefLang={lang} href={url}/>)}
    <meta property="og:type" content="website"/>
    <meta property="og:title" content={m.title}/>
    <meta property="og:description" content={m.description}/>
    <meta property="og:image" content={m.image}/>
    <meta property="og:url" content={m.url}/>
    <meta property="og:locale" content={route.lang==='ar'?'ar_EG':'en_US'}/>
    <meta name="twitter:card" content="summary_large_image"/>
    <script type="application/ld+json" id="structured-data" dangerouslySetInnerHTML={{__html:JSON.stringify(m.graph).replace(/</g,'\\u003c')}}/>
  </>);
  return {head,body:renderToString(<App initialRoute={route}/>)};
}
