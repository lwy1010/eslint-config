module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    // using the const declaration is better.
    "prefer-const": "error",
  },
};
