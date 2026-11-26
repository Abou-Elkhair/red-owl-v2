import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {join} from 'node:path';
import {createServer} from 'vite';

const server = await createServer({mode:'production',server:{middlewareMode:true,hmr:false,watch:null},appType:'custom'});
try {
  const {render,routes,routePath,site} = await server.ssrLoadModule('/src/seo/prerender.tsx');
  const template = await readFile('dist/index.html','utf8');
  const urls = [];
  for (const route of routes) {
    const path = routePath(route);
    const depth = path.split('/').filter(Boolean).length;
    const {head,body} = render(route);
    const html = template.replace(/<html[^>]*>/,'<html lang="'+route.lang+'" dir="'+(route.lang==='ar'?'rtl':'ltr')+'">')
      .replace(/<base[^>]*>/,'<base href="'+('../'.repeat(depth)||'./')+'">')
      .replace(/<title>[\s\S]*?<meta name="twitter:card"[^>]*>/,()=>head)
      .replace('<div id="root"></div>',()=>'<div id="root">'+body+'</div>');
    await mkdir(join('dist',path),{recursive:true});
    await writeFile(join('dist',path,'index.html'),html);
    urls.push(new URL(path,site).href);
  }
  await writeFile('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+urls.map(url=>'\n  <url><loc>'+url+'</loc></url>').join('')+'\n</urlset>\n');
  console.log('Generated '+urls.length+' search-ready pages and sitemap.xml');
} finally {
  await server.close();
}
