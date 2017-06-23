module.exports = {
  'env': {
    'es6': true,
    'jest': true,
    'node': true,
    'browser': true
  },
  'globals': {
    'React': true
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    ecmaVersion: 7,
    sourceType: 'module',
    'ecmaFeatures': {
      'jsx': true,
      'impliedStrict': true,
      'experimentalObjectRestSpread': true,
    }
  },
  'plugins': [
    'import',
    'react'
  ],
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'rules':{
    'no-console': 0,
    "semi": "error",
  }
};
