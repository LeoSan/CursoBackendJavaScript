# 07 ¿Qué es React.js?

Este nivel es sobre nuevas funciones e implementacones de ECMAScript 5-6-7 

## Clase 1: Bienvenida 
- Profesor Oscar Barajas Tavares  @gdnx 

## Clase 2: 

**¿Qué es React.js?**
- Es una libreria de Js para desarrollar  interfaces de usuario, donde solo nos vamos enfocar en la vista, 
- Solo viene resolver las vistas del usuario.  
- Se piensa en componentes es decir cada fragmento de cada interfaz encapsulado. 
- Nacio en el  2013 gracias a Facebook ahora Meta. 

**Conceptos**
- **JSX** se refiera a Javascript XML. Nos permite escribir html dentro de Javascript. 
- **Virtual DOM** El virtual DOM es una copia en memoria del DOM normal del navegador. Pero ¿por qué hacer una copia? Bueno, cuando el UI cambia de estado, normalmente el DOM es muy lento. Sin embargo, virtual DOM es extremadamente rápido. Lo que ocurre es que primero, todo se computa en el virtual DOM, se actualiza por completo el virtual DOM (a pesar de que se re-renderiza el virtual DOM, no afecta el rendimiento porque primero no se tiene que mostrar gráficamente y realmente es muy rápido) y realiza el proceso de diff que compara ambos DOM para después igualar o “reconciliar” ambos UI y cambiar el aspecto de la manera más corta y rápida posible.
- **Ciclo de vida** se refiere al proceso de cuando los componentes son creados, actualizados y eliminados. O de otra manera ⇒ nacen, crecen y mueren.
- **Estado** son los datos que están dentro del componente. Estos pueden ser actualizados usando diferentes métodos. Los estados son muy importantes en React, pues son encargados de actualizarse cada vez que se cambian, afectando a los demás nodos del virtual DOM.
- **Eventos** los componentes, pueden configurarse con eventos como onclick para responder antes ciertas interacciones con el usuario, tal como los haríamos en Html
- **React Hooks** es otra manera de escribir los componentes con estado, si usar clases. No se pretenden reemplazar, sin embargo, usar funciones para los componentes pueden facilitar el entendimiento de la aplicación.


## Clase 3:  Pasos para isntalar React. 
- Paso 1: Podemos ejecutar los siguientes comandos en nuestro proyecto raiz.
- `npm init`
- `npm install react react-dom`

- Paso 2: Configuramos nuestro archivo de entrada `Practica\react-shop\src\index.js` 

```
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<App />, document.getElementById('app'));

```


## Clase 4:  Configuración de Webpack y Babel

- Paso 3: Instalamos las bondades de js y babel ` npm install @babel/core @babel/preset-env @babel/preset-react `

- Paso 4: Instalamos webpack y server `npm install webpack webpack-cli webpack-dev-server`

>Nota: no olviden agregar --save-dev al final de cada comando cuando instalen las dependencias de webpack y babel, ya que esto hace que se instalen solo para el entorno de desarrollo.


- Paso 5: Instalmos los loader y plugin `npm install babel-loader html-loader html-webpack-plugin`

- Paso 6: creamos nuestro archivo `.babelrc` en la raiz

- Paso 7: creamos el archivo `webpacj.config.js` -> se crea en la raiz `Practica\react-shop\webpack.config.js` -> Ver ejemplo Básico

```
//Webpack original y funcional 
//Iniciamos nuestras variables 
const path = require('path');//Variable de ruta  
const HtmlWebpackPlugin = require('html-webpack-plugin');//Instaciamos nuestro plugin 

module.exports = {
	entry: './src/index.js',//Ubica el punto de entrada de nuestra aplicación 
	output: {//Donde va vivir el proyecto cuando este configurado 
		path: path.resolve(__dirname, 'dist'),//Aqui indicamos donde va vivir el proyecto Se puede llamar build, dist ... 
		filename: 'bundle.js',//Nombre al empaquetado 
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
			}
		]
	},
    //Agregamos Plugin
    plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
	]
}
```


## Clase 5: Cambios en tiempo real con Webpack

- Paso 8: configuramos nuestro `package.json` -> agreamos los script 
```
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack serve --open",
    "build": "webpack --mode production"

```
- Paso 9: agremos la ruta para que pueda ir conociendo los componentes react que vamos creando en el archivo inicial de react llamado `index.js`-> `Practica\react-shop\src\index.js` 

```
import App from './components/App'; //Importante esto es para que pueda importar cada componente que estamos usando. 
```

- Paso 10:  Configuramos nuestro archivo `index.html` aqui es de usar un div inicial donde le indicamos a React donde pondra nuestros elementos. aqui es donde va ser render de la información -> `Practica\react-shop\public\index.html`
```
	<div id="app"></div>
```

- Paso 11: Corremos el comando para iniciar todo `npm run start`