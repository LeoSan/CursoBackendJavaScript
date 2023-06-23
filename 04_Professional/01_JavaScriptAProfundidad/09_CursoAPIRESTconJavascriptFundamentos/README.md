# 09 - Curso de API REST con Javascript: Fundamentos

## Clase 1: Bienvenida 
- Profesor : Juan David Castro Gallego
```
Aprende a consumir una API REST con JavaScript. Descubre el flujo de comunicación entre Frontend y Backend y haz tus primeras solicitudes asíncronas usando fetch. Comprende los fundamentos del consumo de APIs junto a tu profesor JuanDC.
```

**concepto**
- Las API son Interfaces de Programación de Aplicaciones, simplifican el desarrollo de aplicaciones al permitir que 
estas intercambien datos y funcionalidades de una forma fácil y segura.
- REST -> Protocolo de transferencia de estados -> Es una simple arquitectura o estructura de trabajo para modelas los servicos web  usando Json o XML
- SOAP -> Protocolo de acceso objeto simple -> Es una arquitectura que te indica cuales son los principios de comunicación para las APIS
- Json -> Notación de  objeto javascript 
**como**
Así es como funciona una API:

- Una aplicación cliente inicia una llamada a la API para recuperar información, también conocida como solicitud(Request).
- Esta solicitud se procesa desde una aplicación al servidor web a través del Identificador de Recursos Uniforme (URI) de la API e incluyen un verbo de petición como GET, POST, PUT o DEL, encabezados(headers), y a veces un cuerpo de petición(body).
- Después de recibir una solicitud válida, la API hace un llamado a un programa externo o un servidor web.
- El servidor envía una respuesta (Response) a la API con la información solicitada.
- La API transfiere los datos a la aplicación solicitante inicial.

![](./info/Screenshot_8.png)

## Clase 2: Flujo de comunicación entre usuarios, frontend y backend

**SSR**
- Server-side rendering: es una aplicacion la cual renderiza el HTML, CSS y JS en el servidor. 

**Punto positivo:**
- Mejor indexacion. Por que? Porque desde el servidor le das la data ya establecida a los robots de google.
- Velocidad instantacea a la hora de acceder a la pag, porque esta ya se renderizo en el servidor!

**Punto negativo:**
- Cuando la info se actualiza, se elimna la pgina y se trae TOOODA de nuevo desde el servidor, 
por lo tanto, no es posble hacer una red social porque no hay manera de trabajar con datos dinamicos.
- No influye en los resultados de bsuqueda la indexacion(no del todo)
- SSR es mas cosoto en termino de recursos del servidor.

**SPA**
- Single page application es una aplicacion la cual carga TOOODO el JS desde el inicio, y una vez que queremos actualizar los datos, 
llamamos al servidor(con la api) y le pedimos solo la informacion necesaria.

**Punto positivo** 
- Luego es muy rapida porque solo trae la informacion relevante del servidor.
- Es posible hacer una red social. ya que se trabajn justamente con datos dinamicos trayendo nuevos datos.


**Punto negativo**
- Mucho peso a la hora de cargar la aplicacion al inicio, ya que esta se renderiza en la pc de la persona y no en el 
servidor como server side rendering 


**ISOMORFISMO**
- Aplicacaciones que necesitan usar server side rendering para tener una indexacion perfecta,
 pero a su vez ser rapidas para tener informacion nueva al instante utilizando single page application son:

- Airbnb ⇒ Indexa con ssr, y actualiza info con SPA
- Linkedind, Twitter ⇒ Lo mismo
- Aunque no lo creas, mercadolibre no usa SSR, ya que en su app hay MUCHOS PRODUCTOS y no quieren matar a sus servidor renderizando  la informacion constantemente.

![API REST](./info/api_rest__01.png)

## Clase 3 - 4: 


