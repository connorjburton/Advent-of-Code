module.exports = {
	entry: './src/main.js',
	output: {
		path: './build/',
		filename: 'build.js'
	},
	module: {
	  loaders: [
	    {
	      test: /\.js?$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel' // 'babel-loader' is also a legal name to reference
	    }
	  ]
	}
}