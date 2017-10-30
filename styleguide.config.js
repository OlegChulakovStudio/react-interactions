const path = require('path');

module.exports = {
  webpackConfig: require('./config/webpack.config.dev.js'),
  title: "react-interactions",
  showCode: true,
  styleguideDir: "styleguide/build",
  require: [
    path.join(__dirname, 'styleguide/style.css')
  ]
}; 