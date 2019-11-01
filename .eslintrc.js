module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "plugin:nuxt/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/vue",
    "plugin:vue/base",
    "@nuxtjs/eslint-config-typescript",
    "prettier/@typescript-eslint",
    "prettier/babel",
    "prettier/flowtype",
    "prettier/standard",
    "prettier/unicorn"
  ],
  plugins: ["prettier"],
  // add your custom rules here
  rules: {
    "beforeStatementContinuationChars": 0,
    "quotes": [2, "double", { "avoidEscape": false }],
    "nuxt/no-cjs-in-config": "off",
    "prettier/prettier": ["error"],
    "no-console": "off",
    "vue/html-self-closing": "off",
    "semi": 0,
    "vue/singleline-html-element-content-newline": "off",
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "never"
      }
    ]
  }
};
