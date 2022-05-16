module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts'],
            },
            alias: {
                map: [
                    ['@', './src'],
                    ['components', './src/components'],
                    ['store', './src/store'],
                ],
                extensions: ['.ts', '.js', 'jsx', '.json'],
            },
        },
        'import/extensions': [
            'error',
            'always',
            {
                js: 'never',
                mjs: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
    extends: ['plugin:vue/vue3-recommended', 'airbnb-base', 'prettier', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {},
}
