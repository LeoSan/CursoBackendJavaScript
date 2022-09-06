# 12 - Curso de Backend con Node.js API REST con Express.js

¡Aprende desarrollo backend con Node.js! Trabaja con rutas, servidores y middlewares de Express.js. Construye una API, manipula errores y haz validación de datos. Despliega tu aplicación a producción en Heroku. Conviértete en backend developer con Node.js junto a tu profesor Nicolas Molina.

Usa Node.js con Express.js para el backend de tu aplicación
Crea los endpoints de tu API REST
Crea tu primer servidor HTTP

## Clase 1: Bienvenida 
- Profesor Nicolas Molina  

## Clase 2 - 3: Configuración del entorno de desarrollo para esta practica 

**Truco Gitignore**
- https://www.toptal.com/developers/gitignore -> permite ya generar que archivos no vamos a treaquear 
- EditorConfig for VS Code -> Nos apoya para mentener un codigo stadart 

**Iniciamos nuestra configuración:**
- Paso 1: `npm init -y`
- Paso 2: Creamos estos archivos -> `touch index.js .editorconfig .eslintrx.json .gitignore `
- Paso 3: Empezamos a configurar primero gitignore, editorconfig, eslintrc 
  - Configurar .gitignoe [Ejemplo](my-store/.gitignore)
  - Configurar .editorconfig [Ejemplo](my-store/.editorconfig)
  - Configurar .eslintrx [Ejemplo](my-store/.eslintrx)
- Paso 4: Pasamos al `package.json` configuramos el script 
```
"dev": "nodemon index.js",
"start": "node index.js",
"lint": "eslint"
```
- Paso 5: instalamos las dependencias de desarrollo `npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D`

## Clase 4: Instalación de Express.js y tu primer servidor HTTP

- Paso 6: instalamos express `npm i express`
- Paso 7: Configuramos lo basico para server, ya con mas experiencia podremos crear la configuración avanzada que es crear un directorio y crear clases para que todo este configurado en este entorno y solo el index se instancie el objeto. 

**Basic Config**
```
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");
});

app.listen(port, () =>{
  console.log("My port: " + port);
});
```
**Avanced config**
[Ejemplo](my-store/server/Server.js)

**Nota**
- Problemas con el puerto -> https://stackoverflow.com/questions/70609933/nodemon-giving-this-error-code-eaddrinuse-errno-4091-syscall-listen-a

## Clase 5: ¿Qué es una RESTful API?

**REST: Representational State Transfer**
> Es una conveccion que se refiere a servicios web por protocolo HTTP
> No confudir con una arquitectura, se puede decir que es una metodología que nos apoya en como usar los verbos para generar apis. 

**Metodos:**
- Get: Obtener
- Put: Modificar/Actualizar Todo 
- Patch: Modificar/Actualizar campos en especificos
- Post: Crear
- Delete: Eliminar

**Patch**
El método de solicitud HTTP PATCH aplica modificaciones parciales a un recurso.

PATCH es algo análogo al concepto de “actualización” que se encuentra en CRUD, Una solicitud se considera un conjunto de instrucciones sobre cómo modificar un recurso. Contrasta esto con PUT; que es una representación completa de un recurso.PATCH

Mo es necesariamente idempotente, aunque puede serlo. Contrasta esto con PUT; que siempre es idempotente.

La palabra “idempotente” significa que cualquier número de solicitudes repetidas e idénticas dejará el recurso en el mismo estado.

Por ejemplo, si un campo de contador de incremento automático es una parte integral del recurso, entonces un PUT lo sobrescribirá naturalmente (ya que sobrescribe todo), pero no necesariamente para .PATCH

PATCH (como POST) puede tener efectos secundarios sobre otros recursos.

PATCH - HTTP | MDN -> https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH


## Clase 6: GET: recibir parámetros

> Recurda que el verbo get, es para obtener valores, por lo que puede o no recibir cambios, podemos recibir varios pero no es recomendable recibir tantos parametros. 


>Los endpoints especificos deben declararsen antes de los endpoints dinamicos. Uno de los mandamientos.
**Ejemplo**

