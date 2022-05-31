# 07 ¿Qué es React.js?

Este nivel es sobre nuevas funciones e implementacones de ECMAScript 5-6-7 

## Clase 1: Bienvenida 
- Profesor Oscar Barajas Tavares  @gdnx 

## Clase 2: ¿Qué es Next.js?


**Enlace**
- https://nextjs.org/docs


**Que es Next.js**
- Es un marco de desarrollo de código abierto construido sobre Node.js 
- Que permite funcionalidades de aplicaciones web basadas en React, 
- como la representación del lado del servidor y la generación de sitios web estáticos.

**Características principales de Next.js:**
- Facilidad para aprender
- Optimizado para SEO
- Posibilidad de combinar páginas estáticas junto a páginas dinámicas
- Compatibilidad con todos los recursos de React

**¿En qué consiste el Server Side Render?**

Para poder entender que es el Server Side Render, debemos entender como funcionan las aplicaciones React.js “normales”. Comunmente estas tienen un proceso para llegar al cliente y es el siguiente:

- Petición del sitio (Cuando el usuario llama al url de nuestro website)
- El servidor web como respuesta le manda un HTML inicial 💌
- El navegador recibe el HTML y lo comienza a leer línea por línea 👀, comúnmente tiene esta forma
- Llega a la etiqueta script, descarga en el navegador el archivo JS y comienza la magia de React.js ✨
- Toda la aplicación está dentro el div #root y el usuario ya puede ver e interactuar con el sitio

**Pero esto tiene 2 desventajas grandes:**

- SEO y rendimiento
- El buscador de google entra y revisa la primera respuesta, y solo encontrará el div vació, pero no te preocupes, ya que el mismo está entrenado para leer tu sitio, solo que lo hace más lento porque debe esperar a que el JS del script termine de cargar.

- Suponiendo que tienes miles y miles de páginas y únicamente 5 minutos para ser inspeccionado por el buscador. Tristemente, no todas las páginas serán leídas.

**Experiencia de usuario **
- Supongamos que tienes un usuario que está con su celular en medio de la nada y apenas tiene internet, entonces el mismo tendrá que esperar a que el sitio le mande el HTML, Encuentre el Script, descargue el mismo y lo renderice. Esto tomará mucho tiempo y quizás ya se abra ido a un sitio que cargue más rápido.
- 💪 La solución Para poder mejorar existen muchas estrategias, una de ellas es el Server Side Render, la principal diferencia está en el flujo el cual cambia a este:

- Petición del sitio (Cuando el usuario llama al url de nuestro website)
- El servidor web mediante una funcionalidad de React pre renderiza la aplicación, es decir sacar el HTML de los archivos React y lo pega a la futura respuesta del HTML
- El servidor web como respuesta le manda un HTML inicial 💌
- El navegador recibe el HTML y lo comienza a leer línea por línea 👀, y tendrá esta forma en este caso

> 💡 **Recuerda** Para que un website funcione siempre contará con un servidor para que lo mande al usuario, entonces por que no aprovechar el mismo para pasarle la tarea de renderizar contenido, Como frontends podemos olvidar que existe un servidor, ya que existen servicios como github pages que ya nos brindan un servidor para poder servir nuestros sitios con solo tener unos cuantos archivos HTML, CSS y JS.

> 📌 **RESUMEN:**  Next.js es un framework de React.js el cual te permite crear aplicaciones web   con mejor SEO y rendimiento, con una gran facilidad a nivel de configuración. Este framework puede crear aplicaciones hibridas, es decir que tendra tanto paginas estaticas como paginas las cuales implementarán server side render.

## Clase 3: Primeros pasos en Next.js

- Paso 1: Preparando el proyecto, Creamos una nueva carpeta donde estará nuestro proyecto
- Paso 2: Corremos el comando `npx create-next-app appName` ó `npx create-next-app@latest --ts appName` para crear componer nuestra aplicacion con next, es parecido al comando npx create-react-app appName
- Paso 3: Una vez listo todo nos presenta la siguiente estructura de archivos

![Estructura](./info/preparacion.png)

