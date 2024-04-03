/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    // 'eslint:recommended',
    // '@vue/eslint-config-typescript',
    '@vue/eslint-config-airbnb-with-typescript',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'import/extensions': [
      'off',
      'always',
      {
        js: 'never',
        vue: 'never',
        ts: 'never',
      },
    ],
    'linebreak-style': 0,
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'no-var': 'error',
    semi: 'error',
    indent: ['error', 2],
    'no-multi-spaces': 'error',
    'space-in-parens': 'error',
    'no-multiple-empty-lines': 'error',
    'prefer-const': 'error',
    'no-use-before-define': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
  },
};
