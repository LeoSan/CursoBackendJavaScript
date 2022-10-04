# 06 - Curso de Firebase 5: Cloud Functions

## Clase 1: Bienvenida 
- Profesor Juan Guillermo Gómez Torres
```
¿Quieres experimentar acceso a los servicios de Firebase en tiempo real y con un rendimiento nunca antes visto? No esperes más para ser testigo de Firebase Cloud Functions y empieza ya a armar tus proyectos de manera fácil, rápida e intuitiva.

Crear y eliminar usuarios
Aplicar funciones que se disparen por HTTPS
Servir contenido a Hosting
Dominar crashlytics
```

## Clase 2 : Qué es firebase y las cloud functions

**Repaso de Firebase:**

- 💺 Es un BaaS o Backend como Servicio, nos permite utilizar código ya hecho para autenticar usuarios, guardar información en las bases de datos, alojar nuestras aplicaciones, subir imágenes o archivos estáticos, entre otras.
- 🍎 Nos permite construir aplicaciones para Android, IOS y para Web.
- 🍔 Esta construido sobre la infraestructura de Google Cloud.

**Cloud Functions:**

- 👼 Son código backend que ejecutamos como respuesta a ciertos eventos soportados por la plataforma de Firebase, nos evita preocuparnos por el mantenimiento de la infraestructura (BTW, Serverless) y nos permite desarrollar funcionalidades extra, es decir, cosas que no podemos hacer en el frontend.
- 💸 Tenemos la opción de no pagar hasta cierto punto de invocaciones o podemos pagar por cada x veces que se ejecutan nuestras funciones (es relativamente barato).
- Tiene sus propios recursos en el servidor 
- Es una buena opcion a muy bajo costo.
- Cloud functions ya no esta disponible en el paquete ‘gratis’ sino en el paquete ‘pay as you go’… en teoria todavia es ‘gratis’ pero tienes que tener cuidado de no pasarte de su uso (o de cualquier otro limite de servicios) o te cobraran!! ten cuidado en tus numeros!!!
- En estos momentos, las cloud function ya no entran dentro del plan Spark, eso quiere decir que hay que pagar para utilizarlas.

>Resumen 
![Resumen](./info/Cloud_function.png)

**Caso Ejemplo**
> He utilizado y utilizo cloud functions, un caso de uso típico es el almacenar una marca de tiempo, si necesitamos conocer qué día y hora se realizó un registro, no podemos depender de la hora del dispositivo del usuario ya que esta puede ser alterada. Al recibir el registro podemos disparar una función que actualice el registro con la hora actual del servidor.
> Cuando se actualiza un nodo de firebase (desde android por ejemplo ) y el back debe saber ese cambio y guardarlo en una base de datos sql. se realiza una función en donde se ejecute(llamar) el servicio del back y baje hasta hacer la actualización correspondiente con los datos obtenidos de la función de firebase.


**Enlaces**
- https://www.youtube.com/watch?v=WeABVtYYFaw

## Clase 3 : Consola de administración y documentación

> Resumen 
`Aqui solo enuncia funcionamiento del dashboard`
![dashboard](./info/Cloud_function_0002.png)

## Clase 4 : Consola de administración y documentación

# Primeros Pasos 

