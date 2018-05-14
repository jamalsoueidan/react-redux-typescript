const path = require('path');
const srcPath  =  path.resolve(__dirname, 'src');
const distPath  =  path.resolve(__dirname, 'dist');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./index.html",
  filename: "./index.html"
});

module.exports = {
  entry: {
    bundle: `${srcPath}/index.tsx`,
    vendor: ['react', 'react-dom', 'react-redux', 'react-router', 'react-router-dom', 'react-router-redux', 'redux'],
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ]
  },
  output: {
    path: distPath,
    filename: '[name].js',
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [htmlPlugin]
};
