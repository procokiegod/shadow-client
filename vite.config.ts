import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// If your site is at username.github.io/repo-name/ change base to '/repo-name/'
// If using a custom domain or username.github.io/ leave as '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
});

