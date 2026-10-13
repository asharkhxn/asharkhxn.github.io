import React, { type ComponentType } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const currentPage = document.documentElement.dataset.page ?? 'home';
let Page: ComponentType | undefined;
if (currentPage === 'timeline') {
  Page = (await import('./pages/Timeline')).default;
} else if (currentPage === 'beyond-code') {
  Page = (await import('./pages/BeyondCode')).default;
}

const root = document.getElementById('root')!;
const content = (
  <React.StrictMode>
    <App Page={Page} currentPage={currentPage} />
  </React.StrictMode>
);

// Production HTML already contains the page for its first transition frame.
// The development server serves an empty root, so mount normally there.
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, content);
} else {
  ReactDOM.createRoot(root).render(content);
}
