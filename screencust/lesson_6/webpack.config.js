'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const USER = process.env.USER || 'Petr I';
const webpack = require('webpack');

module.exports = {
  entry: "./home",
  output: {
    filename: "build.js",
    library: "home"
  },

  watch: NODE_ENV == 'development',

  watchOptions: {aggregateTimeout: 100},

  devtool: NODE_ENV == 'development' ? 'cheep-inline-module-source-map' : null,

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      USER: JSON.stringify(USER)
    })
  ]
}
