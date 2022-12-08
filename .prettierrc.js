module.exports = {
  arrowParens: 'avoid',
  printWidth: 100,
  proseWrap: 'always',
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  overrides: [
    {
      files: '**/*.json',
      options: {
        printWidth: 200
      }
    }
  ]
}
