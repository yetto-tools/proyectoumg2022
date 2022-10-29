module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/no-set-state': 'on',
    'react/prop-types': ['off'],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'only-multiline'],
    semi: [1, 'always'],
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' },
    ],
  },
};
