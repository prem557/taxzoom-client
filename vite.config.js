// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use "/" for Vercel root deployments. If you ever host at a subpath, change it then.
export default defineConfig({
  base: '/',               // <- IMPORTANT: ensure this is "/" for root deploys
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  server: {
    // dev-only options (no-op on Vercel)
  }
})
