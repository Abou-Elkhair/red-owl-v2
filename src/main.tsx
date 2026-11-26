import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const base = document.querySelector('base')!;
base.href = base.href;
createRoot(document.getElementById('root')!).render(<App />);
