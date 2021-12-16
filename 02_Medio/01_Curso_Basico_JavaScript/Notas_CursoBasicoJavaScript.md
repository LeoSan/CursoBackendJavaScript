# Curso Práctico de Frontend Developer II

## Clase 1: 
- Introducción al curso 
**¿Cómo nace Javascript?**
- Nace con la necesidad de generar dinamismo en las páginas web y que a su vez los usuarios y las empresas pudieran interactuar unos con otros.

**¿Qué es Javascript?**
- Es un lenguaje interpretado, orientado a objetos, débilmente tipado y dinámico.

**Débilmente tipado**
Se pueden hacer operaciones entre tipos distintos de datos (enteros con strings, booleanos con enteros, etc). Ejemplo:

- 4 + "7"; // 47
- 4 * "7"; // 28
- 2 + true; // 3
- false - 3; // -3

**Dinámico**
- Corre directamente en la etapa de Runetime sin una etapa de compilación previa. 
- Esto permite probar nuestro código inmediatamente; pero también es lo que hace que los errores se muestren hasta que se ejecuta el programa.

**¿Realmente es Javascript un lenguaje interpretado?**
> Si, y la razón es que le navegador lee linea por linea nuestro código el cuál le indica lo que tiene que hacer, sin la necesidad de compilar. 
> Todo esto es controlado por el motor de Javascript V8 del navegador

**Javascript es Basckwards Compatible**
- Todas las funciones nuevas que salen de Javascript no dañarán el trabajo ya hecho, pero no se podrá utilizar en nuestro entorno de trabajo inmediatamente. 
- Para solucionar esto está Babel que permite utilizar las nuevas características del lenguaje pero lo transforma a una versión que el navegador pueda entender.

**Fuente:: Aporte creado por Diego Martínez**

![Info](./info/infografia.png)


## Clase 2: ¿Por qué JavaScript?


![Info](./info/forma.jpg.png)

**Ventajas**
- JavaScript tiene una comunidad enorme de desarrolladores que te pueden ir ayudando a generar diferentes cosas.
- Si solo estuvieras interesado en trabajar aplicaciones web tienes muchos frameworks y librerías construidas en JavaScript que te van a ayudar a hacer proyectos de forma mucho mas rápida, eficiente y robusta (Angular, View, React,entre otros)
- Si no quieres trabajar solo en aplicaciones Web puedes utilizar JavaScript con un framework que se llama React Native para poder construir aplicaciones nativas como Android y IOS.
- Puedes construir aplicaciones de escritorio con JavaScript, usando un framework llamado Electron, pueden correr en Mac o Windows.
- También puedes trabajar en la parte del Back-end o **IOT **(Internet Od Things) es un concepto que se refiere a una interconexion digital de objetos cotidianos con Internet. 
- Esto con un Framework llamado NodeJS, el cual es un entorno de ejecución de JavaScript que corre directamente en el Back-end.

**WebAssembly:**
- es un nuevo tipo de código que puede ser ejecutado en navegadores modernos es un lenguaje de bajo nivel, similar al lenguaje ensamblador, 
- Con un formato binario compacto que se ejecuta con rendimiento casi nativo y provee un objetivo de compilación para lenguajes como C/C++ y Rust que les permite correr en la web.
- También está diseñado para correr a la par de JavaScript, permitiendo que ambos trabajen juntos.

Sitios web basados en:

Angular: Forbes
React: Airbnb
Vue: GitLab
Aplicaciones basadas en React Native:

UberEats
Discord
Instagram
Fuente: Enlace
Aplicaciones para Escritorio basados en Electron:

Visual Studio Code
WhatsApp
Twitch
Ver más aplicaciones de Electron JS
Compañías que usan Node.JS para parte de su backend:

Netflix
Linkedin
PayPal
Fuente: Enlace


## Clase 3: Elementos de un Lenguaje de Programación: Variables, Funciones y Sintaxis