**Estructura**

- pages: donde estarán los elementos claves de nuestra aplicacion
- index: expondrá el sitio
- _app: archivos de configuracion
- api: en el caso de trabajar con una api
- public: donde estarán los archivos públicos imagenes o archivos claves para el proyecto
- styles: donde colocaremos los estilos de la aplicacion y los demás archivos de configuración

- Paso 4: ejecutamos el comando `npm run dev` y en la consola nos indica en que url podemos ver el proyecto por lo general es `http://localhost:3000`

## Paso 4: ESLint, Prettier y JSConfig con Next.js -> No lo recomiendo pero no esta demas saberlo 

> Debemos crear la carpeta src en la raíz del proyecto y mover a ésta las carpetas public, styles y pages. De esta forma tendremos acceso más fácil a los recursos, usando el path alias que agregamos en el archivo jsconfig.json. 


- Paso 1: Podemos crear nuestro directorio src y anexar ahi page, public, styles
- Paso 2: Creamos en raiz un config -> `jscongig.json` -> 
```
{
    "compilerOptions": {
        "baseUrl": "src",
        "paths": {
            "@pages": ["pages/"],
        }
    }
}

```
- Paso 3: .eslintignore Creamos este archivo para decirle que directorio no debe exportar  esto desde raíz. 
```
node_modules

```

- Paso 4: Cambiamos el nombre al archivo -> `.eslintrc.json` a `.eslintrc.js`
  - Configuraciones básicas, no hay una regla especifica no hay un standar unico 
  - Para crear standare de programción
```
module.exports = {
  root: true,
  env: {
      browser: true,//Me permite trabajar con el browser
      amd: true,//manejor de protocolos internos de js
      node: true,//
      es6: true,//para que activo los entornos de trabajo
  },
  extends: [//Me permite usar pluging o recomendaciones 
      'eslint:recommended',
      'plugin:jsx-a11y/recommended',// plugin para accesibildad
      'plugin:prettier/recommended',//configuración base para respetar los ;
      'next',//Configuraciones basicas
      'next/core-web-vitals',//Configuraciones basicas
  ],
  rules: {//Reglas 
      'semi': ['error', 'always'],//implementamos que se use ; 
  },
}
```

- Paso 5: creamos otro archivo de configuración mas standares de programación `prettier.config.js`

```
module.exports = {
    semi: true,//Obliga a usar cierre ;
    singleQuote: true,//obliga usar comilla doble para caracter
    printWidth: 200,//Maximo de caracter
    tabWidth: 2,//Tab a dos
    useTabs: false,
    trailingComma: 'es5',//Standar de eS5
    bracketSpacing: true,//
}
```

- Paso 6: Creamos el archivo `next.config.js`
```
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {//Variables de entorno
    customKey: 'customValue',
  },
  basePath: '/dist',//Podemos definir elementos donde estara nuestro proyecto 
  compress: true,//Forma de presentar o compromir nuestro proyectp 
  async redirects() {//Forma de redireccionar 
    return [//Generas tu lista segun el caso la logica de tu app
      {
        source: '/hola',
        destination: 'https://gndx.dev',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig

```

- Paso 7: Instalamos los elementos confifurados -> `npm install prettier eslint-plugin-prettier eslint-plugin-jsx-a11y eslint-config-prettier eslint-config-next`


## Clase 7: Alias y comunicación entre archivos

> En el archivo jsconfig.json podemos configurar elementos o reglas para este caso podemos anexar alias 

```
{
    "compilerOptions": {
      "baseUrl": "src",
      "paths": {
        "@icons/*": ["assets/icons/*"],
        "@logos/*": ["assets/logos/*"],
        "@context/*": ["context/*"],
        "@components/*": ["components/*"],
        "@styles/*": ["styles/*"],
        "@containers/*": ["containers/*"],
      }
    }
  }

```

## Clase 8: Sass

Instalamos sas `npm i sass` 

podemos usar las clases de esta manera 

```
className={`${styles["more-clickable-area"]} ${styles["navbar-email"]} ${styles.pointer}`}
```