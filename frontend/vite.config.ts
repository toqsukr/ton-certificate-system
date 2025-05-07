import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import fs from 'fs'
import path from 'path'
import Unfonts from 'unplugin-fonts/vite'
import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    nodePolyfills(),
    Unfonts({
      google: {
        families: ['Inter'],
      },
    }),
  ],
  server: {
    https: {
      key: fs.readFileSync('./.cert/client.key'),
      cert: fs.readFileSync('./.cert/client.crt'),
    },
    host: 'ton-certify.ton',
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src/app'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@features': path.resolve(__dirname, './src/features'),
      '@entities': path.resolve(__dirname, './src/entities'),
      '@shared': path.resolve(__dirname, './src/shared'),
    },
  },
})