```
      this.app.get("/product/:id", (req = request, res = response) =>{
        const {id } = req.params;//Forma de  obtener un valor desde get
        res.json({
            id,
            name:'Peras',
            precio:50.5,
            description:'Peras sin manzanas'
          });

      });
```

## Clase 7: GET: parámetros query

> Se utilizan para hacer filtros a la información que queremos de nuestra API.

- Puede ayudarnos a paginar, a establecer limites, incluso buscar palabras que coincidan con un valor.

- Los endpoints especificos deben declararsen antes de los endpoints dinamicos. Uno de los mandamientos


**Ejemplo**

```
      this.app.get("/product/:id", (req = request, res = response) =>{
        const {id } = req.params;//Forma de  obtener un valor desde get
        res.json({
            id,
            name:'Peras',
            precio:50.5,
            description:'Peras sin manzanas'
          });

      });
```
## Clase 8:Separación de responsabilidades con express.Router

**Express.Router**
> Crea un controlador(handler) de rutas modulares y montables. Una instancia de Router es un sistema de enrutamiento y middleware completo, por esa razón lo podemos tomar como si fuera una mini app.

>Cada modulo de nuestras rutas es una mini aplicación en la que creamos sus rutas independientes y podemos incluirle middlewares, que se ejecutarán cuando se coincida con el path.

**Qué es un middleware?**
>Un middleware es un bloque de código que se ejecuta entre la petición que hace el usuario (request) hasta que la petición llega al servidor.

## Clase 9 - 10 : Instalación de Postman o Insomia y metodo POST


>Como cliente para probar APIs tiene grandes características, destaca principalmente por una interfaz limpia y sencilla, pero a la vez potente, en donde puede configurar ambientes, exportar e importar, gran soporte con GraphQL, etc. Insomnia será el que vamos a usar en este curso


**Enlace**
- Adios Postman - https://www.youtube.com/watch?v=fi8-oz0AQGE
- Nuevo - https://insomnia.rest/download

**Por qué versionar tu API?**
La razón de versionar nuestras API es para que no haya conclicto del servicio con las distintas plataformas que puedan usarlo ( Mobile nativo, IoT, Web).

Supongamos que haces un cambio de la API para mobile, simplemente le asignas un router con la v2 y dejas lo demás con la versión v1.


## Clase 12 : Códigos de estado o HTTP response status codes

> Los códigos de estado de respuesta HTTP indican si se ha completado satisfactoriamente una solicitud HTTP específica. Las respuestas se agrupan en cinco clases:

- Respuestas informativas (100–199),
- Respuestas satisfactorias (200–299),
- Redirecciones (300–399),
- Errores de los clientes (400–499),
- Errores de los servidores (500–599).

>PD: recuerda acceder de esta manera

## Clase 13-15: Introducción a servicios


> Los servicios es donde encapsulamos todos los casos de usos y comenzar a interactuar con la lógica de negocio.


**Estructura**
Esta arquitectura está definida por capas.

**Entidades:**

- En esta capa encontramos las entidades base del negocio.
- En nuestro caso: productos, categorías, órdenes de compra.

**Casos de uso**

- En esta capa tenemos lo relacionado a la lógica de negocio
- En esta capa se encuentra los servicios

**Controladores**

- En esta capa se brinda el acceso.
- Aquí encontramos el routing


**Flujo de trabajo:**

- Controladores: Encontramos los routes y middlewares.
- Los controladores acceden a la capa de servicios
- Servicios: donde se encuentra la lógica de negocio
- Los servicios usan las librerías.
- Las librerías se encargan de contactarse a la capa de entidades
- Las librerías se contactan a otras fuentes de datos: API externa o base de datos.

## Clase 13-15: ¿Qué son los Middlewares?
**Que es**
> Middleware es software que permite uno o más tipos de comunicación o conectividad entre dos o más aplicaciones o componentes de aplicaciones en una red distribuida. Al facilitar la conexión de aplicaciones que no fueron diseñadas para conectarse entre sí, y al brindar funcionalidad para conectarlas de manera inteligente, el middleware agiliza el desarrollo de aplicaciones y acelera el tiempo de comercialización.

