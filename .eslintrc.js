module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'eslint-plugin-import-helpers',
		'react-hooks',
  ],
  rules: {
    'import-helpers/order-imports': [
      'warn',
      {
          newlinesBetween: 'always',
          groups: [
              '/^react/',
              'module',
              '/^~/',
              ['parent', 'sibling', 'index'],
          ],
          alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js'] }
    ],
    'import/prefer-default-export': 'off',
		'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/forbid-prop-types': 'off'
  },
	settings: {
	    "import/resolver": {
	      "babel-plugin-root-import": {
	        rootPathSuffix: "src"
	      }
	    }
	  }
};
