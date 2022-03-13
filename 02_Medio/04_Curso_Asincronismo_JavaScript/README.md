# 04_Curso_Asincronismo_JavaScript
Este nivel es sobre nuevas funciones e implementacones de ECMAScript 5-6-7 

## Clase 1: Bienvenida 
- Profesor Oscar Barajas Tavares  @gdnx 

## Clase 2: Introducción al asincronismo

**Asíncrono**
La finalización de la operación I/O se señaliza más tarde, mediante un mecanismo específico como por ejemplo un callback, una promesa o un evento, lo que hace posible que la respuesta sea procesada en diferido.

El asincronismo es básicamente una manera de aprovechar el tiempo y los recursos de nuestra aplicación, ejecutando tareas y procesos mientras otros son resueltos en background

**Memory Heap**
Región de memoria libre, normalmente de gran tamaño, dedicada al alojamiento dinámico de
objetos. Es compartida por todo el programa y controlada por un recolector de basura que se encarga de liberar aquello que no se necesita.

**Call Stack**
La pila de llamadas, se encarga de albergar las instrucciones que deben ejecutarse. Nos indica en que punto del programa estamos, por donde vamos.


**Eventloop o Loop de eventos**
Cuando la pila de llamadas (call stack) se vacía, es decir, no hay nada más que ejecutar, se procesan los mensajes de la cola. Con cada ‘tick’ del bucle de eventos, se procesa un nuevo mensaje.

**Hoisting**
Sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código en tiempo de compilación. 


**Transpilar**
Transpilar es generar a partir de código en un lenguaje código en otro lenguaje. Es decir, un programa produce otro programa en otro lenguaje cuyo comportamiento es el mismo que el original.

**Cola o Queue**
Cada vez que nuestro programa recibe una notificación del exterior o de otro contexto distinto al de la aplicación, el mensaje se inserta en una cola de mensajes pendientes y se registra su callback correspondiente.

## Clase 3: Presentación del reto: consumir APIs

Solo se presenta la APIs que vamos a usar para el desarrollo de la practica

- Nuestra Apis - >https://rickandmortyapi.com/

## clase 4 -5-6: Definición Estructura Callback

>  “Es una función que al crearla le pasamos como parámetro una segunda función”. Según lo que entiendo, eso no haría referencia directamente al callback, sino a la función que recibe como parámetro otra función.

- Una función que recibe otra función como parámetro se le denomina función de orden  superior (higher-order function).
- El callback en este caso sería la función que es pasada como parámetro, mas no la función que lo recibe.
- Primero: Los callbacks son el nombre de una convención para usar funciones que llaman a otras en JavaScript. No hay una palabra reservada llamada “callback” en el lenguaje JavaScript que haga que nuestro código sea diferente o especial,
es mas una convención.
- Nota:  Lo Ideal es solo tener maximo tres llamadas para no llegar al callback hell 

```
//Creamos nuestra función 
const suma =( num1, num2)=>{
    return num1  + num2;
}

function calc(num1, num2, callback){

    return callback(num1, num2);
}

console.log(calc(1, 3, sum));
```

## clase 7-8: Implementando Promesas

> Para crear una promesa utilizamos la palabra reservada new seguida de la palabra Promise que es el constructor de la promesa. Este constructor recibe un único parámetro que es una función, la cuál a su vez, recibe otros dos parámetros, resolve y reject. El parámetro resolve se utiliza para cuando la promesa devuelve el valor correctamente mientras que reject, se usa en el que caso de que no funcione.


### Métodos de las promesas


**Promise.all(iterable)**

**Devuelve una de dos promesas:**

- una que se cumple cuando todas las promesas en el argumento iterable han sido cumplidas,

o una que se rechaza tan pronto como una de las promesas del argumento iterable es rechazada.

- Si la promesa retornada es cumplida, lo hace con un arreglo de los valores de las promesas cumplidas en el mismo orden definido en el iterable.

