module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],
	darkMode: 'class',
	plugins: [
		require('tailwindcss-safe-area'),
		require('flowbite/plugin'),
	],
}
