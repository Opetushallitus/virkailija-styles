const variables = fs.readFile("dist/variables.json");

module.exports = {
  use: [
    'postcss-cssnext',
    'cssnano'
  ],
  "cssnano": {
    zindex: false
  },
  "postcss-cssnext": {
    variables
  },
  input: 'src/modules/*.css',
  dir: 'dist'
};
