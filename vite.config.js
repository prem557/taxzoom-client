import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/taxzoom-client/',  // 👈 this is now correctly placed
  plugins: [react()],
})
