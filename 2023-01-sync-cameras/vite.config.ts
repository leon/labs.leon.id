import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/2023-01-sync-cameras/',
  build: {
    emptyOutDir: true,
    outDir: '../dist/2023-01-sync-cameras',
  },
})