**Usos**
- capturar algun error en toda la aplicación
- Funciona de forma secuencial 
- Middleware a nivel de aplicación
- Middleware a nivel de direccionamiento (routers) 
- Middleware para manejo de errores
- Middlewares incorporados
- Middleware de terceros

![Midlewares](info/Midlewares004.png)
**Enlace**
- https://expressjs.com/en/guide/writing-middleware.html

**Como Funciona**
![Midlewares](info/Midlewares.png)
![Midlewares](info/Midlewares002.png)
![Midlewares](info/Midlewares003.png)

**Código**
```

//CREAMOS 

//Creamos función que nos hará llegar a un middleware de tipo error:
function logErrors(err, req, res, next) {
  console.error(err); //mostrar el error en servidor para poder monitorearlo
  next(err); //importante para saber que se esta enviando a un middleware de tipo error, si no tiene el error dentro entonces se esta mandando a uno normal
}

// Crear formato para devolverlo al cliente que se complementa con la función anterior:
function errorHandler(err, req, res, next) { //así no se utilice next en el código se debe poner aqui, ya que un middleware de error tiene los cuatro parámetros
  res.status(500).json({ //indicar que el error es estatus 500 Internal Server Error
    message: err.message, //mostrar al cliente el mensaje de error
    stack: err.stack, //mostrar info del error
  });
}

module.exports = { logErrors, errorHandler }; //exportarlo como modulo


//-------------------------------------
// Importar middleware
const { logErrors, errorHandler } = require('./middlewares/errorHandler'); //importar las funciones que se uilizarán


//-------------------------------------
//LO USAMOS 
routerApi(app);
// Utilizamos los middleware. Siempre deben ir después del routing:
app.use(logErrors);
app.use(errorHandler);

```

>PD: Es importante el orden en que se coloquen porque es el orden en que se ejecutarán. En este caso el logErrors es el único con un next, por lo tanto, si se colocará el errorHandler antes, ahí terminaría el proceso.
> Los middlewares de tipo error siempre deben ir después de definir el routing.

## Clase 18: Manejo de errores con Boom 

**Que es**
> Es un paquete que te permite manejar los errores de los estados es natural uno como humano no acordarse de todos los estados, este pquete de forma intuitiva te lista los errrores que deseas y este le da formato al mensaje. 


**Como se instala**
- npm: npm install @hapi/boom
- yarn: yarn add @hapi/boom


**Enlaces**
- https://platzi.com/clases/2485-backend-nodejs/41759-manejo-de-errores-con-boom/
- https://hapi.dev/module/boom/api/?v=9.1.4

## Clase 19-20-21: Middlewares populares en Express.js

A continuación te compartiré una lista de los middlewares más populares en Express.

**CORS**
- Middleware para habilitar CORS (Cross-origin resource sharing) en nuestras rutas o aplicación. 
- Nota: Cuando uses cors recuerda dejarlo hasta el final primero se carga los endpoints y luego los cors ejemplo es [Ejemplo Linea 63](./my-store/server/Server.js)
- http://expressjs.com/en/resources/middleware/cors.html

**Morgan**
Un logger de solicitudes HTTP para Node.js. http://expressjs.com/en/resources/middleware/morgan.html

**Helmet**
Helmet nos ayuda a proteger nuestras aplicaciones Express configurando varios encabezados HTTP. ¡No es a prueba de balas de plata, pero puede ayudar! https://github.com/helmetjs/helmet

**Express Debug**
Nos permite hacer debugging de nuestras aplicaciones en Express mediante el uso de un toolbar en la pagina cuando las estamos desarrollando. https://github.com/devoidfury/express-debug

**Express Slash**
Este middleware nos permite evitar preocuparnos por escribir las rutas con o sin slash al final de ellas. https://github.com/ericf/express-slash

**Passport**
Passport es un middleware que nos permite establecer diferentes estrategias de autenticación a nuestras aplicaciones. https://github.com/jaredhanson/passport

Puedes encontrar más middlewares populares en el siguiente enlace: http://expressjs.com/en/resources/middleware.html

## Clase 21: Manejo de errores con Boom 

