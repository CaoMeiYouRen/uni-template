const IS_PROD = process.env.NODE_ENV === 'production'
module.exports = {
    root: true,
    globals: {// 处理全局变量
        App: true,
        Page: true,
        Component: true,
        Behavior: true,
        getApp: true,
        getCurrentPages: true,
        plus: true,
        uni: true,
        Vue: true,
        wx: true,
        my: true,
        swan: true,
        tt: true,
        qh: true,
        qa: true,
        HWH5: true,
        weex: true,
        __id__: true,
        __uniConfig: true,
        __uniRoutes: true,
        __registerPage: true,
        UniViewJSBridge: true,
        UniServiceJSBridge: true,
        __PLATFORM__: true,
        __VERSION__: true,
        __GLOBAL__: true,
        __PLATFORM_TITLE__: true,
        __PLATFORM_PREFIX__: true,
    },
    env: {
        browser: true,
        es6: true,
        commonjs: true,
        node: true,
        mocha: true,
    },
    extends: [
        'cmyr/vue'
    ],
    plugins: [
        'vue',
        'html'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: new Date().getFullYear() - 1,
        sourceType: 'module',
        ecmaFeatures: {
            modules: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    rules: {
        '@typescript-eslint/no-empty-function': [0],

    },
}
