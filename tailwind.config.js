/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'bg-top': "url('/src/assets/img/bg-top.png')",
				'footer-texture': "url('/img/footer-texture.png')",
			},
		},
	},
	plugins: [],
}
