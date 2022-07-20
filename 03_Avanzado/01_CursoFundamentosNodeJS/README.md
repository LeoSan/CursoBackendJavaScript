# 01 - Avanzado JS - Curso de Fundamentos de Node.js

Descubre que es Node.js, y por que es tan potente. Si ya has trabajado con Node.js, vas a profundizar conocimientos sobre como funciona por debajo todo el codigo que ya has hecho.

## Clase 1: Bienvenida 
- Profesor Carlos Hernández  @gdnx 
- [Documentaci��n de Node.js](https://nodejs.dev/learn)

## Clase 2: Node: or��genes y filosof��a 

**Origenes**
- NodeJS es un entorno de ejecución de JavaScript fuera del navegador. 
- Se crea en 2009, orientado a servidores. 
- Es muy importante que está fuera del navegador debido a que ya no es necesario un navegador web para ejecutar código JavaScript.
- Open Source 


**Características principales de JavaScript:**

- Concurrencia: Es monohilo, con entradas y salidas asíncronas.
- Motor V8: Creado por Google en 2008 para Chrome. Escrito en C++. 
- Convierte JS en código máquina en lugar de interpretarlo en tiempo real.
- Todo funciona en base a Módulos, que son piezas de código muy peque?as que modularizan nuestros sistemas y ayudan a entender mejor el código.
- Orientación a Eventos, existe un bucle de eventos que se ejecuta constantemente. Lo que nos permite programar de forma reactiva, lo que quiere decir que podemos programar con la lógica de Cuando sucede algo, se ejecuta esta parte de mi código y eso a su vez dispara otra parte.

## Clase 3 - EventLoop: asíncrona por diseño

**Event Loop**
- Un proceso con un ++bucle ++que gestiona, de forma asíncrona, todos los eventos de tu aplicación.
- Se encarga de resolver los eventos ultra rápidos que llegan desde el Event Queue. 
- En caso de no poder resolverse rápido, envió el evento al Thread Pool.

**Event Queue**
- Contiene todos los eventos que se generan por nuestro código (Funciones, peticiones, etc.), 
 estos eventos quedan en una cola que van pasando uno a uno al Event Loop.

**Thread Pool** 
- Se encarga de gestionar los eventos de forma asíncrona. 
- Una vez terminado lo devuelve al Event Loop. 
- El Event Loop vera si lo pasa a Event Queue o no.
- Generar hilos por cada proceso apoyandote en el procesador 
  

**Ejemplo**

![Ejemplo de evento loop](info/EventoLoop.png)


## Clase 4: Monohilo: implicaciones en diseño y seguridad

El hecho de que sea monohilo lo hace delicado en el sentido de que puede ejecutarse algo que corte el código y detenga el programa, como la ausencia de sintaxis o una variable pendiente por definir.

Aquí se pueden ver los problemas de seguridad y los Updates en este tema. Muy interesante leerlo para entender cómo atacan y saltan el código y cómo lo resolvieron.

https://nodejs.org/en/blog/vulnerability/february-2020-security-releases/

**PROCESO DE NODE**

    1.- Va a abrirse un proceso, ese proceso es un proceso de node
    2.- Interpreta todo el archivo
    3.- Convertirlo a código maquina
    4.- Prepara todo lo que necesita para ejecutarse
    5.- Se ejecuta
    6.- Se cierra el proceso, y termina

**DESVENTAJAS MONOHILO**

    - Si no se manejan bien los errores y uno truena, ya no continua con los procesos posteriores
    - Debes estar pendiente de todo el código
    - Si al romper un fragmento de codigo este rompe toda la estructura. 

```
/*Metodo que sigie hasta el infinito */ 
setInterval(()=>{

    console.log("Sigo activo");

}, 1000) 


let i = 0;
setInterval(function () {
    console.log(i++);
    try {
        if (i === 5) {
            var a = 3 + z;
        }
    } catch (error) {
        console.error(error)
    }
}, 1000)

``` 

## Clase 5:  Configurar las variables de entorno en Node.js

Las variables de entorno son una forma de llamar información de afuera a nuestro software, sirve para definir parámetros sencillos de configuración de los programas de modo que puedan ejecutarse en diferentes ambiente sin necesidad de modificar el código fuente de un script.

El objeto process nos da información sobre el procesos que está ejecutando este script.
La propiedad env es la que nos da acceso a las variables de entorno de manera sencilla.

- npm i dotenv -D
- npm i node-env-file

**Enlace**
https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786

## Clase 5: Herramientas para ser más felices: Nodemon y PM2

**Nodemon esto es para desarrollo**https://nodemon.io/
- Paso 0: Clase debes tener instalada node  y tu packaheconfig.js 
- Paso 1: Debemos instalar nodemon ->`npm install -g nodemon`
- Paso 2: Para windows pues apuntas al archivo que deseas escuchar los cambios -> `npx nodemon archivo.js`  
- 

**PM2 -> Esto es para producción** https://pm2.keymetrics.io/
- Paso 0: Clase debes tener instalada node  y tu packaheconfig.js 
- Paso 1: Debemos instalar nodemon ->`npm install pm2 -g`
- Paso 2: Para windows pues apuntas al archivo que deseas escuchar los cambios -> `pm2 start nombrearchivo.js`  
- 



