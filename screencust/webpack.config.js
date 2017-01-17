'use strict';

var NODE_ENV = process.env.NODE_ENV || 'development';
const USER = process.env.USER || 'Petr I';

const webpack = require('webpack');

module.exports = {
  entry: "./home",
  output: {
    filename: "build.js",
    library: "home"
  },

  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV:   JSON.stringify(NODE_ENV),
      USER:       JSON.stringify(USER),
      LANG:       '"ru"'
    })
  ],

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    modulesTemplates: ['*-loader', '*'],
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      }
    ]
  }
};

if (NODE_ENV == "production") {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings:       false,
        drop_console:  true,
        unsafe:         true
      }
    })
  );
}
