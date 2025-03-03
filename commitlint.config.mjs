export default {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'type-empty':[0, 'always'],
    'subject-min-length':[0, 'always']
  },
}
