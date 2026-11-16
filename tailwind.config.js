/**
 * Palette borrowed from my Sola Scriptura slide theme.
 * `scripture` red is reserved for Scripture. Do not use it for decoration.
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {
			colors: {
				parchment: '#F4ECDF',
				vellum: '#E2D3BD',
				dim: '#C9B79C',
				stone: '#8A7A68',
				umber: '#4A3F35',
				charcoal: '#231E1A',
				ink: '#16120F',
				scripture: { DEFAULT: '#721111', light: '#D0715F' },
			},
			fontFamily: {
				display: ['var(--font-display)', 'Georgia', 'serif'],
				sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
				mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
			},
		},
	},
	plugins: [],
};
