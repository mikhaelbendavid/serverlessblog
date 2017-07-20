var glob = require('glob');
var path = require('path');
var nodeExternals = require('webpack-node-externals');

// Required for Create React App Babel transform
process.env.NODE_ENV = 'production';

module.exports = {
	//Use all JS files in project root (except webpack config)
	//as an entry 
	entry: globEntries('!(webpack.config).js'),
	target: 'node',
	//Since aws-sdk is not compatible with webpack,
	//we exclude all node dependencies
	externals: [nodeExternals()],
	//Run babel on all .js files and skip node modules
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			include: __dirname,
			exclude: /node_modules/,
		}]
	},
	//Creating multiple API's in this guide, and we are going
	//to create a js file for each, we need this output block
	output: {
		libraryTarget: 'commonjs',
		path: path.join(__dirname, '.webpack'),
		filename: '[name].js'
	},
};

function globEntries(globPath) {
	var files = glob.sync(globPath);
	var entries = {};

	for (var i = 0; i < files.length; i++) {
		var entry = files[i];
		entries[path.basename(entry, path.extname(entry))] = './' + entry;
	}

	return entries;
}







