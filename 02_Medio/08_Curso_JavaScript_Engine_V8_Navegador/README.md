# 07 ¿Qué es React.js?

Este nivel es sobre nuevas funciones e implementacones de ECMAScript 5-6-7 

## Clase 1: Bienvenida 
- Profesor Diego De Granda  

## Clase 2: Historia de JavaScript


**¿Cómo nace este lenguaje de Programación?**
⠀⠀⠀
⠀⠀
- 1991 - Nace HTTP como protocolo
- 1992 - Nace HTML1
- 1995 - Nace JavaScript
⠀⠀⠀
> JavaScript nace por la necesidad de evolucionar la web por **Brendan Eich**, antes de eso las páginas eran muy simples y carecían de estilo.
⠀⠀⠀
>Antes de JavaScript creo un lenguaje de programación llamado **Mocha** para el navegador de Netscape. Este tuvo muchas areas de oportunidad y fue evolucionando.
⠀⠀⠀
>Llegó a un estado final llamado JavaScript, este nombre fue dado más por motivos de marketing (para popularizar el lenguaje) ya que en ese año, estaba teniendo mucho impacto el lenguaje de Java.
⠀⠀⠀

**JScript**
⠀⠀⠀
> Después Microsoft en este mismo año, tomó la tecnología a la inversa para crear un lenguaje de programación para su propio navegador (Internet Explorer).
⠀⠀⠀
> En 1997 un grupo llamado ECMA decide poner un orden a los lenguajes de estaban surgiendo, ya que tener tantos lenguajes era peligroso. Ellos estandarizaron el lenguaje de Javascript como el lenguaje único del Navegador.
⠀⠀⠀
**Caracteristicas**
- V8
- Es un Engine de Javascript que corre en el navegador
- 2009 - Nace Node.js
- 2010 - Nacen los primeros Frameworks
- 2015 - Nace ECMA Script 2015 (ES6)


Cinco preguntas de examen en cuatro lineas:
JavaScript es un lenguaje de programación que se utiliza principalmente para ✅ crear páginas web dinámicas; Fue desarrollado originalmente por ✅ Brendan Eich de ✅Netscape con el nombre de ✅Mocha, el cual fue renombrado posteriormente a LiveScript, para finalmente quedar como ✅JavaScript en el año 1995.

## Clase 3: ¿Cómo funciona el JavaScript Engine?

JavaScript Engine: Es el motor de JS, siempre corre en el navegador.
Su función es interpretar el código JavaScript y convertirlo a Machine Code para que la máquina pueda entenderlo.

- Just in time compiler: Es la compilación en tiempo real que sucede en el proceso del Engine.


Como funciona -> https://www.campusmvp.es/recursos/post/fundamentos-de-javascript-por-que-deberias-saber-como-funciona-el-motor.aspx


## Clase 4: V8, el JavaScript Engine de Chrome 💛


**¿Qué es V8?**
- V8 es un motor open-source escrito en C++ para compilar JavaScript y WebAssembly en código máquina. 
- Esto quiere decir que traduce JavasScript a un código puramente digital capaz de ser interpretado por la CPU donde se ejecuta.
- Este motor fue desarrollado por Google para Google Chrome y su primera versión vio la luz en 2008 junto con la primera versión del navegador.

**Tres preguntas de exmen**
- El motor de JavaScript V8 es lanzado en el 2008, a traves del navegador de Google Crhome, pero especialemte nacio para que la aplcacion Google Maps corriera mas rapido.
- V8 ayuda a que JS corra de manera más rápida, con esto podemos crear aplicaciones más robustas y rápidas.

- Motor de JavaScript que corre en el navegador de Chrome
- No es el único motor de JavaScript [cada navegador tiene el suyo]
- Bastantes navegadores están implementado V8
- Nace debido a que necesitaba correr de una manera correcta Google Maps 🗺️
- Se necesitaba tener un entorno el cual sea rápido y eficiente
- Con la idea de aplicar a otros usos ⇒ mejoran V8
- V8 ⇒ puede ser implementado en el back end con Node
- RESUMEN: V8 nace por la necesidad de crear aplicaciones con JS de una manera mas robusta


