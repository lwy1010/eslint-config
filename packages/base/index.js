module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    // Using the const declaration is better.
    "prefer-const": "error",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: ["plugin:@typescript-eslint/recommended"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
      },
      rules: {
        // Disallow unused vars.
        "@typescript-eslint/no-unused-vars": "error",
        // Do not  require explicit return and argument types on exported functions' and classes' public class methods.
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
  ],
};
