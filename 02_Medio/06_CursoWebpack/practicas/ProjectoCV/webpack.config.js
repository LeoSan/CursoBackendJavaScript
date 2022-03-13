const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const config = {
  entry: './src/index.js',// Entry nos permite decir el punto de entrada de nuestra aplicación
  output: { // Output nos permite decir hacia dónde va enviar lo que va a preparar webpacks
    path: path.resolve(__dirname, 'dist'),// path es donde estará la carpeta donde se guardará los archivos
    filename: 'main.js',   // filename le pone el nombre al archivo final puede ser cualquiera pero por buenas practicas usamos main.js
    assetModuleFilename: 'assets/images/[hash][ext][query]'
  },
  resolve:{
    extensions: [".js"]// Aqui ponemos las extensiones que tendremos en nuestro proyecto para webpack los lea
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
        
      },
      {
        test: /\.css|.styl$/i,
        use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'stylus-loader'
            ],
      },
      {
        test: /\.png/,
        type: "asset/resource"
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            // limit => limite de tamaño
            limit: 10000,
            // Mimetype => tipo de dato
            mimetype: "application/font-woff",
            // name => nombre de salida
            name: "[name].[ext]",
            // outputPath => donde se va a guardar en la carpeta final
            outputPath: "./assets/fonts/",//Hacia tu ambiente DIST
            publicPath: "../assets/fonts/",//En tu ambiente DEV
            esModule: false,
          }
        }
      }
    ]
  },
  plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',//Ubicamos nustro temple 
            filename: './index.html'//Podemos elegit el nombre que deseamos pero por buenas practicas anexamos index.html
        }),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, "src", "assets/images"),// de donde 
              to: "assets/images"//Hasta 
            }
          ]
        }),
        new Dotenv(),
        new CleanWebpackPlugin({
          cleanOnceBeforeBuildPatterns:[
            path.resolve(__dirname, 'dist/css/*.css'),
            path.resolve(__dirname, 'dist/js/*.css'),
            path.resolve(__dirname, 'dist/assets/**'),
          ],
          verbose:true,
        })
    ]  
};

module.exports = config;