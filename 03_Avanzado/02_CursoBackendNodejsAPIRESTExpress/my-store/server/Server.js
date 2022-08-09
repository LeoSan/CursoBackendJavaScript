const colors      = require('colors');
const { request, response } = require('express');
const express     = require("express");

require('dotenv').config({ path :'.env'});

//Clase Server
class Server {

    constructor(){
      this.app = express();
      this.port  = process.env.DB_PORT;
      this.seguridad  = '';

      //Conectamos con la DB de Mongo
      //this.conexMongoDB();

      //midlewares
      //this.midlewares();

      //rutas de aplicación
      this.routes();

    }



    routes(){
      //Habilitar leer los valores de un body del raw -> Esta manera es de enviar json a los apis
      this.app.use(express.json());

      this.app.get("/", (req = request, res = response) =>{
        res.send("Hola mi server en Express");
      });

      this.app.get("/nueva", (req = request, res = response) =>{
        res.send("Hola  soy una nueva ruta");
      });

      this.app.get("/product", (req = request, res = response) =>{
        res.json({name:'Peras', precio:50.5, description:'Peras sin manzanas'});
      });

    }

    listen(){
      //Iniciamos nuestro  servidor
      this.app.listen(this.port, '0.0.0.0', () => {

        console.log(`${'!!  Servidor Operando !!'.rainbow} ${ '<-|°.°|->  Puerto: '.green} -> ${this.port}`);

    });

    }
}

module.exports = Server;

