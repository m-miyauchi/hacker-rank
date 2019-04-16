module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    // 'eslint:recommended',
    'airbnb',
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'no-plusplus': 0,
  }
}