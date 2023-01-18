import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    injectRegister: 'auto',
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Jupit',
        short_name: 'Jupit',
        description: 'A place for everyone who want to buy and sell digital assets.',
        theme_color: '#1C1C93',
        icons: [
          {
            src: 'Jupit.svg',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'Jupit.svg',
            sizes: '192x192',
            type: 'image/png',
            purpose: "maskable"
          },
          {
            src: 'Jupit.svg',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
    workbox: {
      clientsClaim: true,
      skipWaiting: true,
    },
    devOptions: {
      enabled: true
    },
  })],
})