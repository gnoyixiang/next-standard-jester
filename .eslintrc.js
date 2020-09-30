// https://medium.com/@MartinCorevski/why-not-have-them-all-together-standard-js-with-prettier-and-eslint-fix-9a4d96ca0030
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    'jsx-quotes': ['error', 'prefer-single'],
    'generator-star-spacing': ['error', { before: true, after: true }]
  }
}
