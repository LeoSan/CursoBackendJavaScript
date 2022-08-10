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

