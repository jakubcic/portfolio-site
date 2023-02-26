/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Inter', 'sans-serif'],
				//'sans': ['Noto Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
