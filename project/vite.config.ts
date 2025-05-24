import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'project',       // << here, points to your subfolder with index.html
  base: '/Resume/',
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-globe.gl', 'three', 'd3'],
    exclude: ['lucide-react']
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('three')) return 'vendor-three';
            if (id.includes('d3')) return 'vendor-d3';
            return 'vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000,
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
