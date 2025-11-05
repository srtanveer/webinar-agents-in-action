import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vercel from 'vite-plugin-vercel'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vercel()],
  // publicDir: 'public',
  // base: '/',
  // build: {
  //   outDir: 'dist',
  //   assetsDir: 'assets',
  //   copyPublicDir: true
  // }
})
