/* global __dirname */
const path = require('path');

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: path.join(__dirname, 'node_modules'),
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
  },
};
