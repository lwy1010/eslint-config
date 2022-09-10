# @7inch/eslint-config

[![npm](https://img.shields.io/npm/v/@7inch/eslint-config-base)](https://npmjs.com/package/@7inch/eslint-config-base)

[English](README.md) | [中文](README.zh-CN.md)

## Introduction

My eslint config preset, it works well with JavaScript/Typescript/React.js/Vue.js/Node.js projects.

## Usage

Take Vue.js project for example:

### Install

```sh
npm i eslint  @7inch/eslint-config-vue -D
```

### Config `.eslintrc.js`

```js
module.exports = {
  extends: ["@7inch/eslint-config-vue"],
};
```

### Config `.eslintignore`

```txt
dist
public
```

### Add script for package.json

```json
{
  "scripts": {
    "eslint": "eslint \"**/*.{vue,ts,js}\" --fix"
  }
}
```

### Config VSCode auto fix

Create `.vscode/settings.json`

```js
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  }
}
```

Checkout [eslint](https://eslint.org/) for more usage details.

## License

Made with ❤️ Published under [MIT License](./LICENSE).
