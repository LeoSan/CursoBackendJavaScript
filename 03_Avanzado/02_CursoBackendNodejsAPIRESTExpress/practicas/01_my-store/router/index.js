const express = require('express');
const productRouter  = require('./productRouter');
const clientRouter   = require('./clientRouter');
const userRouter     = require('./userRouter');


function routerApi(app){

  //Esto es para versionar nuestra API
  const router  = express.Router();
  app.use('/api/v1', router);


  //http://localhost:5000/api/v1/producto/lista
  //Api Para prodcutos
  router.use('/producto', productRouter);

  //Api Para usuarios
  router.use('/user', userRouter);

  //Api para Clientes
  router.use('/client', clientRouter);
}

module.exports = routerApi;
