module.exports = {
  extends: ["plugin:@next/next/recommended"],
  parserOptions: { project: "./tsconfig.eslint.json" },
  settings: {
    "import/resolver": {
      alias: {
        map: [["~", "./src"]],
        extensions: [".js", ".jsx", ".ts", ".tsx", ".mjs"],
      },
    },
  },
  overrides: [
    {
      files: [
        "*.stories.tsx",
        "src/pages/**/*.ts",
        "src/pages/**/*.tsx",
        "src/__mocks__/**/*.ts",
      ],
      rules: {
        "import/no-default-export": "off",
      },
    },
    {
      files: ["server.js"],
      rules: {
        "import/no-extraneous-dependencies": "off",
        "no-console": "off",
      },
    },
  ],
  rules: {
    "no-restricted-imports": [
      "error",
      {
        patterns: ["../*"],
      },
    ],
    "sonarjs/cognitive-complexity": "off",
    "sonarjs/no-duplicate-string": "off",
    complexity: "off",
  },
};
