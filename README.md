# @7inch/eslint-config

## Introduction

A friendly eslint config preset.

## Install

### For base JavaScript project

```sh
npm i eslint prettier @7inch/eslint-config-base -D
```

### For Vue.js project

```sh
npm i eslint prettier @7inch/eslint-config-vue -D
```

### For Node.js project

```sh
npm i eslint prettier @7inch/eslint-config-node -D
```

## Usage

Create a .eslintrc.js configuration file in the root of your project, take Vue.js project for example:

```js
module.exports = {
  extends: ["@7inch/eslint-config-vue"],
};
```

That's all, checkout [Configuring ESLint](https://eslint.org/docs/user-guide/configuring/) to get more details.

## License

MIT
