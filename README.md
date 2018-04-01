# Create Gainor App

A boilerplate for creating react apps. Includes hot module replacement and webpack's dev server.

# DEPENDENCIES

1.  React
2.  ReactDOM

# DEV DEPENDENCIES

1.  **html-webpack-plugin:** Simplifies creation of HTML files to serve your webpack bundles

## webpack

To compile & bundle assets together into one file to serve to the browser

2.  **webpack:**
3.  **webpack-dev-server:**
    Use webpack with a development server that provides live reloading. This should be used for development only.
4.  **webpack-cli:** allows me to run webpack commands. Will use for the build script

## babel

Turn ES6 (classes, imports, etc..) code into readable vanilla ES5

5.  **babel-core:**
6.  **babel-loader:** This package allows transpiling JavaScript files using Babel and webpack.
7.  **babel-preset-env:** Babel preset that automatically determines the Babel plugins you need based on your supported environments. Compiles ES6 and beyond.
8.  **babel-preset-react:** Transform JSX

## INSTALL

npm i react react-dom prop-types

### webpack

npm i -D webpack webpack-dev-server webpack-cli

### babel

npm i -D babel-core babel-loader babel-preset-env babel-preset-react

### misc

npm i -D html-webpack-plugin
