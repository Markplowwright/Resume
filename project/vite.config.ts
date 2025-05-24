import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
base: '/Resume/', 
export default defineConfig({
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
