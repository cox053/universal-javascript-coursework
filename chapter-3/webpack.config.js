const webpack = require('webpack');
const path = require('path');

const CLIENT = path.resolve(__dirname, 'client');
const OUTPUT = path.resolve(__dirname, 'build/client');

module.exports = config = {
  entry: path.join(CLIENT, 'index.jsx'),
  output: {
    path: OUTPUT,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      include: CLIENT
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
