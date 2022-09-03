const express = require('express');
const passport = require('passport');


const router = express.Router();

router.post('/login',
  passport.authenticate('local', {session: false}),//Definimos aqui si es local otro tipo de estrategia y validamos si implementamos seccion
  async (req, res, next) => {
    try {
      res.json(req.user);//Esto debe ser igual al parametro que devuelves en tu estrategia
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
