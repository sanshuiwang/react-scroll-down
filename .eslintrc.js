module.exports = {
  parser: 'babel-eslint', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2018, // specify the version of ECMAScript syntax you want to use: 2015 => (ES6)
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // enable JSX
      impliedStrict: true // enable global strict mode
    }
  },
  extends: [
    'airbnb', // Uses airbnb, it including the react rule(eslint-plugin-react/eslint-plugin-jsx-a11y)
    'airbnb/hooks',
    'plugin:promise/recommended',
    'prettier', // Use prettier, it can pretty file before executing eslint --fix
    'prettier/react' // Use prettier/react to pretty react syntax
  ],
  settings: {},
  env: {
    browser: true // enable all browser global variables
  },
  plugins: ['react-hooks', 'promise', 'babel', 'prettier'], // ['prettier', 'react-hooks']
  rules: {
    'max-len': [
      'error',
      {
        code: 100
      }
    ],
    'react/prop-types': ['error'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
}
