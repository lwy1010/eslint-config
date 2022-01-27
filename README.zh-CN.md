# @7inch/eslint-config

[![npm](https://img.shields.io/npm/v/@7inch/eslint-config-base)](https://npmjs.com/package/@7inch/eslint-config-base)

[English](README.md) | [中文](README.zh-CN.md)

## 介绍

我的 eslint 配置集合, 规则友好且适用于 Vue.js / Node.js 项目(包括 JS and TS)。

## 用法

以 Vue.js 项目为例：

### 安装

```sh
npm i eslint  @7inch/eslint-config-vue -D
```

### 配置 `.eslintrc.js`

```js
module.exports = {
  extends: ["@7inch/eslint-config-vue"],
};
```

### 配置 `.eslintignore`

```txt
dist
public
```

### 在 package.json 中添加 eslint 脚本

```json
{
  "scripts": {
    "eslint": "eslint \"**/*.{vue,ts,js}\" --fix"
  }
}
```

### 配置 VSCode 代码自动修复

创建 `.vscode/settings.json`

```js
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  }
}
```

更多详情请移步 [eslint 文档](https://eslint.org/)

## License

MIT
