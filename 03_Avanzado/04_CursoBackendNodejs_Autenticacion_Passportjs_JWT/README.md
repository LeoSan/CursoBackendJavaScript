# 04 - Curso de Backend con Node.js: Autenticación con Passport.js y JWT

¡Aprende desarrollo backend con Node.js! Trabaja con rutas, servidores y middlewares de Express.js. Construye una API, manipula errores y haz validación de datos. Despliega tu aplicación a producción en Heroku. Conviértete en backend developer con Node.js junto a tu profesor Nicolas Molina.

Usa Node.js con Express.js para el backend de tu aplicación
Crea los endpoints de tu API REST
Crea tu primer servidor HTTP

## Clase 1: Bienvenida 
- Profesor Nicolas Molina  

## Clase 2 : Autenticación vs. autorización

**Autenticación**
- Este proceso es para determinar si la combinación de usuario y contraseña son las correctas.

**Si es correcta:**
- Nos dan una llave para acceder, (en este curso esa llave será un token generado por la librería jsonwebtoken )
**Si NO es correcta:**
- El servidor nos prohibe continuar y lo normal es que nos responda con un código http 401 que significa Unauthorized (veamoslo con gatos xD)

**Autorización**
> Es cuando el servidor ya verificó que la contraseña y usuario son correctas y se le devolvió correctamente al usuario un token (la llave) pero se quiere usar esa llave para entrar a una parte del sitio prohibido para ese usuario, esto puede suceder cuando:

- El usuario no es administrador y quiere acceder a una página sólo para admistradores (petición get) .
- El usuario quiere realizar una petición tipo delete/post/put a un recurso pero sólo tiene permisos de lectura ese usuario.
- Lo normal es que el servidor responda con status code 403 cuando esto sucede

**Notas**
- Autenticación: Quien eres (ususario, contraseña)
- Authorizacion: Gestion de permisos (roles y privilegios)


![Ejemplo](info/Concepto.png)

## Clase 3 -4 : Tienda en línea: instalación del proyecto -  Middleware de verificación

- Paso 1: Podemos configurar la capa de autenticación creamos un archivo en nuestro carpeta middlewares `auth.handlers.js`
```
const boom = require('@hapi/boom');

const { config } = require('./../config/config');

function checkApiKey(req, res, next) {
  const apiKey = req.headers['api'];
  if (apiKey === config.apiKey) {
    next();
  } else {
    next(boom.unauthorized());
  }
}

module.exports = { checkApiKey }

```

- Paso 2: importamos este middlewares a nuestra rutas donde la queremos aplicar. en este caso  `index.js`
- const { checkApiKey } = require('./middlewares/auth.handler');
```
app.get('/nueva-ruta', checkApiKey, (req, res) => {
  res.send('Hola, soy una nueva ruta');
});
```

**Nota**
RECORDAR que cuando se hacen cambios en las variables de entorno se debe reiniciar el servidor para que se apliquen esos cambios

Si estas usando nodemon cada vez que realices cambios y guardes automaticamente el reinicia el servidor. Ahora si todavia quedas con dudas si se reinicio o no puedes escribir rs en la consola donde esta ejecutando Nodemon una vez preciones enter, te reinicia el servidor nuevamente

## Clase 5 : Hashing de contraseñas con bcryptjs

- Paso 1: Debemos instalr este paquet `npm i bcrypt`

>Esta libreria es muy util para muchas otras cosas mas, porque hay ciertas legislaciones que sancionan si se tiene información sencible de los usuarios sin estar protegida como por ejemplo, nombre completo, dirección de email, direccion postal entre otras con esta libreria se puede implementar una rutina que al momento de guardar información sencible la encripte y luego la guarde en la base de datos y cuando deba ser consultada por usuarios esta infirmación sea desencriptada para luego ser mostrada. Asi la infirmación guardada si llega a ser comprometida no podrá ser desencriptada a menos que se dispongan de las claves de encriptación y desencriptación

**Metodo para crear HASH **
```
const bcrypt = require('bcrypt');

async function hashPassword() {
  const myPassword = 'admin 123 .202';
  const hash = await bcrypt.hash(myPassword, 10);
  console.log(hash);
}

hashPassword();

```

**Metodo para validar HASH**
```
const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$.q.8/z3PP1KrruUqNuK9quJgCHQ.5S4w3.FyKmHEGEFqc19OVEqBW';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();

```

## Clase 6 : Implementando hashing para usuarios

-- Ya la sabemos usar 



## Clase 7 : Implemetando login con Passport.js

> Estrategia usando Passport 
- Se puede usar passport crear un login por google 
- Se puede usar passport crear un login por twitter
- Se puede usar passport crear un login por face
- Y la mas comun la passport Local 
- 
**Enlace**
- https://www.passportjs.org/


**Como**
- Paso 1: instalamos  el pquete ejecutando el siguiente comando `npm in passport passport-local`
- Paso 2: Creamos el siguiente directorio utils/auth/strategies/local.strategy.js
- Paso 3: dentro de auth creamos nuestro index.js aqui vamos a definir las estrategias 
```
const passport = require('passport');

const LocalStrategy = require('./strategies/local.strategy'); //Aqui ponemos nuestra estrategia

passport.use(LocalStrategy);

```
- Paso 4: Creamos nustra logica en `local.strategy.js`

[Ejemplo](practica\curso-nodejs-auth-con-passport\utils\auth\strategies\local.strategy.js)
```
const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const UserService = require('./../../../services/user.service');
const service = new UserService();

const LocalStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password'
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

```