## Clase 5: Profundizando en el Engine

- Hoisting es la forma en cómo Javascript interpreta las declaraciones que ocurren en nuestro código, para de ésta forma darle un contexto en el momento de ejecución.
- Esto es que cuando escribimos código JS, el motor va a agarrar eso escrito y por medio de su contexto de ejecución va a realizar un Parser, un analisis de lo que está escrito.
- Si encuentra algo mal, detiene su ejecución y devuelve el error.
- Por lo contrario, enviará todo al AST para que, de acuerdo a su estructura, se construye un árbol de sintaxis de lo que llegó del Parser.
- Esto se interpreta y si es necesario se optimiza, para finalmente enviarlo a que lo lea la máquina por medio del Byte Code.


Profundizando el Engine.

Cuando el motor de Js comienza a interactuar, empieza por realizar un Parseo(parser), esto le ayuda a encontrar las claves principales.Luego el resultado se pasa al AST(Abstract Sintax Tree). A continuacion se interpreta y se convierte a ByteCode.

Durante el interpretado si el interprete se da cuenta que hay mucho codigo para optimizar, actua el Profile(monitor), el cual ayuda a cumplir esta tarea. Al finalizar la optmizacion el codigo se compila y lo regresa como ByteCode.

Durante esta tarea es donde se puede encontrar el hoisting.

## Clase 6: Ejemplo de Objeto global y hoisting

El var sirve para inicializar una variable, esta puede ser usada en el entorno global.
.
El let solo va a poder ser usado en el bloque de código en el que se haya declarado.
.
El const también se va a usar en el bloque en el que se haya declarado y este no se va a poder cambiar jamás, es una constante.


Como tal, Javascript no eleva las declaraciones de function y de var, lo que hace es que en el momento de parsearlo, se buscan las palabras claves y se le asignan un valor, un estado inicial en los siguientes casos es:

var: le asigna undefined.
let y const: le colocá No asignado.
para las function declaration si les asigna su contenido propio.
El hecho de “elevar” es una forma de simplificar la explicación, pero es importante reconocer que es lo que sucede realmente para nuestra formación profesional


## Clase 7: Memory Heap

**Que es el memory heap?**

>Es un lugar donde se guardan objetos y funciones en bloques de memoria de forma arbitraria y sin un orden, los cuales pueden ser usados múltiples veces y sin una referencia unica.

**Caracteristicas**
- Donde se almacena los valores de las variables y las funciones
- Se destina un espacio en memoria para las variables.
- La información en el memory heap, No se guarda de manera lineal

**Los objetos**
Los objetos en JS (objetos, arrays, funciones y básicamente todo lo que no sea un valor primitivo) se almacenan en una parte de memoria que de llama Memory Heap.

**Los valores primitivos**
Los valores primitivos son almacenados en algo llamado Call Stack.

**El scope y su forma de trabajar.**
Dentro del Scope o el Contexto de Ejecución. Acceder al Call Stack es mucho más rápido que al Heap.
Además, en el Call Stack también se guardan las referencias, “como si fueran valores primitivos”.
Cuando se asigna una variable a otra y esta apunta a un objeto, se copia la referencia, como si fuera un valor primitivo.
Si el objeto tiene atributos como un número por ejemplo, este se guarda en la posición de memoria reservada para ese objeto.
Los objetos también pueden tener más objetos dentro. En ese caso, dentro de la posición de memoria de ese objeto se va a guardar una referencia a otra posición de memoria

**El memory heap guarda todos los datos de manera “desordenda”, pero JavaScript sabe en dónde están esos datos. JavaScript es un lenguaje de un solo hilo, aunque pudiera parecer multitarea, este efecto es gracias al Event Loop:D!**

