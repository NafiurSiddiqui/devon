/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}', './src/*.{js, ts, jsx, tsx}'],
	theme: {
		screens: {
			'android-md': '400px',
			'android-md/2': '450px',
			tablet: '640px',
			'tablet-md': '768px',
			laptop: '1024px',
			desktop: '1280px',
			'desktop-md': '1536px',
		},
		extend: {
			colors: {
				secondary: '#64748b',
			},
		},
	},
	plugins: [],
};