**La palabra clave async:** 
- Debes colocar la palabra clave async antes de la declaración de una función para indicar que la función 
contiene código asincrónico y que devolverá una promesa.

**La palabra clave await**
- Dentro de una función async, puedes usar la palabra clave await antes de una expresión que devuelve una promesa. 
- El operador await pausa la ejecución de la función hasta que la promesa se resuelva o se rechace. 
- Mientras tanto, el control se devuelve a la llamada de la función, lo que permite que otras tareas se ejecuten en paralelo.

** Promesas:**
- Las expresiones que se pueden usar con await son objetos que implementan la interfaz de promesa. 
- Esto incluye las promesas nativas de JavaScript, así como las promesas devueltas por funciones asíncronas o métodos de API.

** Bloqueo no bloqueante:**
- Cuando se encuentra la expresión await, el hilo de ejecución no se bloquea, sino que se mueve a ejecutar otras tareas disponibles en ese momento. 
- Una vez que la promesa se resuelve, la ejecución se reanuda en la línea siguiente y el resultado de la promesa se asigna a la variable o se usa según sea necesario.

**Manejo de errores**
- Puedes usar el bloque try/catch para manejar errores en código async/await. 
- Si una promesa se rechaza mientras está siendo esperada con await, se lanzará una excepción y puedes capturarla con un bloque catch para manejar el error de forma adecuada.

## Clase 5: ¿Qué son los HTTP Status Codes?

**Concepto**
- Los códigos de estado HTTP se dividen en 5 «tipos». 
- Se trata de agrupaciones de respuestas que tienen significados similares o relacionados. 
- Saber qué son puede ayudarte a determinar rápidamente la sustancia general de un código de estado antes de que vayas a buscar su significado específico.

** Resumido HTTP status codes** 

- 1XX Respuestas Afirmativas
- 2XX Respuestas satisfactorias
- 3XX Re-direcciones
- 4XX Error del cliente
- 5XX Error de servidor

![status codes](./info/api_rest__02.png)


## Clase 6: ¿Qué es una API KEY?

**API KEY**
- Son una, no la única, de las formas en que el backend puede identificar quien está haciendo cada solicitud.
- Debemos entender dos conceptos importantes, la Autenticación y la Autorización.

**Autenticación**
- Consiste en identificar quien es cada quien. No sabe que permisos tiene fulano, No sabe que puede o no hacer fulano, Solamente sabe que él es fulano, que ella es pamela o que esa es una persona sin identificar.

**Autorización**
- Es la que nos dice que permisos tiene cada quien, es decir, si fulano quiere ir a la nevera para comerse un pastel, es la que dice, espérate fulano, tienes permisos para abrir la nevera?, a listo ábrela, tienes permisos de comerte el pastel?, a bueno comételo.
- Y además por poner un ejemplo más real, si fulano trata de ver las fotos privadas de pamela, la autorización va a decir, ok quien eres?, la autenticación ya te dijo que eras fulano, a listo perfecto, autenticación me pasas un token, listo ya sé que tu eres fulano, y luego empieza a revisar los permisos, como no los tiene se lo va a prohibir,
- Obviamente estos trabajan en conjunto para prohibir o permitir a toda la información que tenemos en nuestra aplicación, y ahí es donde entran las API KEYs.
- Estas API Keys son una de las formas en que el backend puede indentificar quien es cada quien.
- El backend necesita saber quien esta haciendo cada solicitud, para proteger la información privada de las personas, pero también en muchos casos, para limitar la cantidad o las solicitudes que le hacemos a la aplicación.

**Para que nosotros podamos enviarle esta API KEY en cada solicitud que hagamos al backend podemos utilizar varias formas:**
- Query parameter: ?apy_key=ABC123
- Authorization Header: X-API-Key: ABC123

**Alternativas**
- Authorization: Basic
- Authorization: Barer Token
- OAuth 2.0 (es de las mejores y más complicadas formas de autenticar en la modernidad)
- Access Key + Secret Key

