/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}', './src/*.{js, ts, jsx, tsx}'],
	theme: {
		extend: {
			colors: {
				secondary: '#64748b',
			},
		},
	},
	plugins: [],
};
