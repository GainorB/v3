const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // creates the index.html file for us

module.exports = {
  // entry file for react
  entry: './src/index.js',
  // where the compiled code goes
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  // loaders
  module: {
    rules: [
      {
        test: /\.js$/, // (RegEXP) anything that is .js/.jsx will be compiled by babel
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My React App',
      template: './src/index.html',
    }),
  ],
};