- [Documentacion Cloud function](https://firebase.google.com/docs/functions/get-started?hl=es-419) 
- [Clase 4](https://platzi.com/clases/1472-firebase-cloud/16632-creacion-del-proyecto-de-cloud-functions/)
>Resumen 
```
Vamos a ejecutar los siguientes comandos para instalar y preparar las herramientas de nuestro proyecto en Firebase:

Instalación: npm install -g firebase-tools

Login: firebase login

Iniciar el proyecto e instalar las dependencias necesarias: firebase init functions

Desplegar todas las funciones firebase deploy --only functions

Desplegar solo una función: firebase deploy --only functions:NombreDeLaFunción

Borrar una función: firebase functions:delete NombreDeLaFunción

Visualizar el log (el texto imprimido en la consola) de todas las funciones desplegadas: firebase functions:log
```

# Comandos a Recordar

Comandos:
Desplegar solo una función:

firebase deploy --only functions:helloworld
.
Eliminar una función:

firebase functions:delete helloworld
.
Ver log:

firebase functions:log
.
Ver log:

firebase functions:log

# Configurar tamaño de memoria y tiempo de espera
```
exports.helloWorld = functions.runWith({
  timeoutSeconds: 300,
  memory: '1GB'
}).https.onReques((request,response)=>{
  response.send('Hello from Firebase')
})
```



# Configurar Region 
```
# Normal:
exports.helloWorld = functions.https.onRequest((request, response) => {
        response.send("Hello from Firebase!");
});

# Cambiar la región:
exports.helloWorld = functions.region("NOMBRE DE LA REGIÓN. Ex. asia-northeast1").https.onRequest((request, response) => {
        response.send("Hello from Firebase!");
});

# Cambiar el espacio:
exports.helloWorld = functions.runWith("Cantidad de GB. Ex. 1GB").https.onRequest((request, response) => {
        response.send("Hello from Firebase!");
});
```

**Formar de Validar**
![Forma](./info/Cloud_function_0003.png)


## Clase 5 : Creación de las cloud functions de autenticación


**Nota**
- Para controlar las function debemos seguir arquitectura MVC es decir un archivo principal y este se podra modular entre los comtroladores 
- Podemos usar el auth para crear autenticaciones y crear usuarios editarlos y eliminarlos 

**Enlace**
- https://firebase.google.com/docs/functions/auth-events?hl=es-419
- https://firebase.google.com/docs/auth/extend-with-functions


**Resumen**
![Resumen](./info/Cloud_function_0004.png)

## Clase 6: Probando y desplegando las Cloud Functions de autenticación

**Nota**
- Comandos para ambiente de prueba local 
- firebase functions:config:get | ac .runtimeconfig.json
- firebase functions:config:get > .runtimeconfig.json
- firebase functions:config:unset configuration
- firebase functions:shell
- firebase emulators:start
- firebase functions:config:set configuration.variableSecreta=""valor de la variable secreta""
- firebase deploy --only functions:NombreFunction 


**Enlace**
- https://firebase.google.com/docs/functions/manage-functions?hl=es-419
- https://firebase.blog/posts/2020/05/local-firebase-emulator-ui 


![Resumen](./info/Cloud_function_0005.png)

## Clase 8: Probando y desplegando las cloud functions de Firestore
**Nota**
- Solo explica nada es decir solo hace un enunciado del aplicativo anterior 


**Enlace**
- https://firebase.google.com/docs/functions/local-emulator
- https://firebase.google.com/docs/functions/firestore-events


## Clase 9: Creación de las cloud functions para el storage

> Firebase también nos permite ejecutar nuestras funciones cuando suceden eventos relacionados a los archivos estáticos de nuestra aplicación, vamos a seguir el mismo proceso de las clases anteriores utilizando el siguiente código para ejecutar la lógica de negocios cuando los usuarios suben o eliminan sus imágenes:

```
exports.validarImagen = functions.storage
        .object()
        .onFinalize(/* el código que ejecutamos cuando los usuarios suben una nueva imagen */)
```

**Enlace**
- https://www.modpagespeed.com/examples/
- https://developers.google.com/speed/docs/insights/OptimizeImages
- https://firebase.google.com/docs/functions


## Clase 10:Terminando de crear cloud functions para el storage y probando su funcionamiento

> safeSerachDetection -> Google aplica machine learning para que este en formato seguro

**Nota**
- npm install --save @google-cloud/vision   -> https://www.npmjs.com/package/@google-cloud/vision
- Lo importante aqui es que podemos usar los eventos generados en el front y que esto corran cuando se ejecutan, añadiendo dicha funcionalidad, las function es solo desarrollo backend crear procesos sin tocar el front. 
- 

![Resumen](./info/Cloud_function_0006.png)


## Clase 12: Creación de la cloud function HTTPS


> Firebase también nos permite ejecutar nuestras funciones cuando suceden eventos HTTP, es decir, podemos utilizar las Cloud Functions para trabajar nuestra aplicación en forma de API.

> Para esto vamos a instalar la herramienta cors (para llamar nuestro código desde diferentes servidores) y express (para detectar las rutas por las cuales llamamos a nuestras funciones en forma de API). Recuerda que puedes aprender mucho más sobre estas herramientas en el Cuso de Express.js de Platzi.

`npm install --save express cors`

Tambien vamos a utilizar la función onRequest de la librería firebase-functions para indicarle a Firebase la configuración y las rutas que configuramos con express:

exports.enviarPostSemana = functions.https
        .onRequest(/* Nuestra aplicación de Express.js */)

**Enlace**
- https://firebase.google.com/docs/functions/http-events

## Clase 13: Bonus: Construyendo un controlador para la función HTTP

Para ver el ejemplo debemos verel archivo `Posts.js`

## Clase 14: Bonus: Construyendo un controlador para la función HTTP
Para ver el ejemplo debemos verel archivo `index.js`

> A diferencia de los otros tipos de Cloud Functions, necesitamos un servidor donde podamos llamar y ejecutar nuestras funciones HTTP. En vez de utilizar el comando firebase deploy --only functions vamos a utilizar el comando firebase serve --only functions y automáticamente vamos a desplegar nuestras funciones HTTP y podremos probarlas utilizando herramientas como Postman 

> Como tal este comando “firebase serve --only functions” no “desplega” (o si pero en el server local), se usa para levantar un servidor en local y poder hacer pruebas, siempre se necesita que hacer deploy si se va utilizar el llamado, todas los cloud Function necesitan de un servidor para poder ser llamadas, en este caso deben ser instancias de algunas VM de GPC las que pueden corer las funciones y si hace falta las escalan.


## Clase 15: Bonus: Usando las firebase cloud functions desde el hosting
Clase -> https://platzi.com/clases/1472-firebase-cloud/16643-usando-las-firebase-cloud-functions-desde-el-hosti/



```
Firebase hosting permite usar las cloud functions para procesamiento al lado del servidor. Esto permite que puedas generar contenido dinámico para tu sitio alojado en el hosting de firebase. Además puedes hacer:

Pre-render de tus SPA (Single Page Application) para mejorar el SEO: esto permite crear dinámicos tag de ‘meta’ que mejoran el SEO en redes sociales o buscadores.
Brindar contenido dinámico: No solo puedes brindar contenido estático, también es posible a partir una URL llamar una función que consulte algunos datos o los procese y con ello brindar un contenido dinámico a las páginas
```

``` 
//¿Cómo lo haces? Primero creas una función, ejemplo:

exports.renderPost = functions.https.onRequest((req, resp) => {
 console.log(req.query.idPost)
 return admin
   .firestore()
   .collection('posts')
   .doc(req.query.idPost)
   .get()
   .then(post => {
     return resp.status(200).send(`<!doctype html>
       <head>
         <title>Post</title>
       </head>
       <body>
           <article>
             <div>
                 <h2>${post.data().titulo}</h2>
             </div>
             <div>
                 <iframe type="text/html" width="500" height="385" src='${
                     post.data().videoLink}'
                     frameborder="0"></iframe>
             </div>
             <div>
                 Video
             </div>
             <div>
                 <p>${post.data().descripcion}</p>
             </div>
           </article>
       </body>
     </html>`)
   })
})

//Ahora agregamos una configuración de rewrite en el archivo firebase.json:

{
   "hosting": {
     "public": "public",
      
     "rewrites": [ {
       "source": "/post", 
  "function": "renderPost"
     } ]
   }
}
``` 

Desplegamos la función y la aplicación web a firebase y probamos con las URL

https://your-firebase-project-id.firebaseapp.com/post?idPost=ID_POST

Veremos que nos muestra una página con el contenido HTML definido en la función.

Además para mejorar el rendimiento al momento de renderizar la página podemos usar el caché de HTTP tanto el de los CDNs (Content Delivery Network) como el del browser. Esto lo puedes hacer de la siguiente forma:

resp.set('Cache-Control', 'public, max-age=300, s-maxage=600');

En esta línea estamos modificando el cache, asignado un tiempo de caché al browser de 5 minutos por medio del max-age y un tiempo de caché al CDN de 10 minutos por medio del s-maxage.

> Lo que haces con react o angular es usar compilar tu sitio y subirlo al hosting de firebase y hacer llamadas a tu API de firebase (functions https) o usar el SDK web de firebase para conectarse a las fuciones callables

## Clase  16 - 17: Creación de las cloud functions de Crashlytics - twilio

**Crashlytics**
> es un servicio de Firebase que nos permite registrar los errores de nuestras aplicaciones móviles (Android y IOS).

**Ejemplo**
```
exports.nuevoError = functions.creashlytics
	.issue()
	.onNew()
	.onRegressed()
	.onVelocityAllert
```

- Obtén estadísticas prácticas y claras sobre los problemas de tus apps con esta poderosa solución de informe de fallos para iOS y Android.

```
Al día de hoy 28 de mayo 2021, firbease functions en su versión 3.11.0 no incluye Crashlytics para registrar funciones debido a lo siguiente:


Precaución: La integración de Firebase Crashlytics con Cloud Functions para Firebase está obsoleta. El 1 de octubre de 2020, se dejarán de activar las funciones de Crashlytics que hayas implementado.
```


**Nota**
- Nos permite enviar un aviso por medio de SMS? !8o
- Puedes integrarlo si lo deseas por medio de servicios como twilio. https://www.twilio.com/

## Clase  17: 