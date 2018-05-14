const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const  srcPath  =  path.resolve(__dirname, 'src');
const  distPath  =  path.resolve(__dirname, 'dist');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./index.html",
  filename: "./index.html"
});

module.exports = {
  entry: {
    bundle: `${srcPath}/index.js`,
    vendor: ['react', 'react-dom', 'react-router-dom'],
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
    filename: '[name].js',
    path: distPath
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [htmlPlugin]
};