## Clase 6-7: Maquetación del proyecto

## Practica 

## Clase 8: ¿Qué son los Métodos HTTP?

**HTTP**
- Un protocolo especifica reglas en la comunicación entre dos entes, en este caso entre dos computadoras.
- HTTP (Hyper Text Transfer Protocol) fue creado específicamente para la web.

**Verbos**
- Una de las cosas que especifica el protocolo HTTP son los verbos:
- GET: solicitar datos o algún recurso.
- HEAD: traer headers (como una peticion GET pero sin contenidos). Es util cuando vamos a utilizar APIs, para comprobar si lo que vamos a enviar esta correcto y puede ser procesado.
- POST: enviar datos a un recurso para la creación.
- PUT: reemplazar por completo un recurso.
- PATCH: reemplazar parcialmente un recurso.
- DELETE: eliminar un recurso.

## Clase 9: GET: leyendo michis favoritos

```
const HTTP={
  'OK': 200,
  'CREATED': 201,
  'BAD_REQUEST': 400,
  'UNAUTHORIZED': 401,
  'FORBIDDEN': 403,
  'NOT_FOUND': 404,
  'INTERNAL_SERVER_ERROR':500,
  'SERVICE_UNAVAILABLE': 503,
  'GATEWAY_TIMEOUT': 504,
}


const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=c08d415f-dea7-4a38-bb28-7b2188202e46';
const API_URL_FAVOTITES = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=c08d415f-dea7-4a38-bb28-7b2188202e46';

const spanError = document.getElementById('error')

async function loadRandomMichis() {
  const res = await fetch(API_URL_RANDOM);
  const data = await res.json();
  console.log('Random')
  console.log(data)

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status;
  } else {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    
    img1.src = data[0].url;
    img2.src = data[1].url;
  }
}

async function loadFavoritesMichis() {
  const res = await fetch(API_URL_FAVOTITES);
  const data = await res.json();
  console.log('Favoritos')
  console.log(data)

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
  }
}

loadRandomMichis();
loadFavoritesMichis();
```

## Clase 10: POST: guardando michis favoritos

```
const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=c08d415f-dea7-4a38-bb28-7b2188202e46';
const API_URL_FAVOTITES = 'https://api.thecatapi.com/v1/favourites?api_key=c08d415f-dea7-4a38-bb28-7b2188202e46';

const spanError = document.getElementById('error')

async function loadRandomMichis() {
  const res = await fetch(API_URL_RANDOM);
  const data = await res.json();
  console.log('Random')
  console.log(data)

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status;
  } else {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    
    img1.src = data[0].url;
    img2.src = data[1].url;
  }
}

async function loadFavouriteMichis() {
  const res = await fetch(API_URL_FAVOTITES);
  const data = await res.json();
  console.log('Favoritos')
  console.log(data)

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
  }
}

async function saveFavouriteMichis() {
  const res = await fetch(API_URL_FAVOTITES, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      image_id: 'dje'
    }),
  });
  const data = await res.json();

  console.log('Save')
  console.log(res)

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
  }
}

loadRandomMichis();
loadFavouriteMichis();
```


## Clase 11-12: Consultas a la API para escribir HTML dinámico

## Practicas !!!
> Podemos usar el appendChild para crear elementos dinamicos en el DOM de HTML 
```
async function loadFavouriteMichis() {
  const res = await fetch(API_URL_FAVOTITES);
  const data = await res.json();
  console.log('Favoritos')
  console.log(data)

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
  } else {
    data.forEach(michi => {
      const section = document.getElementById('favoriteMichis')
      const article = document.createElement('article');
      const img = document.createElement('img');
      const btn = document.createElement('button');
      const btnText = document.createTextNode('Sacar al michi de favoritos');

      img.src = michi.image.url;
      img.width = 150;
      btn.appendChild(btnText);
      article.appendChild(img);
      article.appendChild(btn);
      section.appendChild(article);
    });
  }
}
```



