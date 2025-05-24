import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './project',        // <-- add this to set the root folder
  base: '/Resume/',         // essential for GitHub Pages repo subpath
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-globe.gl', 'three', 'd3'],
    exclude: ['lucide-react']
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    fs: {
      strict: false
    }
  }
});

