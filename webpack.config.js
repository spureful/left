const webpack = require("webpack");
const path = require("path");


module.exports = {
	  entry: {
	  	scripts: './src/js/index.js'

	   },
	   output: {
    filename: "[name].js",
    chunkFilename: "[name].js", 
    path: path.resolve(__dirname, '/build/js'),
    publicPath: 'build'

  },
  module: {
  	rules: [{
  		test: /\.js$/,
  		loader: 'babel-loader',
  		exclude: '/node-modules/'

  	}]
  }

}