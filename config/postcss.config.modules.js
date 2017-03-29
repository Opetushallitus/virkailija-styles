module.exports = {
  plugins: [
    require('postcss-smart-import'),
    require('postcss-cssnext'),
    require('cssnano')({
      zindex: false
    })
  ],
  input: 'src/modules/*.css',
  dir: 'dist'
};
