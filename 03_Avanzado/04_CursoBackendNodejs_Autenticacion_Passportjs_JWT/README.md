# 04 - Curso de Backend con Node.js: Autenticación con Passport.js y JWT

¡Aprende desarrollo backend con Node.js! Trabaja con rutas, servidores y middlewares de Express.js. Construye una API, manipula errores y haz validación de datos. Despliega tu aplicación a producción en Heroku. Conviértete en backend developer con Node.js junto a tu profesor Nicolas Molina.

Usa Node.js con Express.js para el backend de tu aplicación
Crea los endpoints de tu API REST
Crea tu primer servidor HTTP

## Clase 1: Bienvenida 
- Profesor Nicolas Molina  

## Clase 2 : Autenticación vs. autorización

**Autenticación**
- Este proceso es para determinar si la combinación de usuario y contraseña son las correctas.

**Si es correcta:**
- Nos dan una llave para acceder, (en este curso esa llave será un token generado por la librería jsonwebtoken )
**Si NO es correcta:**
- El servidor nos prohibe continuar y lo normal es que nos responda con un código http 401 que significa Unauthorized (veamoslo con gatos xD)

**Autorización**
> Es cuando el servidor ya verificó que la contraseña y usuario son correctas y se le devolvió correctamente al usuario un token (la llave) pero se quiere usar esa llave para entrar a una parte del sitio prohibido para ese usuario, esto puede suceder cuando:

- El usuario no es administrador y quiere acceder a una página sólo para admistradores (petición get) .
- El usuario quiere realizar una petición tipo delete/post/put a un recurso pero sólo tiene permisos de lectura ese usuario.
- Lo normal es que el servidor responda con status code 403 cuando esto sucede

**Notas**
- Autenticación: Quien eres (ususario, contraseña)
- Authorizacion: Gestion de permisos (roles y privilegios)


![Ejemplo](info/Concepto.png)

## Clase 3 -4 : Tienda en línea: instalación del proyecto -  Middleware de verificación

