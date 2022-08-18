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
| Iniciar
Heroku Login 

|Crear proyecto
HeroKu create

|Enlacar el repositorio
Heroku remote

|enviar
git push heroku master / main 

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
-  


