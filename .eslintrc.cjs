module.exports = {
    env: {
        browser: true,
        es2022: true
    },
    extends: 'eslint:recommended',
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module'
    },
    rules: {
        'no-console': [
            'warn'
        ],
        indent: [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        quotes: [
            'error',
            'single'
        ],
        semi: [
            'error',
            'always'
        ]
    }
};