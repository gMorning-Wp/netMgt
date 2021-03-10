//代码检测规范，请将项目处于工作区根目录下
module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": [
      "warn",
      {
        singleQuote: false,
        semi: true,
        trailingComma: "es5",
        bracketSpacing: true,
      },
    ],
  },
};
