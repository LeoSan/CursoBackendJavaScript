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

      //Regla de oro los endpoints dinamicos van hasta la parte inferior y los estaticos al principio

      this.app.get("/", (req = request, res = response) =>{
        res.send("Hola mi server en Express");
      });

      this.app.get("/nueva", (req = request, res = response) =>{
        res.send("Hola  soy una nueva ruta");
      });

      this.app.get("/products", (req = request, res = response) =>{
        res.json([{id:1,name:'Peras', precio:50.5, description:'Peras sin manzanas'},
                   {id:2,name:'Peras', precio:50.5, description:'Peras sin manzanas'}
                ]);
      });

      this.app.get("/product/filter", (req = request, res = response) =>{
        res.send('Soy un filter');
      });

      this.app.get("/product/:id", (req = request, res = response) =>{
        const {id } = req.params;//Forma de  obtener un valor desde get
        res.json({
            id,
            name:'Peras',
            precio:50.5,
            description:'Peras sin manzanas'
          });
      });





      //Usando Querry
      this.app.get("/users", (req = request, res = response) =>{
        const {limit, offset } = req.query;//Forma de  obtener un valor desde get pero usando ?
        if (limit && offset){
          res.json({
            limit,
            offset
          });
        }else{
          res.send('No hay parametros');
        }
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

