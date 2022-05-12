//Iniciamos nuestras variables 
const path = require('path');//Variable de ruta  
const HtmlWebpackPlugin = require('html-webpack-plugin');//Instaciamos nuestro plugin 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//Lo usamos para usar Css SASs

module.exports = {
	entry: './src/index.js',//Ubica el punto de entrada de nuestra aplicación 
	output: {//Donde va vivir el proyecto cuando este configurado 
		path: path.resolve(__dirname, 'dist'),//Aqui indicamos donde va vivir el proyecto Se puede llamar build, dist ... 
		filename: 'bundle.js',//Nombre al empaquetado 
		publicPath:'/',//Indica de donde iniciar 
	},
    mode:'development',//Esto nos permite trabajar modo desarrollador 
	resolve: {
		extensions: ['.js', '.jsx'],//Indicamos que extensiones vamos a usar
	},
	module: {//Aqui indicamos las reglas que vamos a trabajar con nuestros loader vamos usar el loader de babel y de html
		rules: [
			{//Configuramos loader js 
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,//excluimos 
				use: {
					loader: 'babel-loader'
				}
			},
			{//Configuramos loader html
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},{
				test: /\.s[ac]ss$/i,
				use: [
				  // Creates `style` nodes from JS strings
				  "style-loader",
				  // Translates CSS into CommonJS
				  "css-loader",
				  // Compiles Sass to CSS
				  "sass-loader",
				],
		 },	{
			test: /\.(png|jp(e*)g|svg|gif)$/,
				  use: [
					 {
					loader: 'file-loader',
					   options: {
							 name: 'images/[hash]-[name].[ext]',
						   },
					 },
					 ],
		   },
		]
	},
    //Agregamos Plugin
    plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		  }),
	],
	devServer: {
		historyApiFallback: true,
	}
}