## Clase 13: ¿Qué son los Headers HTTP?

**Concepto**
- Los headers HTTP son parámetros que se envían en una transacción HTTP, que contienen información del estado de la transacción en curso.
- Cuando un cliente solicita información a un servidor, este puede pasarle información adicional en el header de la solicitud. 
- información del tipo de datos que se esperan recibir, del tipo de datos que envían, información de autenticación etc.
- De la misma forma el servidor puede incluir estos headers en las respuestas para mostrar información del estado de la solicitud.
- (HTTP Status Codes)

**Estos pueden ser separados en varios grupos: (fuente)**

**Request Headers**
- Pasan información de la solicitud. 
- Contienen información sobre el recurso solicitado e información del cliente que la solicita.
- URL a la que se le hace la solicitud, detalles de autenticación o políticas de cache

**Estos pueden ser:**
- Accept: Informan al servidor el tipo de datos que el cliente puede entender
- Accept: text/html
- Accept: application/xhtml+xml
- Accept: image/png
- Accept-Encoding: Envían información sobre el tipo de codificación que el cliente puede entender
- Accept-Encoding: gzip
- Accept-Encoding: gzip, compress

**Authorization:**
- sirve para pasar credenciales que le servirán al servidor determinar si el cliente tiene acceso a ciertos recursos

**Estos pueden ser:**
- Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
- Authorization: Bearer eyYWxhZGRpbjpvcGVuc2VzYW1l
 
**Accept-Language:**
- Permite saber al servidor que tipo lenguaje es entendido por el cliente logrando entender que configuración local es viable enviar. 
- Por ejemplo: los horarios, fechas, medidas, etc.

**Estos pueden ser:**
- Accept-Language: fr-CH
- Accept-Language: en-US

**Cache-Control:** 
- Contiene información sobre el control de la cache por parte del cliente y del servidor.

**Estos pueden ser:**
- Cache-Control: stale-while-revalidate=60
- Cache-Control: no-cache



**Response Headers**
- Así como los request headers contienen información del cliente, los response headers contienen información del servidor al que se le hace la petición.
- En realidad todos los headers enviados en un respuesta del servidor pueden ser llamados de esta manera.


**Age:** 
- Contienen información del tiempo que un objeto estuvo en caché. 
- Se representa en segundos. 
- Si es 0(cero) significa que la solicitud se obtuvo del servidor de origen. 
- Sino se calcula como la diferencia entre el Date del proxy y el date enviado por la respuesta original.
- Age: 24

**Server:** 
- Describen el software usado por el servidor que manejó la solicitud. Es decir el que generó la respuesta.
- Hay que tener en cuenta que hay que evitar demasiado detalle en estas respuesta ya que sino se estaría enviando información que podrían utilizar los atacantes(por ejemplo la versión del sistema operativo que utiliza el servidor). 
- Se utiliza por ejemplo para exponer la versión de apache utilizada,
- Server: Apache/2.4.1 (Unix)

**Location:** 
- indica la URL a la que redirigir una página. 
- Solo proporciona un significado cuando se sirve con una respuesta de estado 3xx (redireccionamiento) o 201 (creado).

**Representation Headers**
- Contienen información acerca del body de la solicitud, enviado en una respuesta o (en un POST)

**Estos pueden ser:**
- Content-type: Indica el tipo de contenido (formato de archivo) es enviado en una solicitud.
- ejemplo: Content-Type: text/html; charset=UTF-8
- Content-Enconding: Contienen la información necesaria para decodificar un archivo a su formato original.
- Content-Encoding: compress
- Content-Encoding: gzip
- Content-Languaje: Indica el lenguaje para los cuales es más relevante el contenido de una página, de modo que los usuarios puedan diferenciarlos según su propio idioma preferido.
- Content-Language: en-US
- Content-Language: en-CA
- Content-Location: Indican un URL o dirección alternativa para la respuesta. A diferencia de Location (en Request Headers). Este indica la url directa que puede ser utilizada para acceder al recurso. Mientras Location esta asociada la respuesta en si, content-location esta asociada a los datos devueltos.

