const HtmlWebPackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin({
  template: './client/src/index.html',
  filename: './index.html'
});

module.exports = {
  mode: 'development',
  entry: "./client/src/index.js",
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node-modules/,
      use: { loader: 'babel-loader' }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }
  ]},
  output: {
    path: __dirname + '/client/dist',
    filename: 'bundle.js'
  },
  plugins: [htmlPlugin],
  stats: {
    errorDetails: true
  }
}