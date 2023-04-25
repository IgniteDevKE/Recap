import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createPWA } from 'vite-plugin-pwa'

const pwaPlugin = createPWA({
  config: require('./pwa.config.js'),
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pwaPlugin],
})
