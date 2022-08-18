const colors      = require('colors');
const { request, response } = require('express');
const express     = require("express");
const cors        = require('cors');
require('dotenv').config({ path :'.env'});

//Importo los router
const routerApi = require('../router');

// Importar middleware
const { logErrors, errorHandler } = require('../middlewares/errorHandler'); //importar las funciones que se uilizarán


//Clase Server
class Server {

    constructor(){
      this.app = express(),
      this.port  = process.env.DB_PORT,
      this.seguridad  = '',
      this.whitelist = ['http://localhost:5000/', 'http://myapp.co'], //damos permiso solo a estas direcciones
      this.optionCors = {
       // 'Access-Control-Allow-Origin':'http://localhost:5000/' //Si Funciona con esto
        origin: (origin, callback) => {                           // Otra forma mas arcaica pero interesante
          if ( this.whitelist.includes(origin)) {
            callback(null, true);
          } else {
            callback(new Error('no permitido'), false);
          }
        }
      },

      //Conectamos con la DB de Mongo
      //this.conexMongoDB();

      //rutas de aplicación
      this.routes(),

      //midlewares (van siempre despues del router)
      this.midlewares()

    }



    routes(){
      //Habilitar leer los valores de un body del raw -> Esta manera es de enviar json a los apis
      this.app.use(express.json());

      //Ejemplo->//http://localhost:5000/api/v1/producto/lista
      //Regla de oro los endpoints dinamicos van hasta la parte inferior y los estaticos al principio


      //Forma mas estructurada para usar los router
      routerApi(this.app);

      //En caso que llegue a la raiz
      this.app.get("/", (req = request, res = response) =>{
        res.send("Hola mi server en Express");
      });


      //Habilito el uso de cors-> Debe ir de ultimo luego de la carga de los endpoints
      this.app.use(cors(this.optionCors));//npm i cors
    }//fin del metodo routes

    midlewares(){

      this.app.use(logErrors);
      this.app.use(errorHandler);
    }

    listen(){
      //Iniciamos nuestro  servidor
      this.app.listen(this.port, '0.0.0.0', () => {

        console.log(`${'!!  Servidor Operando !!'.rainbow} ${ '<-|°.°|->  Puerto: '.green} -> ${this.port}`);

    });

    }
}

module.exports = Server;

