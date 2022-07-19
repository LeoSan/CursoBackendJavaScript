# 01 - Avanzado JS - Curso de Fundamentos de Node.js

Descubre qu谷 es Node.js, y por qu谷 es tan potente. Si ya has trabajado con Node.js, vas a profundizar conocimientos sobre c車mo funciona por debajo todo el c車digo que ya has hecho.

## Clase 1: Bienvenida 
- Profesor Carlos Hern芍ndez  @gdnx 
- [Documentaci車n de Node.js](https://nodejs.dev/learn)

## Clase 2: Node: or赤genes y filosof赤a 

**Origenes**
- NodeJS es un entorno de ejecuci車n de JavaScript fuera del navegador. 
- Se crea en 2009, orientado a servidores. 
- Es muy importante que est谷 fuera del navegador debido a que ya no es necesario un navegador web para ejecutar c車digo JavaScript.
- Open Source 


**Caracter赤sticas principales de JavaScript:**

- Concurrencia: Es monohilo, con entradas y salidas as赤ncronas.
- Motor V8: Creado por Google en 2008 para Chrome. Escrito en C++. 
- Convierte JS en c車digo m芍quina en lugar de interpretarlo en tiempo real.
- Todo funciona en base a M車dulos, que son piezas de c車digo muy peque?as que modularizan nuestros sistemas y ayudan a entender mejor el c車digo.
- Orientaci車n a Eventos, existe un bucle de eventos que se ejecuta constantemente. Lo que nos permite programar de forma reactiva, lo que quiere decir que podemos programar con la l車gica de ※Cuando sucede algo, se ejecuta esta parte de mi c車digo y eso a su vez dispara otra parte§.

## Clase 3 - EventLoop: as赤ncrona por dise?o

**Event Loop**
- Un proceso con un ++bucle ++que gestiona, de forma as赤ncrona, todos los eventos de tu aplicaci車n.
- Se encarga de resolver los eventos ultra r芍pidos que llegan desde el Event Queue. 
- En caso de no poder resolverse r芍pido, envi芍 el evento al Thread Pool.

**Event Queue**
- Contiene todos los eventos que se generan por nuestro c車digo (Funciones, peticiones, etc.), 
 estos eventos quedan en una cola que van pasando uno a uno al Event Loop.

**Thread Pool** 
- Se encarga de gestionar los eventos de forma as赤ncrona. 
- Una vez terminado lo devuelve al Event Loop. 
- El Event Loop vera si lo pasa a Event Queue o no.
- Generar hilos por cada proceso 

**Ejemplo**

![Ejemplo de evento loop](info/EventoLoop.png)
