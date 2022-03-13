https://platzi.com/tutoriales/2242-webpack/9830-webpack-tailwindcss-con-es6/ 

Webpack + Tailwindcss con ES6+
Emmanuel
roremDev
Atendiendo a la clase Loaders para CSS y preprocesadores de CSS, agregaremos Tailwindcss a nuestro proceso de integración con webpack.

Cabe mencionar que utilizaremos ES6+ para desarrollar esta integración, por lo que procuraremos tener soporte con babel 7+

Instalación de dependencias
Dividiremos las dependencias a instalar en 3 secciones:

Dependencias core
Dependencias de babel
Dependencias de webpack, los cuales los serviré con el servicio webpack-dev-server
Nota. Deberá inicializar su proyecto con nodejs.
Dependencias core

npm i -D webpack webpack-cli webpack-dev-server && npm i tailwindcss

Dependencias babel

npm i -D @babel/cli @babel/core @babel/plugin-transform-runtime @babel/preset-env @babel/register

Dependencias webpack

npm i -D babel-loader css-loader html-webpack-plugin mini-css-extract-plugin postcss postcss-loader style-loader

Donde al final, nuestro package.jsonquedará de la siguiente forma:

"devDependencies": {
    "@babel/cli": "^7.13.0",
    "@babel/core": "^7.13.8",
    "@babel/plugin-transform-runtime": "^7.13.8",
    "@babel/preset-env": "^7.13.8",
    "@babel/register": "^7.13.8",
    "babel-loader": "^8.2.2",
    "css-loader": "^5.1.0",
    "html-webpack-plugin": "^5.2.0",
    "mini-css-extract-plugin": "^1.3.9",
    "postcss": "^8.2.6",
    "postcss-loader": "^5.0.0",
    "style-loader": "^2.0.0",
    "webpack": "^5.24.2",
    "webpack-cli": "^4.5.0",
    "webpack-dev-server": "^3.11.2"
  },
  "dependencies": {
    "tailwindcss": "^2.0.3"
  },
  "babel": {
    "presets": [
      "@babel/preset-env"
    ],
    "plugins": [
      "@babel/plugin-transform-runtime"
    ]
  }

Nota. Observará que babel está configurado en el mismo archivo package.json ; puede realizar la configuración de babel en un archivo .babelrc o dentro del archivo de configuración de webpack como una option de babel en las reglas.

Configuración de Tailwindcss y Postcss
Atendiendo a la nomenclatura de ES6, podrá escribir sus códigos de múltiples formas donde una, por ejemplo, es la que le muestro a continuación:

// tailwind.config.js

exportconst purge = ['./**/*.html'];
exportconst darkMode = false;
exportconst theme = {
  extend: {},
};
exportconst variants = {
  extend: {},
};
exportconst plugins = [];

// postcss.config.js

import tailwindcss from'tailwindcss';
exportconst plugins = [tailwindcss];

Configuración de archivos estáticos
Para este punto, escribiremos los archivos estáticos que serán servidos por parte de Webpack, atentiendo a la clase HTML en Webpack donde anexaré una línea para comprobar la ejecución de nuestros estilos por parte de Tailwind:


<htmllang="en">
  <head>
    <metacharset="UTF-8" />
    <metahttp-equiv="X-UA-Compatible"content="IE=edge" />
    <metaname="viewport"content="width=device-width, initial-scale=1.0" />
    <title>Webpack Tailwindcsstitle>
  head>

  <body>
    <h1class="bg-red-900 text-white">Hello worldh1>
  body>
html>

// src/index.js

import'./style.css';

/* src/style.css */

@tailwind base;
@tailwind components;
@tailwind utilities;

Configuración de Webpack
Para este punto, lo úlitmo que nos falta configurar es nuestro archivo webpack.config.babel.js dejando en claro el nombre para que babel pueda realizar su chamba.

import { resolve, join } from"path";
import HtmlWebpackPlugin from"html-webpack-plugin";
import MiniCssExtractPlugin from"mini-css-extract-plugin";

exportdefault () => {
  return {
    entry: "./src/index",
    output: {
      path: resolve(__dirname, "dist"),
      filename: "bondle.js",
    },
    resolve: {
      extensions: [".js"],
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve(__dirname, "./public/index.html"),
      }),
      new MiniCssExtractPlugin({
        filename: "style.css",
      }),
    ],
    devServer: {
      contentBase: join(__dirname, "dist"),
      port: 8080,
    },
  };
};

Y, configurando los scripts de nuestro archivo package.json:

  "scripts": {
    "dev": "webpack serve --mode development --open"
  }

Por si quedó duda de la distribución del directorio de trabajo:

webpack-tailwind
  └─⫸  package.json
  └─⫸  postcss.config.js
  └─⫸  tailwind.config.js
  └─⫸  webpack.config.babel.js
  └─⫸  public
		└─⫸ index.html
  └─⫸  src
		└─⫸ index.js
		└─⫸ style.css