module.exports = {
  env: {
    "vue/setup-compiler-macros": true,
  },
  parser: "vue-eslint-parser",
  extends: ["plugin:vue/vue3-essential", "@7inch/eslint-config-base"],
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        // component name in template must use kebab-case style.
        "vue/component-name-in-template-casing": ["error", "kebab-case"],
        // require name property for a component.
        "vue/require-name-property": "error",
        // name property for a component must be PascalCase style.
        "vue/component-definition-name-casing": ["error", "PascalCase"],
        // custom event name must be kebab-case style.
        "vue/custom-event-name-casing": ["error", "kebab-case"],
        // setup self-closing style
        "vue/html-self-closing": [
          "error",
          {
            html: {
              void: "always",
              normal: "always",
              component: "never",
            },
            svg: "always",
            math: "always",
          },
        ],
        // using hyphenated attribute name on custom component
        "vue/attribute-hyphenation": ["error", "always"],
        // allow single name of component
        "vue/multi-word-component-names": "off",
      },
    },
  ],
};
