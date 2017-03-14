var webpack = require('webpack');

var config = {
  context: __dirname + '/static/js', // `__dirname` is root of project and `src` is source
  entry: {
    app: './app.js'
  },
  output: {
    path: __dirname + '/dist', // `dist` is the destination
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  devServer: {
    hot: true
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};

module.exports = config;
