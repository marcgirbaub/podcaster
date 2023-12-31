module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["/*.js", "/*.cjs"],
  settings: {
    react: {
      version: "detect",
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh", "jsx-a11y", "react-hooks"],
  overrides: [
    {
      files: [
        "src/**/utils/**/isDataExpired.ts",
        "src/pages/DetailPodcastPage/DetailPodcastPage.tsx",
      ],
      rules: { "@typescript-eslint/no-non-null-assertion": "off" },
    },
    {
      files: [
        "src/pages/Home/Home.tsx",
        "src/pages/DetailPodcastPage/DetailPodcastPage.tsx",
        "src/api/**",
      ],
      rules: { "no-console": "off" },
    },
  ],
  rules: {
    "react-refresh/only-export-components": "warn",
    "no-console": "error",
  },
};
