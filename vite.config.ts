import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  server: { port: 7777, host: '0.0.0.0' },
  preview: { port: 7777, host: '0.0.0.0' },
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, '.') },
  },
  build: {
    // The Travel page pulls in three.js / react-globe.gl (~1.8 MB) and is
    // already lazy-loaded from App.tsx, so the default 500 kB warning is noise.
    chunkSizeWarningLimit: 2000,
  },
});
