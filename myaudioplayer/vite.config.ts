import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ['**/*.{js,css,html,png,ico,svg}'],
      },
      manifest: {
        name: 'My Audio Player',
        short_name: 'My Audio Player',
        description: 'My Audio Player',
        theme_color: '#ffffff',
        icons: [
          {
            src: './public/icon36x36.png',
            sizes: '36x36',
            type: 'image/png',
          },
          {
            src: './public/icon48x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: './public/icon72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: './public/icon96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: './public/icon144x144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: './public/icon192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
});