Por ejemplo: Si una api puede devolver datos en los formatos JSON, XML o CSV y su ruta se encuentra en https://ejemplo.com/documents/archivo.
El sitio podría retornan distintas url dependiendo del parámetro Accept pasado en la solicitud.

**Request header	Response header**
- Accept: application/json, text/json	Content-Location: /documents/foo.json
- Accept: application/xml, text/xml	Content-Location: /documents/foo.xml
- Accept: text/plain, text/*	Content-Location: /documents/foo.txt

**Payload Headers**
- Contiene información acerca de la carga de la respuesta. Lenght, Enconding, Range.

**Estos pueden ser:**
- Content-Lenght: Indica el tamaño del body del mensaje en bytes
- Content-Length: 3495
- Content-Range: Indica la posición a la que pertenece una porción del mensaje respecto al body.
- Content-Range: <unit> <range-start>-<range-end>/<size>
- Content-Range: bytes 200-1000/67589

## Clase 14: Header de autorización

**OJO:**
Mandar un api-key mediante un header no lo hace más seguro que con query parameters. Cualquiera podría conseguir el api-key mediante los headers, por lo que también es inseguro esta forma. Por eso existen formas de autenticación modernos como OAuth.

```
const saveImageFavorites = async(id) => {
    console.log('start'+id);
    console.log("el id es "+ id);
    const res = await fetch(API_URL_DELATE_FAVORITES, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': '93281cee-4d7f-4c6d-abc9-62cc90323eb1',
        },
        body: JSON.stringify({
            'image_id': id,
        }),
    });
    const data = await res.json();
    console.log('save');
    console.log(res);

    const element = document.getElementById('start'+id);
    element.classList.add('start-active');

    if(res.status !== 200){
        console.log("Error: "+ res.status +" "+ data.message)
    }else {
        getImagesFavorites();
    }
};
```

## Clase 15: Header de Content-Type

```
Contentypes para descargar excel, pero con application/json, tuve que utilizar response.blob no sé si es la mejor manera, pero creo que hay que descubrirlo adicional a ello para lograr la descarga, tuve que utilizar lo siguiente en la segunda sentencia .then donde tenemos los datos (con fetch):

var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'demo.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
Como dato curioso, el nombre original del archivo proveniente desde el servidor lo obtuve extrayéndolo de los headers de la respuesta, para no desperdiciar la lógica del backend que sé que hicieron con mucho esfuerzo, fue algo tedioso, pero solucione al final del día.
```

## Clase 16:FormData: publicando imágenes de michis

**Concepto**
- La interfaz FormData proporciona una manera sencilla de construir un conjunto de parejas clave/valor que 
representan los campos de un formulario y sus valores, que pueden ser enviados fácilmente con el método 
XMLHttpRequest.send() (en-US). 
- Utiliza el mismo formato que usaría un formulario si el tipo de codificación fuera "multipart/form-data".
- También puede pasarse directamente al constructor de URLSearchParams si se quieren generar parámetros de 
consulta de la misma forma en que lo haría un <form> si usara un envío GET simple.

- Un objeto que implementa FormData puede usarse directamente en una estructura for...of, en lugar de entries() (en-US): 
for (var p of myFormData) es equivalente a for (var p of myFormData.entries()).


**Usando la propiedad reader** 
```
function miniatura() {
    const form = document.getElementById('uploadingForm')
    const formData = new FormData(form)
	//usamos el FileReader para sacar la información del archivo del formData
    const reader = new FileReader();

//Este código es para borrar la miniatura anterior al actualizar el form.
    if (form.children.length === 3) {
        const preview = document.getElementById("preview")
        form.removeChild(preview)
    }
//aquí sucede la magia, el reader lee los datos del form.
    reader.readAsDataURL(formData.get('file'))

//Éste código es para cuando termine de leer la info de la form, cree una imagen miniatura de lo que leyó el form.
    reader.onload = () => {
        const previewImage = document.createElement('img')
        previewImage.id = "preview"
        previewImage.width = 50
        previewImage.src = reader.result
        form.appendChild(previewImage);
    }

}
```
 


**Enlace**
- https://developer.mozilla.org/es/docs/Web/API/FormData

## Clase 17: Axios: librerías de JavaScript para consumir APIs

**Front**
```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Gatitos aleatorios</title>
</head>
<body>
<h1>Michis App</h1>
<span id="error"></span>
<section id="randomMichis">
<h2>Michis aleatorios</h2>
<article>
<img id="img1" width="150" alt="Foto gatito aleatorio">
<button id="btn1">
Guardar michi en favoritos
</button>
</article>
<article>
<img id="img2" width="150" alt="Foto gatito aleatorio">
<button id="btn2">
Guardar michi en favoritos
</button>
</article>
<button onclick="loadRandomMichis()">Recargar</button>
</section>
<section id="uploadingMichi">
<h2>Sube la foto de tu michi</h2>
<form id="uploadingForm">
<input id="file" type="file" name="file" />
<button type="button" onclick="uploadMichiPhoto()">Subit foto de michi</button>
</form>
</section>
<section id="favoriteMichis">
<h2>Michis favoritos</h2>
<article>
<img id="img1" width="150" alt="Foto gatito aleatorio">
<button>Sacar al michi de favoritos</button>
</article>
</section>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="./main.js"></script>
</body>
</html>
```

**Backend**
```
const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1'
});
api.defaults.headers.common['X-API-KEY'] = 'c08d415f-dea7-4a38-bb28-7b2188202e46';

const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2';
const API_URL_FAVOTITES = 'https://api.thecatapi.com/v1/favourites';
const API_URL_FAVOTITES_DELETE = (id) => `https://api.thecatapi.com/v1/favourites/${id}`;
const API_URL_UPLOAD = 'https://api.thecatapi.com/v1/images/upload';

const spanError = document.getElementById('error')

async function loadRandomMichis() {
  const res = await fetch(API_URL_RANDOM);
  const data = await res.json();
  console.log('Random')
  console.log(data)

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status;
  } else {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    
    img1.src = data[0].url;
    img2.src = data[1].url;

    btn1.onclick = () => saveFavouriteMichi(data[0].id);
    btn2.onclick = () => saveFavouriteMichi(data[1].id);
  }
}

async function loadFavouriteMichis() {
  const res = await fetch(API_URL_FAVOTITES, {
    method: 'GET',
    headers: {
      'X-API-KEY': 'c08d415f-dea7-4a38-bb28-7b2188202e46',
    },
  });
  const data = await res.json();
  console.log('Favoritos')
  console.log(data)

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
  } else {
    const section = document.getElementById('favoriteMichis')
    section.innerHTML = "";

    const h2 = document.createElement('h2');
    const h2Text = document.createTextNode('Michis favoritos');
    h2.appendChild(h2Text);
    section.appendChild(h2);

    data.forEach(michi => {
      const article = document.createElement('article');
      const img = document.createElement('img');
      const btn = document.createElement('button');
      const btnText = document.createTextNode('Sacar al michi de favoritos');

      img.src = michi.image.url;
      img.width = 150;
      btn.appendChild(btnText);
      btn.onclick = () => deleteFavouriteMichi(michi.id);
      article.appendChild(img);
      article.appendChild(btn);
      section.appendChild(article);
    });
  }
}

async function saveFavouriteMichi(id) {
  const { data, status } = await api.post('/favourites', {
    image_id: id,
  });
  
  // const res = await fetch(API_URL_FAVOTITES, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'X-API-KEY': 'c08d415f-dea7-4a38-bb28-7b2188202e46',
  //   },
  //   body: JSON.stringify({
  //     image_id: id
  //   }),
  // });
  // const data = await res.json();

  console.log('Save')

  if (status !== 200) {
    spanError.innerHTML = "Hubo un error: " + status + data.message;
  } else {
    console.log('Michi guardado en favoritos')
    loadFavouriteMichis();
  }
}

async function deleteFavouriteMichi(id) {
  const res = await fetch(API_URL_FAVOTITES_DELETE(id), {
    method: 'DELETE',
    headers: {
      'X-API-KEY': 'c08d415f-dea7-4a38-bb28-7b2188202e46',
    }
  });
  const data = await res.json();

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
  } else {
    console.log('Michi eliminado de favoritos')
    loadFavouriteMichis();
  }
}

async function uploadMichiPhoto() {
  const form = document.getElementById('uploadingForm')
  const formData = new FormData(form);

  console.log(formData.get('file'))

  const res = await fetch(API_URL_UPLOAD, {
    method: 'POST',
    headers: {
      // 'Content-Type': 'multipart/form-data',
      'X-API-KEY': 'c08d415f-dea7-4a38-bb28-7b2188202e46',
    },
    body: formData,
  })
  const data = await res.json();

  if (res.status !== 201) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
    console.log({data})
  } else {
    console.log('Foto de michi subida :)')
    console.log({data})
    console.log(data.url)
    saveFavouriteMichi(data.id);
  }
}

loadRandomMichis();
loadFavouriteMichis();
```

## Clase 18: 

![Matriz de responsabilidades](./info/Screenshot_6.png)
![Matriz de responsabilidades](./info/Screenshot_7.png)


**Enlaces**
Lecturas recomendadas

Request.cache - Web APIs | MDN

https://developer.mozilla.org/en-US/docs/Web/API/Request/cache


fetch() - Web APIs | MDN

https://developer.mozilla.org/en-US/docs/Web/API/fetch


Request - Web APIs | MDN

https://developer.mozilla.org/en-US/docs/Web/API/Request


HTTP caching - HTTP | MDN

https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#freshness


Headers - Web APIs | MDN

https://developer.mozilla.org/en-US/docs/Web/API/Headers


HTTP caching - HTTP | MDN

https://developer.mozilla.org/es/docs/Web/HTTP/Caching#actualizaci%C3%B3n


Response - Web APIs | MDN

https://developer.mozilla.org/en-US/docs/Web/API/Response

## Clase 19: 

**seandBeacon**
- No espera una respuesta del servidor 
- Es buena idea pra las analiticas

**GraphQL**
- Empowered cliente 
- Nos permite no tener tantos Endpoint 
- No es el bakend que decide, decide el front como queremos la repsuesta 
- Tenemos querys  -> Permite definir la estrutura de que lo deseamos 
- Tenemos mutation ->  podemos definir que podemos crear y que debemos obtener  


**DNS (Domain Name System)** 
- Lo usamos para poder comunicarnos con otros sitios a travez de un nombre de dominio como wwwplatzicom, 
sin ello sería atravez de la IP “000.00.000.000” del servidor donde se encuentra 
esa página y como es muy larga y difícil de recordar se uso DNS en la web2.

**ENS (Ethereum Naming Service)**
- Es la sustitución del DNS pero en la web3, ahora como cada persona tiene su wallet 
en el mundo del crypto pues la dirección seria algo a si “e32fre43f584bnf2784b3” 
lo cual se repite la historia como con la IP, es muy difícil de recordarla.
- Ejemplo -> Al comprar el dominio ENS seria de esta forma “badman.eth”

![Desarrollo tradicional ](./info/Screenshot_4.png)
![Desarrollo descentralizadas ](./info/Screenshot_5.png)


