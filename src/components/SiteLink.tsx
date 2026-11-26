import type { AnchorHTMLAttributes } from 'react';
import { useApp } from '../context/AppContext';
import { routePath } from '../seo/routes';
import type { Language, PageId } from '../types';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {page: PageId; language?: Language; detail?: string};

export function SiteLink({page,language,detail,onClick,...props}: Props) {
  const {lang,changeRoute} = useApp();
  const route = {page,lang:language ?? lang,detail};
  return <a {...props} href={'./'+routePath(route)} onClick={event=>{
    onClick?.(event);
    if(event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button!==0) return;
    event.preventDefault();
    changeRoute(route);
  }}/>;
}
