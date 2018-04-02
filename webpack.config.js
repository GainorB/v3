const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // creates the index.html file for us

module.exports = {
  mode: 'development',
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
      // allows importing/using css files (if I don't want to use styled-jsx)
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      // allows image support in .js files
      // creates an /images folder in /dist when application is built
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash]_[name].[ext]',
              outputPath: 'images/',
            },
          },
          // compress images
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      },
    ],
  },
  // creates the template for the index.html file that react is injected into
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My React App',
      hash: true,
      template: './src/index.html', // Load a custom template
    }),
  ],
  // webpack-dev-server options
  devServer: {
    port: 1337,
  },
  devtool: 'cheap-module-eval-source-map',
};