**Recomendaciones** 
- Antes de enviar a producción debemos recordar los siguientes pasos:
- Cors: Que acceso y a quienes le damos acceso para hacer solicitudes
- Https: Que la API esta sobre servidor de HTTPS
- Procesos de Build: Se ve en procesos que cosas que tiene procesar información (typescript)
- Remover logs: No es bueno tener logs, a veces esto tiene demoras, existen mejor formas para capturar logs.
- Seguridad (helmet): Muy importante la seguridad y para esto se recomienda helmt que es una colección de Middleware que colocan capas de segridad a la aplicación
- Testing: Correr prebas unitarias o de integración antes de salir de producción

## Clase 24: Deployment a Heroku
npm install  -g heroku

| Iniciar
Heroku Login 

|Crear proyecto
HeroKu create

|Enlacar el repositorio
Heroku remote

|enviar
git push heroku master / main 
**Ejemplo**
git checkout -b production
git push heroku production:main 


| Variables de entorno
Heroku config:Add " "

| Revisar carpetas de heroku
heroku ps:exec

| Revisar que profiel exista
pwd && ls -la && cat Procfile

# Notas Para LeoSAn
- Se aprendio a generar routers de una manera mas elegante 
- Se mejoró la creación e integración de API usando una clase server.js
- Esto esta funcional podemos usarlo como cascaron para hacer un desarrollo backend  NODE EXPRESS



**Notas del Curso Nuevo con Postgresql**

## Serverless
💡Es un tipo de arquitectura que nos permite descentralizar los diferentes recursos existentes de nuestra aplicación.

.
En ocasiones, a serverless se le denomina sistemas distribuidos ya que permite, abstraer desde servidores hasta módulos denominados cloud functions.
.
Una de las principales ventajas de implementar serverless es la creación de arquitecturas como cliente-servidor, micro-servicios, entre otros.
.

## Clean Architecture
💡Es un conjunto de principios cuya finalidad principal es ocultar los detalles de implementación a la lógica de dominio de la aplicación.

Url referencia -> https://www2.deloitte.com/es/es/pages/technology/articles/clean-architecture.html
.
Las principal característica de Clean Architecture frente a otras arquitecturas es la regla de dependencia.
.
En Clean Architecture, una aplicación se divide en responsabilidades y cada una de estas responsabilidades se representa en forma de capa.
.

Definición de arquitectura
ℹ️Repositorio: https://github.com/roremdev/thingst
ℹ️Commit: https://github.com/roremdev/thingst/commit/ead31629469e5a3b923efc42b8b8eb5b18159b97

libs - directorio de drivers connection
.

Postgres.js

import { Pool as PostgresClient } from 'pg';

export default class Postgres {
    /**
     * @private
     * @description singleton pattern for pool connection
     * @returns {object} - connection client
     */
    async #connect() {
        try {
            if (!Postgres.connection) {
                Postgres.connection = new PostgresClient();
                console.log('Connected succesfully');
            }
            return Postgres.connection;
        } catch (error) {
            console.log(error);
        }
    }
    /**
     * @description query process in table
     * @param {string} request - SQL string request
     * @returns {Object} - response query postgresDB
     */
    async query(request) {
        try {
            const db = await this.#connect();
            return await db.query(request);
        } catch (error) {
            console.log(error);
        }
    }
}


ℹ️Nota. Se utiliza Pool para el manejo de múltiples conexiones por usuario donde se delega la administrador por el servidor.
.

services - directorio de controllers
.

Resource.js

import Postgres from '../libs/Postgres';

export default class ResourcesService {
    /**
     * @description DAO postgresDB tables
     * @param {string} table - table name
     */
    constructor(table) {
        this.table = table;
        this.client = new Postgres();
    }

    /**
     * @description find all registers in table
     * @returns {array} - response query mongoDB as array
     */
    async findAll() {
        const { rows } = await this.client.query(`SELECT * FROM ${this.table}`);
        return rows;
    }
}
.

routes - endpoints definition
.

Resource.js

import express from 'express';
import Resource from '../../services/Resource';

const router = express.Router();
const taskService = new Resource('tasks');

