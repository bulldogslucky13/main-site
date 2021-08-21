module.exports = {
	extends: ['plugin:@next/next/recommended'],
	parser: 'babel-eslint',
	parserOptions: { project: './tsconfig.eslint.json' },
	settings: {
		'import/resolver': {
			alias: {
				map: [['~', './src']],
				extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
			},
		},
	},
	plugins: ['unused-imports'],
	overrides: [
		{
			files: ['*.stories.tsx', 'src/pages/**/*.ts', 'src/pages/**/*.tsx', 'src/__mocks__/**/*.ts'],
			rules: {
				'import/no-default-export': 'off',
			},
		},
		{
			files: ['server.js'],
			rules: {
				'import/no-extraneous-dependencies': 'off',
				'no-console': 'off',
			},
		},
	],
	rules: {
		'@typescript-eslint/no-use-before-define': [
			'warn',
			{
				functions: false,
				typedefs: false,
			},
		],
		'no-restricted-imports': [
			'error',
			{
				patterns: ['../*'],
			},
		],
		'@typescript-eslint/no-unused-vars': 'off',
		'sonarjs/cognitive-complexity': 'off',
		'sonarjs/no-duplicate-string': 'off',
		complexity: 'off',
	},
};
