import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
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
				replacement: resolve(__dirname, 'src/utils'),
			},
			{
				find: '@/hooks',
				replacement: resolve(__dirname, 'src/hooks'),
			},
			{
				find: '@/components',
				replacement: resolve(__dirname, 'src/components'),
			},
			{
				find: '@/api',
				replacement: resolve(__dirname, 'src/api'),
			},
			{
				find: '@/pages',
				replacement: resolve(__dirname, 'src/pages'),
			},
			{
				find: '@/assets',
				replacement: resolve(__dirname, 'src/assets'),
			},
		],
	},
})
