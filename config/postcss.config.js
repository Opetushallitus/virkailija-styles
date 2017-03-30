module.exports = {
  use: [
    'postcss-smart-import',
    'postcss-cssnext',
    'cssnano'
  ],
  "cssnano": {
    autoprefixer: false,
    zindex: false
  },
  input: 'src/index.css',
  output: 'oph-styles.css'
};
