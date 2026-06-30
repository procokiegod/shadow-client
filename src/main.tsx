import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ShadowClient } from './shadow-client.js';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <ShadowClient />
  </BrowserRouter>
);

