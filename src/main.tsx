import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { SiteEditorProvider } from './context/SiteEditorContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SiteEditorProvider>
      <App />
    </SiteEditorProvider>
  </StrictMode>,
);
