module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:jsx-a11y/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
    ],
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
    },
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            tsx: true,
        },
    },
    globals: {
        React: true,
        JSX: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/parser': {
            '@typescript-eslint/parser': ['.ts', '.tsx', '.jx', '.jsx', '.*'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: false,
            },
        },
    },
    plugins: ['import', 'react', 'react-hooks', '@typescript-eslint'],
    rules: {
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'max-len': ['error', 120],
        'no-use-before-define': 'off',
        'no-unused-vars': 'warn',
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'interface',
                format: ['PascalCase'],
                custom: {
                    regex: '^I[A-Z][a-z]',
                    match: false,
                },
            },
        ],
        'react/react-in-jsx-scope': 'off',
        'no-underscore-dangle': 'off',
        'explicit-module-boundary-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'arrow-body-style': 'off',
        'import/no-unresolved': ['error', { ignore: ['.css', '.scss', '.sass'] }],
        'jsx-a11y/anchor-is-valid': 'off',
        'react/function-component-definition': 'off',
        'import/extensions': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'default-param-last': 'off',
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: ['const', 'let', 'export'],
            },
            {
                blankLine: 'always',
                prev: ['const', 'let', 'export'],
                next: '*',
            },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'export'],
                next: ['const', 'let', 'export'],
            },
            {
                blankLine: 'always',
                prev: '*',
                next: ['if', 'class', 'for', 'do', 'while', 'switch', 'case', 'try'],
            },
            {
                blankLine: 'always',
                prev: ['if', 'class', 'for', 'do', 'while', 'switch', 'case', 'try'],
                next: '*',
            },
            {
                blankLine: 'any',
                prev: ['case'],
                next: ['case', 'default'],
            },
            { blankLine: 'always', prev: '*', next: 'return' },
        ],
    },
}