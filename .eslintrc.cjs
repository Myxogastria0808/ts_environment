module.exports = {
    root: true, // 上位ディレクトリにある他のeslintrcを参照しないようにする
    env: {
        browser: true, //ブラウザ対応
        es6: true, //es6対応
        node: true, //node.jsに対応
        commonjs: true, //CommonJSに対応
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TypeScriptでチェックされる項目をLintから除外する設定
        'prettier', // prettierのextendsは他のextendsより後に記述する
    ],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module', //moduleかscriptを指定 moduleにすることで、import文 export文 が利用できる。
        project: './tsconfig.json', // TypeScriptのLint時に参照するconfigファイルを指定　(tsconfigRootDirからの相対パス)
        // tsconfigRootDir: __dirname, //tsconfigRootDirはプロジェクトルートの絶対パスを指定する
    },
    ignorePatterns: ['*.cjs'],
    rules: {},
};
