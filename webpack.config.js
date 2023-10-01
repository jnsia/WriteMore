const path = require('path');
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './public/js/index.js',
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: 'bundle.js',
  },
  experiments: {
    topLevelAwait: true,
  },
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "buffer": require.resolve("buffer/"),
      "os": require.resolve("os-browserify/browser"),
      "path": require.resolve("path-browserify"),
      "stream": require.resolve("stream-browserify")
    }
  },
  plugins: [
    new Dotenv(),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    })
  ]
};
