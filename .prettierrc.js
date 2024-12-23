module.exports = {
  "singleQuote": true,
  "trailingComma": "all",
  "proseWrap": "never",
  printWidth: 120,
  overrides: [
    {
      files: ['**/*.scss'],
      options: {
        printWidth: 150,
      },
    },
  ],
};
