module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true
	},
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		'no-console': 'warn',
		indent: [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	}
};