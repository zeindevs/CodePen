import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				rocket: resolve(__dirname, 'pages/tw-rocket-crash.html'),
			},
		},
	},
})
