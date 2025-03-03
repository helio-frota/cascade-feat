export default {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'type-empty':[1, 'always'],
    'subject-empty':[1, 'always',5]
  },
}
