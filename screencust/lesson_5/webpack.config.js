'use strict';

module.exports = {
  entry: "./home",
  output: {
    filename: "build.js",
    library: "home"
  },

  watch: true,

  watchOptions: {aggregateTimeout: 100},

  devtool: 'cheep-inline-module-source-map'
}
