var express = require('express');
var router  = express.Router();
const { request, response } = require('express');


// middleware específico a este router
router.use('/', function (req = request, res = response, next) {
  console.log('Hola, soy el middleware');
  next(); // se utiliza para que se ejecute el router.get
});

// define the home page route
router.get('/', function (req = request, res = response) {
  res.send('Birds home page');
});

// define the about route
router.get('/about', function (req = request, res = response) {
  res.send('About birds');
});

router.get("/unico", (req = request, res = response) =>{
  res.json([{id:1,name:'Peras', precio:50.5, description:'Peras sin manzanas'},
             {id:2,name:'Peras', precio:50.5, description:'Peras sin manzanas'}
          ]);
});

router.get("/filter", (req = request, res = response) =>{
  res.send('Soy un filter');
});

router.get("/:id", (req = request, res = response) =>{
  const {id } = req.params;//Forma de  obtener un valor desde get
  res.json({
      id,
      name:'Peras',
      precio:50.5,
      description:'Peras sin manzanas'
    });
});

module.exports = router;
