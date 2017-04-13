module.exports = {
  use: [
    'postcss-smart-import',
    'postcss-cssnext',
    'cssnano',
    'postcss-inline-svg'
  ],
  "cssnano": {
    autoprefixer: false,
    zindex: false
  },
  input: 'src/modules/*.css',
  dir: 'dist'
};
