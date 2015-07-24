var path = require("path");
var webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: {
    index: './app/javascripts/entry/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist', 'javascripts'),
    filename: '[name]-bundle.js',
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loader: "style!css!sass"
    }, {
      test: /\.woff$/,
      loader: 'url-loader?prefix=font/&limit=5000'
    }, ]
  },
  resolve: {
    root: [path.join(__dirname, "bower_components")],
    alias: {
      ap: path.join(__dirname, 'fe', 'ap'),
      shared: path.join(__dirname, 'fe', 'ap', 'shared'),

    }
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    )
  ]
};
