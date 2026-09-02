import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const ECONVERSE_PRODUCTS_ORIGIN = 'https://app.econverse.com.br';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: ECONVERSE_PRODUCTS_ORIGIN,
        changeOrigin: true,
        secure: true,
        rewrite: (path) =>
          path.replace(
            /^\/api/,
            '/teste-front-end/junior/tecnologia/lista-produtos',
          ),
      },
    },
  },
});