/**
 * @description get task operation
 * @param {string} path - express path
 * @param {callback} middleware - express generic middleware
 * @returns {ResponseObject}
 */
router.get('/', async (req, res, next) => {
    try {
        const data = await taskService.findAll();
        res.status(200).json({
            status: 'success',
            data,
            message: 'Retrieved all tasks',
        });
    } catch (error) {
        next(error);
    }
});

export default router;


## Manejando un Pool de conexiones **

Manejando un Pool de conexiones

Hay un problema con getConnection. El problema es que cada vez que llamamos a getConnection, lo que hacemos internamente en el codigo es llamar y llamar y llamar, es decir hacer request continuamentes, eso esta mal porque puede sobrecargar el servidor de request. Entonces, esto es un problema porque por cada request se crea una negociacion con la db, se tarda 20ms o mas, y asi vamos saturando el servidor. La solucion es usar pool.

Sin un pool, yo deberia cerrar las conexiones manuelament.e

Que es un pool? Un pool de conexiones es un conjunto limitado de conexiones a una base de datos, que es manejado por un servidor de aplicaciones de forma tal, que dichas conexiones pueden ser reutilizadas por los diferentes usuarios. Un pool optimiza

Lo que hace el pool es sencillamente es ser un mediador entre las bases de datos y el cliente. Entonces a medida que los clientes empiecen a hacer consultas, la aplicacion de manera asincrona conectara con el pool y el pool se encargara tanto de abrir o cerrar conexiones para que la informacion siga trabajando de manera eficiente. Pero un pool es mucho mas inteligente que eso, ya que permite REUTILIZAR DATA QUE OTROS CLIENTES YA ACCEDIERON, CLARO SIEMPRE Y CUANDO LA DATA A REUTILIZAR SEA LA MISMA QUE ESOS CLIENTES NECESITABAN , y a su vez lograremos que los servidores no se saturen y nuestra app en el background trabajara con las consultas, y asi evitara un problema en el proceso.



# ¿Qué es un ORM? Instalación y configuración de Sequelize ORM

**-> https://platzi.com/clases/2507-backend-nodejs-postgres/41552-que-es-un-orm-instalacion-y-configuracion-de-seque/**

Un ORM (Object Relational Model) transforma y mapea nuestra BD con métodos de la programación orientada a objetos. Se pueden ejecutar métodos en lugar de consultas. La ventaja es que es agnóstico, no importa si se está usando MySQL, PostgreSQL, MariaDB, no hay problema mientras la BD use SQL.

Hay 2 ORM muy populares, se recomienda Sequelize para JavaScript y TypeORM para TypeScript.

Para instalarla → npm install --save sequelize
Tambien esta otra → npm install --save pg
Tambien esta otra → npm install --save pg-hstore

De acuerdo a la BD, se deben instalar los drivers:

# One of the following:
```
$ npm install --save pg pg-hstore # Postgres
$ npm install --save mysql2
$ npm install --save mariadb
$ npm install --save sqlite3
$ npm install --save tedious # Microsoft SQL Server
```



# Tu primer modelo en Sequelize

Aclaraciones de la documentación
🔥Nuestra documentación nos permite aclarar unos detalles que quedaron volando:

Podemos utilizar define o extend Model.
Se infiere el nombre de la tabla y se generaliza en plural, sequelize.define('user', userSchema); definirá la tabla users.
Existe el modo de sincronización global sequelize.sync() o particular modelo.sync()` donde tendremos parámetros:
force: true. Eliminar la existencia previa y creando en secuencia.
alter: true. Revisa si se cambiará alguna estructura, la nueva vs la previa.
.

## Configuración de ORM
ℹ️Repositorio: link

- ♻️Reutilizando las variables de entorno, las organizamos para determinar aquellas para database.
config.js . Archivo de definición de variables de entorno
```
/**
 * @description variables of database server
 */
