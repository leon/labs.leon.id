import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/2023-02-maze/',
	plugins: [svelte()],
	build: {
		emptyOutDir: true,
		outDir: '../dist/2023-02-maze',
	},
	ssr: {
		noExternal: ['three', 'troika-three-text'],
	},
})