- Si la promesa retornada es rechazada, es rechazada con la razón de la primera promesa rechazada en el iterable. Este método puede ser útil para agregar resultados de múltiples promesas

**Promise.race(iterable)**
- Devuelve una promesa que se cumple o rechaza tan pronto como una de las promesas del iterable se cumple o rechaza, con el valor o razón de esa promesa.

**Promise.reject(reason)**
Devuelve un objeto Promise que es rechazado con la razón dada.


>PD XD: un Fetch es una forma de proemsa  
Enlaces:
- https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
- https://medium.com/@mvtercero85/promise-te-lo-prometo-por-javascript-8b3ae2c5bbb4#:~:text=%C2%A1Vamos%20a%20crear%20una%20promesa,dos%20par%C3%A1metros%2C%20resolve%20y%20reject 



## clase 7-8-9-10: Conociendo Async/await

**La palabra clave async**

Primero tenemos la palabra clave “async”, que se coloca delante de la declaración de una función, para convertirla en función “async”(asíncrona). Una función “async”, es una función que sabe cómo esperar la posibilidad de que la palabra clave “await” sea utilizada para invocar código asíncrono.

**La palabra clave await**
La ventaja real de las funciones asincronas aparecen cuando las combinas con la palabra clave await — en efecto, await solo trabaja dentro de las funciones async. Esta puede ser puesta frente a cualquier función async basada en una promesa para pausar tu codigo en esa linea hasta que se cumpla la promesa, entonces retorna el valor resultante. Mientras tanto, otro código que puede estar esperando una oportunidad para ejecutarse, puede hacerlo.

Puedes usar await cuando llames cualquier función que retorna una Promesa, incluyendo funciones web API.

> Async/await no es mas que Syntax Sugar. Es una manera mas bonita de hacer lo mismo que estabamos haciendo con .then(). La clave es recordar que si una función regresa un promesa, podemos usar el keyword await, que le indicia al navagador: “Espera a que la promesa se resuleva y almacena su resultado en esta variable”. Todo esto toma lugar dentro de una función asincrona, asi que usamos async para lograr esto

> Mas que azucar sintactica, en algunos casos, depende de lo que estemos haciendo es cuando async/await es mucho mas util que utilizar solamente Promises.

`Por ejemplo, cuando necesitamos que el contenido de una promesa resuelta esté disponible en diferentes scopes, ya que la respuesta solo estará disponible dentro del scope de las funciones de la respuesta y una vez se resuelva, esta se “destruye” por decirlo de algun modo.`

>PD: He visto que si haces varias peticiones en una fn con promesas y al ultimo las capturas con promise.all() se ejecuta mas rápido que si pones varias peticiones en una fn con await ,ya que esta ultima espera a que responda la petición anterior para pedir la siguiente

>Algo curioso es que al ponerle a una función “async” automáticamente esa función se convierte en una promesa, esto quiere decir que, si tu quisieras saber cuándo terminan de ejecutarse los async/await simplemente basta con que al llamado de tu función le agregues un then:

Enlace: 
Video -> https://www.youtube.com/watch?v=pywyV4pbnQQ

## Clase  11: Ventajas y desventajas
Callbacks --> Ventajas: Simple(una función que recibe otra función). Son universales, corren en cualquier navegador.
Desventajas: Composición tediosa, anidando cada vez más elementos. Caer en Callback Hell.

Promesas --> Ventajas: Facilmente enlazables .Then( return… ).Then - Fácil e intuitivo de leer.
Desventajas: Posible error si no se retorna el siguiente llamado. No corre en todos los navegadores.

Async-Await --> Ventajas: Se puede usar try-catch . Código más ordenado e intuitivo.
Desventajas: No corre en todos los navegadores (se requiere un transpilador).

>PD XD: En conclusión usar Callbacks, Promesas, Async y Await nos permite controlar el flujo de nuestra aplicación para no colapsar los recursos al hacer los llamados al mismo tiempo. Esto en español significa que tendremos una mayor rápidez en nuestras aplicaciones.