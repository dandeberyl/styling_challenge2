const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',            
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist-webpack'),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), 
    },
    open: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '/index.html',
    }),
  ],
  mode: 'development',
};
