import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-ignore
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{
				find: /^~/,
				replacement: '',
			},
			{
				find: '@/utils',
				// @ts-ignore
				replacement: resolve(__dirname, 'src/utils'),
			},
			{
				find: '@/hooks',
				// @ts-ignore
				replacement: resolve(__dirname, 'src/hooks'),
			},
			{
				find: '@/components',
				// @ts-ignore

				replacement: resolve(__dirname, 'src/components'),
			},
			{
				find: '@/api',
				// @ts-ignore

				replacement: resolve(__dirname, 'src/api'),
			},
			{
				find: '@/pages',
				// @ts-ignore

				replacement: resolve(__dirname, 'src/pages'),
			},
			{
				find: '@/assets',
				// @ts-ignore

				replacement: resolve(__dirname, 'src/assets'),
			},
		],
	},
	build: {
		target: ['edge90', 'chrome90', 'firefox90', 'safari15'],
	},
})
