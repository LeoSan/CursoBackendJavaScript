var express = require('express');
var router  = express.Router();
const { request, response } = require('express');

//importo el servicio
const ProductsService = require('../services/servicesProduct');
const service = new ProductsService();

router.get("/lista", async (req = request, res = response, next) =>{

  try {
    //const id = unico.total();
    const products = await service.find();
    res.status(200).json(products);
  } catch (error) {
    next(error); //se agrega el next para atrapar de forma explicita el error con el middleware
  }

});

router.get('/unico/:id', async (req, res) => {
  const {id} = req.params;
  const producto = await service.findOne(id)
  res.status(200).json( producto);
});

//CREAR PRODUCTO
router.post('/crear', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

//EDITAR PRODUCTO
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }

});


//ELIMINAR PRODUCTO
router.delete('/eliminar/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.status(200).json(rta);
});

module.exports = router;
