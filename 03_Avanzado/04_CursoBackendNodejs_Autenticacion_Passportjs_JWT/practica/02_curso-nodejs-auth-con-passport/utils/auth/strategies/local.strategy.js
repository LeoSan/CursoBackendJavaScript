const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const UserService = require('./../../../services/user.service');
const service = new UserService();

const LocalStrategy = new Strategy({
    usernameField: 'email',//Podemos definir esta manera para que sea configurado estos valores son los del endpoint
    passwordField: 'password'//Podemos definir esta manera para que sea configurado estos valores son los del endpoint
  },
  async (email, password, done) => {
    try {
      const user = await service.findByEmail(email);
      if (!user) {
        done(boom.unauthorized(), false);
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        done(boom.unauthorized(), false);
      }
      delete user.dataValues.password;//Esto es por usar sequalize
      done(null, user);//Parametro Error, user pero antes eliminamos el password para que no se vea
    } catch (error) {
      done(error, false);
    }
  }
);

module.exports = LocalStrategy;
