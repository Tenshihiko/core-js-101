module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "linebreak-style": ["warn", "windows"],

    "no-unused-vars": ["warn", { "args": "none", "varsIgnorePattern": "CustomError" }],
    "no-plusplus": "off",
    "no-bitwise": "off",
    "no-nested-ternary": "warn"
  },
};