export const database = {
    dbName: process.env.PGDATABASE,
    dbHost: process.env.PGHOST || 'localhost',
    dbPort: process.env.PGPORT || '5432',
    dbUser: process.env.PGUSER,
    dbPassword: process.env.PGPASSWORD,
};
```
- ♻️Definimos la librería de sequelize mediante la abstracción OOP.
Sequelize.js . Archivo de definición de variables de entorno
```
import { Sequelize as SequelizeClient } from 'sequelize';
import { database } from '../config/config';
import Error from '../utils/Error';

const USER = encodeURIComponent(database.dbUser);
const PASSWORD = encodeURIComponent(database.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${database.dbHost}:${database.dbPort}/${database.dbName}`;

export default class Sequelize {
    /**
     * @private
     * @description singleton pattern for pool connection
     * @returns {object} - connection client
     */
    async #connect() {
        try {
            if (!Sequelize.connection) {
                Sequelize.connection = new SequelizeClient(URI, {
                    logging: false,
                });
                await Sequelize.connection.authenticate();
            }
            return Sequelize.connection;
        } catch ({ message }) {
            throw new Error(message, 'DRIVER');
        }
    }
    /**
     * @description process definition for create database tables
     * @param {string} name - table name
     * @param {string} schema - table description
     * @returns {Promise} - response of library
     */
    async define(name, schema) {
        try {
            const db = await this.#connect();
            const model = await db.define(name, schema);
            return await model.sync();
        } catch (error) {
            if (!error) throw new Error(message, 'DEFINITION');
            throw error;
        }
    }
}
```
- ✨Creamos el schema


user.js
```
import { DataTypes, Sequelize as SequelizeClient } from 'sequelize';

/**
 * @description description of each field in the table
 * @typedef {Object} field definition
 * @property {boolean} allowNull - false=NOT NULL
 * @property {boolean} autoIncrement - each insert, increase the counter
 * @property {boolean} primaryKey - define is primary key
 * @property {boolean} type - expresion to match SQL type
 * @property {boolean} unique - difne as unique the field
 * @property {boolean} field - rename the field
 */
export default {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: SequelizeClient.DATE,
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated_at',
        defaultValue: SequelizeClient.DATE,
    },
};
```

- ✨Creamos nuestro seed

seed.js . Archivo de creación de entorno limpio npm run seed
```
import Sequelize from './../libs/sequelize';
import userSchema from './models/user';
import { complete, fail } from '../utils/Log';

const sequelize = new Sequelize();
const user = sequelize.define('user', userSchema);

Promise.all([user])
    .then((responses) => complete('Creation process', responses))
    .catch(({ message }) => fail('Creation process', message));
```

    **Nota Exrtra**
    

Según entendí cómo funciona, en retrospectiva, el flujo de trabajo que está ocurriendo es el siguiente:

La ruta o endpoint, llama al servicio. (users.router.js)
El servicio, genera la conexión sequelize al modelo. (users.service.js)
Se llama a setupModels, enviando la conexión. (sequelize.js)
Dentro de setupModels, se inicializa el modelo con init(), pasando el modelo y la configuración. (models/index.js)
El modelo, extiende los métodos de sequelize, tal como findAll() para realizar el query. (user.model.js)
Se retorna la respuesta obtenida de la DB
## clase


 ## Clase 13 - ¿Qué son las migraciones? Migraciones en Sequelize ORM


 **Las migraciones son:**

- Las migraciones son la forma en que Django propaga cambios en los modelos y los refleja en el esquema de bases de datos. - Django.

- Las migraciones son como un sistema de control de versiones para la base de datos. - Laravel.

- Es como un sistema de control de versiones para manejar los cambios desde el código y trackear los cambios en la base de datos. - Sequelize.


>Básicamente, las migraciones mantienen el historial del esquema que se lleva en la base de datos. Es un sistema muy usado en ambientes de producción para trackear los cambios sin tener que replicar todo nuevamente (creación de tablas, llaves foráneas, etc). Es decir, permite saber en qué punto estaba para saber qué es lo que se tiene que modificar.

–

sequelize.sync() empieza a leer los modelos, crea tablas y hace relist (se sobrescribe información), no se aconseja que se corra en producción. Es mejor sincronizar con un sistema de migraciones.

Para correr migraciones se utiliza la librería sequelize-cli y se instala como dependencia de desarrollo con el comando npm i sequelize-cli -D.

Posteriormente, se crea un archivo de configuración .sequelizerc en la carpeta principal.

–

.sequelizerc:

module.exports = {
  'config': './db/config.js',
  'models-paths: './db/models',
  'migrations-paths: './db/migrations',
  'seeders-path': './db/seeders',
}
config → Dónde se encuentra la configuración, esta configuración se encuentra la conexión hacia la BD. El cli tiene su propia conexión, independientemente de la conexión de la aplicación porque esas conexiones corren a nivel de terminal.

models-paths → Dónde se encuentran los modelos.

migrations-paths → Dónde se encuentran las migraciones.

seeders-path → Dónde se encuentran las semillas de información, sirve mucho para pruebas unitarias, end to end, donde se necesitan semillas de información que es como cargar varios datos de información a la BD.

–
Se crean las carpetas migrations, models, seeders y el archivo config.js dentro de la carpeta db.

## Clase 15: 
> Asi se puede ir generandolas migraciones 
`npm run migrations:generate add-role` ## 

## Clase 25 Despliegue en heroku Agregar a Heroku un proyecto existente: heroku git:remote -a nombre-del-repositorio

Crear un nuevo proyecto de Heroku: heroku create

Crear BD en Heroku: heroku addons:create heroku-postgresql:hobby-dev

Documentación de la BD postgresql en Heroku: heroku addons:docs heroku-postgresql

Información de la base de datos elegida: heroku pg:info

Se debe establecer la variable de entorno DATABASE_URL que da Heroku para poder conectarnos a la BD, sin embargo, también podemos usar la misma variable en el entorno de producción y para ello se agrega al archivo .env.

PORT=3000
DB_USER='john'
DB_PASSWORD='admin123'
DB_HOST='localhost'
DB_NAME='my_store'
DB_PORT='5432'
DATABASE_URL='postgres://john:admin123@localhost:5432/my_store'
En config/config.js se establece una nueva variable llamada isProd la cual será verdadera únicamente si la variable es production, es decir, va identificar si estamos en producción. También se agrega dbUrl donde se leerá DATABASE_URL que envía Heroku o que también podemos establecer en entorno de desarrollo.

require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  dbUrl: process.env.DATABASE_URL,
};

