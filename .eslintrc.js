module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 0,
    'quotes': 'off',
    'semi': 'off',
    'comma-dangle': 'off',
    'singlequote': 'off',
    'vue/multi-word-component-names': 0,
    'eol-last': 0
  }
}
