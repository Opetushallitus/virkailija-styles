module.exports = {
  use: [
    'postcss-smart-import',
    'postcss-cssnext',
    'cssnano',
    'postcss-inline-svg',
    'postcss-reporter'
  ],
  'cssnano': {
    // postcss-cssnext already generates vendor-prefixes
    autoprefixer: false,
    // Preserve z-index values
    zindex: false
  },
  'postcss-reporter': {
    clearMessages: true
  },
  input: 'src/modules/*.css',
  dir: 'dist'
}