module.exports = { config };
Con esto se puede modificar postgres.pool.js haciendo una condición en la URI si estamos en desarrollo o producción:

const { Pool } = require('pg');
const { config } = require('../config/config');

const options = {};

if (config.isProd) {
  options.connectionString = config.dbUrl;
  options.ssl =  {
    rejectUnauthorized: false
  };
} else {
  const USER = encodeURIComponent(config.dbUser);
  const PASSWORD = encodeURIComponent(config.dbPassword);
  const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
  options.connectionString = URI;
}

const pool = new Pool(options);

module.exports = pool;
En el archivo libs/sequelize.js también se puede hacer la modificación de URI cambiándola a **config.dbUrl**. Además se agregar la configuración de ssl cuando se encuentre en producción haciendo la validación correspondiente y es importante utilizar dialectOptions ya que es una configuración respectiva de postgres.

const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models/');

const options = {
  dialect: 'postgres',
  logging: config.isProd ? false : true,
}

if (config.isProd) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  }
}

const sequelize = new Sequelize(config.dbUrl, options); // Se crea una instancia de Sequelize, gestiona el pooling.

setupModels(sequelize);
// sequelize.sync();

module.exports = sequelize;
En el archivo de migraciones también se deben hacer las modificaciones necesarias para poder correrlas, db/config.js:

const { config } = require('../config/config');

module.exports = {
  development: {
    url: config.dbUrl,
    dialect: 'postgres',
  },
  production: {
    url: config.dbUrl,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};
Para realizar el deploy creamos y nos movemos a una nueva rama llamada production, y después ejecutamos git push heroku production:main.

Posteriormente se corre una migración con heroku run npm run migrations:run, cabe mencionar que Heroku solo instala las dependencias de producción (no de desarrollo). Es necesario que sequelize-cli sea dependencia de producción.



**comandos**
- heroku logs --tail
