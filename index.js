module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['vue'],
  // add your custom rule here with comments here.
  rules: {
    /* 
      JavaScript
    */
    // using the const declaration is better.
    'prefer-const': 'error',

    /* 
      Vue.js
    */
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
  },
};
