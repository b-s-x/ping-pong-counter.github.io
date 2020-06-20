const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/js/index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'index.html'
    }),
    new CleanWebpackPlugin( )
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test:/\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ],
      },
    ],
  },
};
