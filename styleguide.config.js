const path = require('path');

module.exports = {
	webpackConfig: require('./config/webpack.config.dev.js'),
	title: "react-interactions",
	showUsage: true,
	showCode: true,
	showSidebar: false,
	styleguideDir: "styleguide/build",
	theme: {
		color: {
			link: '#0066FF',
			linkHover: '#0047B3'
		},
		fontFamily: {
			base: '"Graphik", Arial, sans-serif'
		},
		fontSize: {
			h2: '28px'
		}
	},
	getComponentPathLine(componentPath) {
		const name = path.basename(componentPath, '.js');
		return `import ${name} from 'react-interactions'`;
	},
	styleguideComponents: {
		ComponentsRenderer: path.join(__dirname, 'styleguide/components/Components/ComponentsRenderer')
	},
	require: [
		path.join(__dirname, 'node_modules/chramework/dist/main.css'),
		path.join(__dirname, 'styleguide/style.css')
	],
	template: path.join(__dirname, 'styleguide/template.html')
};