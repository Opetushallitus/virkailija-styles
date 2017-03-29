module.exports = {
  plugins: [
    require('postcss-smart-import'),
    require('postcss-cssnext')
  ],
  input: 'src/index.css',
  output: 'oph-styles.css'
};
