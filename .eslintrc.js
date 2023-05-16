module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'sonarjs'],
	parserOptions: { project: './tsconfig.eslint.json' },
	settings: {
		'import/resolver': {
			alias: {
				map: [['~', './src']],
				extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
			},
		},
	},
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
		{
			files: ['*.ts', '*.tsx'],
			extends: ['plugin:@next/next/recommended'],
		},
	],
	plugins: ['unused-imports'],
	rules: {
		'no-restricted-imports': [
			'error',
			{
				patterns: ['../*'],
			},
		],
		'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{ vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
		],
		'sonarjs/cognitive-complexity': 'off',
		'sonarjs/no-duplicate-string': 'off',
		complexity: 'off',
	},
};