- Paso 5: Impletamos en nuestro servicio de login 
```
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

```

- Paso 6: Debemos implementar nnuestri utils en nuestra clase server.js o para este ejemplo el index.js 

`require('./utils/auth');`

Buscar repo [Ejemplo](practica\curso-nodejs-auth-con-passport\index.js) Linea 25

## Clase 8: ¿Qué es un JWT?

**JSON Web Token (JWT)**
> Es un estándar abierto (RFC 7519) que define una forma compacta y autónoma de transmitir información de forma segura entre partes como un objeto JSON. 
> Esta información se puede verificar y confiar porque está firmada digitalmente. Los JWT se pueden firmar usando una palabra secreta (con el algoritmo HMAC) o un par de claves públicas / privadas usando RSA o ECDSA.

**¿Cuándo deberíamos utilizar JSON Web Tokens?**

Autorización: este es el escenario más común para usar JWT. Una vez que el usuario haya iniciado sesión, cada solicitud posterior incluirá el JWT, lo que le permitirá acceder a rutas, servicios y recursos que están autorizados con ese token. El inicio de sesión único es una función que se utiliza ampliamente con JWT en la actualidad, debido a su pequeña sobrecarga y su capacidad para usarse fácilmente en diferentes dominios o servidores distribuidos.

Intercambio de información: los JWT son una buena forma de transmitir información de forma segura entre varias partes. Debido a que los JWT se pueden firmar, por ejemplo, utilizando pares de claves públicas / privadas, se puede estar seguro de que los remitentes son quienes dicen ser. Además, como la firma se calcula utilizando las cabeceras y el payload, también se puede verificar que el contenido no haya sido manipulado.

**Un JWT tiene tres partes, cada parte va dividida por un punto:**

- Header → Dice el algoritmo de encriptación y el tipo (usualmente no se modifica).
- Payload → Viene la información que vamos a encerrar en el token. Viene el sub (el sujeto, dueño del token, permite identificar al usuario), después la información que queremos añadir incluida la fecha en que se generó el token (iat).
- Verify Signature → Una forma para verificar el token, combina el header y payload, y se firma con una palabra clave (llave secreta). Solo el que tenga esa llave puede verificar si el token es original, si es verificado. Solo el backend debe tener ella llave, él mismo genera y verifica con esa llave.

**Enlace**
- https://jwt.io/
- https://keygen.io/ para generar palabra secreta

**Como**
- Paso 1: Instalamos el paquete `npm install jsonwebtoken`
- Paso 2: Implementamos modo de ejemplo
```
//Ejemplo para Firmar 

const jwt = require('jsonwebtoken');

const secret = 'myCat';
const payload = {
  sub: 1,
  role: 'customer'
}

function signToken(payload, secret) {
  return jwt.sign(payload, secret);
}

const token = signToken(payload, secret);
console.log(token);
```

```
//Ejemplo para verificar 
const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTYzMDQzMzY1M30.tY6btdWHq1J9qYVTbjYrt9vxrfWKHi9fuOhElKmwf9k';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
```

## Clase  11: Protección de rutas con passport 

```
Para proteger las rutas se instala la estrategia passport-jwt, esta estrategia va a capturar el token que viene del header, si el token está firmado con nuestra firma entonces lo va a autorizar, de otro modo no tendrá acceso a la ruta.
Comando de instalación: npm install passport-jwt.

–
Se crea la nueva estrategia jwt.strategy.js:

Se requiere la Strategy y ExtractJwt (dónde el token está para que extraiga el token).

Se crean las options, estas contienen:

jwtFromRequest → Indica de dónde se saca el token, en este caso del header como bearer token
secretOrKey → Cuál es el secreto, necesario para poder verificar si la firma es válida o no.
La nueva estrategia (JwtStrategy) recibe las options y una función callback que recibe el payload del JWT y la función done que retorna el payload que ya verificó.
```

**Como**
- Paso 1: Instalamos la libreria `npm install passport-jwt`
- Paso 2: Recuerda que podemos crear estrategias podemos crear una nueva 
```
//swt.strategy.js 
const { Strategy, ExtractJwt } = require('passport-jwt');

const { config } = require('../../../config/config');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret
}

const JwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload);//PAsamos null indicando que todo esta bien y envie el payload 
});

module.exports = JwtStrategy;
``` 
- Paso 3: Implementamos debemos busar nuestro archivo router donde queremos implementar el nivel de seguridad para este ejemplo buscamos ctegory

```
//Importamos primero 
const passport = require('passport');

//Ubicamos el router y solo anexamos esta linea 
// passport.authenticate('jwt', {session: false}) en el router

router.post('/',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(createCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await service.create(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);
```

- Paso 4: Recuerda enviar tu token cuando se use este router 
//Escogemos Authorization 
![Ejemplo](info/Concepto_0002.png)

//Anexamos el token 
![Ejemplo](info/Concepto_0003.png)


## Clase 12: Control de roles


Copio este midleware 
```

function checkAdminRole(req, res, next) {
  const user = req.user;
  if (user.role === 'admin') {
    next();
  } else {
    next(boom.unauthorized());
  }
}



function checkRoles(...roles) {//Esto indica que me pueden retornar varios Roles es un arrays
  return (req, res, next) => {
    const user = req.user;
    if (roles.includes(user.role)) {
      next();
    } else {
      next(boom.unauthorized());
    }
  }
} 
``` 