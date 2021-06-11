module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],

  // add your custom rule here with comments here.
  rules: {
    // using the const declaration is better.
    'prefer-const': 'error',

    // component name in template must use kebab-case style.
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    // require name property for a component.
    'vue/require-name-property': 'error',
    // name property for a component must be PascalCase style.
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    // custom event name must be kebab-case style.
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    // setup self-closing style
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'never',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    // using hyphenated attribute name on custom component
    'vue/attribute-hyphenation': ['error', 'always'],

    // disallow unused variables
    '@typescript-eslint/no-unused-vars': ['error'],
    // don't require explicit return and argument types on exported functions' and classes' public class methods
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
  },
};
