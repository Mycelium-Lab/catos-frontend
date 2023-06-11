module.exports = {
  root: true,
  env: {
    es2020: true, // <- activate “es2020” globals
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: "@typescript-eslint/parser",
  },
  rules: {
    "vue/no-parsing-error": [
      2,
      {
        "invalid-first-character-of-tag-name": false,
      },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-non-null-assertion": "off",
    indent: ["error", 2],
    "no-unsafe-finally": "off",
    "space-before-function-paren": ["error", "always"],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-new": 0,
  },
};
