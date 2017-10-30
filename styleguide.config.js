const path = require('path');

module.exports = {
  webpackConfig: require('./config/webpack.config.dev.js'),
  title: "react-interactions",
  showCode: true,
  showSidebar: false,
  styleguideDir: "styleguide/build",
  theme: {
    color: {
      link: '#0066FF',
      linkHover: '#0047B3'
    }
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    return `import ${name} from 'react-interactions';`;
  },
  styleguideComponents: {
    ComponentsRenderer: path.join(__dirname, 'styleguide/components/Components/ComponentsRenderer')
  },
  require: [
    path.join(__dirname, 'styleguide/style.css')
  ]
}; 