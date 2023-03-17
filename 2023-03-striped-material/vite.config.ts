import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/2023-03-striped-material/',
  build: {
    target: 'es2022',
    emptyOutDir: true,
    outDir: '../dist/2023-03-striped-material',
  },
})
