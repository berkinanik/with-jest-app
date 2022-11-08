module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
    'plugin:@next/next/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'testing-library',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
