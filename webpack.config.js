const path = require('path');

module.exports = {
	entry: './src/ts/Controller.ts',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'assets'),
	},
	devServer: {
		// Serve index.html as the base
		static: {
			directory: path.resolve(__dirname, 'assets'),
		},
		// Enable hot reloading
		hot: true,

		port: 3000,
	},
};
