import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/e-commerceAmerike/',
  server: {
    port: 3000,
  },
  css: {
    postcss: './postcss.config.js',
  },
});
