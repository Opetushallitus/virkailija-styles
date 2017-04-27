module.exports = {
  use: [
    'postcss-smart-import',
    'postcss-cssnext',
    'postcss-inline-svg',
    'postcss-reporter'
  ],
  'postcss-reporter': {
    clearMessages: true
  },
  input: 'src/index.css',
  output: 'oph-styles.css'
}
