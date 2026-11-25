import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ArrowUp, MessageCircle, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { answer, followUpQuestions, type Reply } from './profile';
import type { Language } from '../types';
import './assistant.css';

interface Turn { question: string; reply: Reply; language: Language; suggestions: string[] }
const copy = {
  ar: {title:'مساعد red-owl',intro:'عن أي مشروع أو خدمة تحب تعرف أكتر؟',dismiss:'إخفاء الأسئلة المقترحة',suggestions:'أسئلة مقترحة',close:'إغلاق المحادثة',send:'إرسال السؤال',input:'اكتب سؤالك…',prompts:['إيه دوركم في نيوم؟','إيه خدماتكم؟','إزاي أتواصل معاكم؟']},
  en: {title:'Red Owl assistant',intro:'Which project or service would you like to explore?',dismiss:'Hide suggested questions',suggestions:'Suggested questions',close:'Close conversation',send:'Send question',input:'Ask a question…',prompts:['What was your role at NEOM?','What services do you offer?','How can I contact the team?']}
};
export function ProfileAssistant(){
  const {lang,navigate,selectedProject,lightboxIndex,activeReel}=useApp();
  const labels=copy[lang];
  const [open,setOpen]=useState(false);
  const [dismissed,setDismissed]=useState(false);
  function dismissPrompts(){
    setDismissed(true);
    launcher.current?.focus({preventScroll:true});
  }
  const [draft,setDraft]=useState('');
  const [turns,setTurns]=useState<Turn[]>([]);
  const [pending,setPending]=useState<{question:string; language:Language} | null>(null);
  const timer=useRef<number | null>(null);
  useEffect(()=>()=>{if(timer.current!==null)window.clearTimeout(timer.current);},[]);
  const field=useRef<HTMLInputElement>(null);
  const launcher=useRef<HTMLButtonElement>(null);
  const conversation=useRef<HTMLDivElement>(null);
  const hidden=!!selectedProject || lightboxIndex!==null || !!activeReel;
  const visible=open&&!hidden;
  useEffect(()=>{if(visible)field.current?.focus({preventScroll:true});},[visible]);
  useEffect(()=>{if(visible && conversation.current)conversation.current.scrollTop=conversation.current.scrollHeight;},[visible,turns,pending]);
  function close(){setOpen(false);requestAnimationFrame(()=>launcher.current?.focus({preventScroll:true}));}
  useEffect(()=>{
    if (!visible) return;
    function onKey(event:KeyboardEvent){if(event.key==='Escape'){event.preventDefault();close();}}
    document.addEventListener('keydown',onKey);
    return ()=>document.removeEventListener('keydown',onKey);
  },[visible]);
  function ask(raw:string, context?: string){
    const question=raw.trim();
    if(!question || timer.current!==null)return;
    const language=/[\u0600-\u06ff]/.test(question)?'ar':/\s/.test(question)&&/[a-z]/i.test(question)?'en':lang;
    setPending({question,language});
    timer.current=window.setTimeout(()=>{
      timer.current=null;
      setPending(null);
      setTurns(current=>{
        const reply=answer(question,language,context ?? current.at(-1)?.reply.project);
        const suggestions=followUpQuestions(reply,language,[...current.map(turn=>turn.question),question]);
        return [...current,{question,language,reply,suggestions}];
      });
    },1500);
    setDraft('');
    field.current?.focus({preventScroll:true});
  }
  function submit(e:FormEvent){e.preventDefault();ask(draft);}
  if(hidden)return null;
  return <aside className="owl-assistant">
    {visible && <section id="owl-chat" role="dialog" aria-labelledby="owl-title" className="owl-panel">
      <header className="owl-header bg-engineering-grid">
        <MessageCircle size={22} aria-hidden/><div><h2 id="owl-title">{labels.title}</h2></div>
        <button type="button" onClick={close} aria-label={labels.close}><X size={20}/></button>
      </header>
      <div className="owl-thread" ref={conversation} role="log" aria-live="polite">
        <p className="owl-greeting">{labels.intro}</p>
        {!turns.length && !pending && <div className="owl-suggestions">{labels.prompts.map(prompt=><button key={prompt} onClick={()=>ask(prompt)}>{prompt}</button>)}</div>}
        {turns.map((turn,i)=><div className="owl-turn" key={i}>
          <p className="owl-question" dir="auto">{turn.question}</p>
          <div className="owl-answer" dir={turn.language==='ar'?'rtl':'ltr'} lang={turn.language}>
            <p>{turn.reply.text}</p>
            <div className="owl-next" role="group" aria-label={copy[turn.language].suggestions}>
              {turn.suggestions.map(prompt=><button type="button" key={prompt} disabled={!!pending} onClick={()=>ask(prompt,turn.reply.project)}>{prompt}</button>)}
            </div>
            <button className="owl-quote" type="button" onClick={()=>{setOpen(false);navigate('contact');}}>
              {turn.language==='ar'?'اطلب عرض سعر':'Request a quote'}
            </button>
          </div>
        </div>)}
        {pending && <div className="owl-turn">
          <p className="owl-question" dir="auto">{pending.question}</p>
          <div className="owl-thinking" role="status" aria-label={pending.language==='ar'?'جاري التفكير':'Thinking'}>
            <span aria-hidden="true"/><span aria-hidden="true"/><span aria-hidden="true"/>
          </div>
        </div>}
      </div>
      <form onSubmit={submit} className="owl-compose"><input ref={field} value={draft} maxLength={800} dir="auto" onChange={e=>setDraft(e.target.value)} aria-label={labels.input} placeholder={labels.input}/><button disabled={!!pending || !draft.trim()} aria-label={labels.send}><ArrowUp size={20}/></button></form>
    </section>}
    {!visible && !dismissed && !pending && <div className="owl-floating-prompts" role="group" aria-label={labels.suggestions}>
      <button type="button" className="owl-dismiss" onClick={dismissPrompts} aria-label={labels.dismiss}><X size={16} aria-hidden/></button>
      {labels.prompts.slice(0,2).map(prompt=><button type="button" className="owl-prompt" key={prompt} onClick={()=>{ask(prompt);setOpen(true);}}>{prompt}</button>)}
    </div>}
    {!visible && <button ref={launcher} className="owl-launcher" aria-haspopup="dialog" aria-expanded={false} onClick={()=>setOpen(true)}><MessageCircle size={20}/>{labels.title}</button>}
  </aside>;
}
