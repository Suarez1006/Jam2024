module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: "./",
    project: './tsconfig.json',
  },
  extends: [
    "@killabunnies/eslint-config"
  ],
  rules: {}
}