import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const eslintConfig = [
	...nextCoreWebVitals,
	...nextTypescript,
	{
		ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
	},
	{
		rules: {
			'no-restricted-imports': ['error', { patterns: ['../*'] }],
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{ vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
			],
		},
	},
	{
		files: ['*.js'],
		rules: { '@typescript-eslint/no-require-imports': 'off' },
	},
];

export default eslintConfig;
