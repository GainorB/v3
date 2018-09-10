const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  // entry file for react
  entry: './src/index.js',
  // where the compiled code goes
  output: {
    path: path.join(__dirname, 'dist'),
    filename: isProduction ? 'assets/js/[name].[contenthash].js' : 'assets/js/[name].[hash].js',
    publicPath: '/', // enable in Prod
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: !isProduction ? 'source-map' : 'inline-source-map',
  // loaders
  module: {
    rules: [
      { test: /\.css$/, use: [{ loader: 'style-loader' }] },
      {
        test: /\.(js|jsx)$/, // (RegEXP) anything that is .js/.jsx will be compiled by babel
        exclude: [/node_modules/, /dist/],
        use: {
          loader: 'babel-loader',
        },
      },
      // handle making a single css file
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      // allows image support in .js files
      // creates an /images folder in /build when application is built
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
              outputPath: 'assets/images',
              useRelativePath: isProduction,
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
      // handle fonts
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts',
            },
          },
        ],
      },
    ],
  },
  // creates the template for the index.html file that react is injected into
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new FriendlyErrorsWebpackPlugin(), // easier to read error messages
    new CleanWebpackPlugin(['dist']), // deletes the build folder in between builds
    // points to the file where react is injected
    new HtmlWebpackPlugin({
      title: 'Gainor Bostwick | Full Stack Developer',
      template: './src/index.html', // Load a custom template
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: !isProduction ? 'assets/css/[name].css' : 'assets/css/[name].[hash].css',
      chunkFilename: !isProduction ? 'assets/css/[id].css' : 'assets/css/[id].[hash].css',
    }),
    new ManifestPlugin(), // will generate a manifest.json file in your root output directory with a mapping of all source file names to their corresponding output file,
  ],
  // webpack-dev-server options
  devServer: {
    contentBase: './',
    noInfo: true, // disable webpack bundle information on startup
    historyApiFallback: true, // serving index.html in place of any 404s
    disableHostCheck: true, // fix this error: Invalid Host header
    https: false, // enable SSL for localhost environment?
    port: 3002,
    quiet: true, // turns off webpack output including error message because FriendlyErrorsWebpackPlugin is enabled
    // proxy: [
    //   {
    //     context: ['/auth', '/api'],
    //     target: 'http://[::1]:8080',
    //     secure: false,
    //     changeOrigin: true,
    //   },
    // ],
  },
  performance: {
    hints: false, // disable performance warnings
  },
  // It's also good practice to extract third-party libraries,
  // such as lodash or react, to a separate vendor chunk as they are less
  // likely to change than our local source code. This step will allow clients
  // to request even less from the server to stay up to date.
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
