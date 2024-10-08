import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import generateFile from 'vite-plugin-generate-file';
import { qrcode } from 'vite-plugin-qrcode';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    generateFile({
      output: 'src/generated/version.ts',
      contentType: `export const VERSION = '${new Date().toISOString()}'`
    }),
    qrcode()
  ],
  server: {
    host: '127.0.0.1'
  }
})
