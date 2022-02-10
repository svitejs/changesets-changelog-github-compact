module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:node/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'prettier'
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	plugins: ['@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	rules: {
		'no-console': 'off',
		'no-debugger': 'error',
		'node/no-deprecated-api': 'off',
		'node/no-unpublished-import': 'off',
		'node/no-unpublished-require': 'off',
		'node/no-unsupported-features/es-syntax': 'off',
		'no-process-exit': 'off',
		'node/no-missing-import': [
			'error',
			{
				tryExtensions: ['.js', '.ts', '.json', '.node']
			}
		]
	},
	overrides: [
		{
			files: ['scripts/**'],
			env: {
				node: true,
				browser: false
			}
		}
	]
};
