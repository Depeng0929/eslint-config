module.exports = {
  extends: [
    'plugin:react/recommended',
    '@depeng0929/eslint-config-basic',
  ],
  settings: {
    react: {
      version: '17.0',
    },
  },
  rules: {
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
  },
}