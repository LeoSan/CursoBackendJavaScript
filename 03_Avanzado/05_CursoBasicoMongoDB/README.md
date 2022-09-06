# 08 - Curso Básico de MongoDB


## Clase 1: Bienvenida 
- Profesor Albert Ramírez 

## Clase 2 : Bases de datos NoSQL

Las bases de datos NoSQL tienen 4 grandes familias: Key Value Stores, basadas en grafos, columnares y basadas en documentos.

**Key Value Stores:**
- Guardan la información en formato de llaves y valores. 
- Las usamos para guardar cache, información de sesión de los usuarios o cosas muy sencillas. 
- Son muy rápidas de consultar pero no podemos usarlas en casos más complejos donde necesitamos estructuras más especiales. 
- El mejor ejemplo de estas bases de datos es Redis.

**Graph Databases:** 
- Bases de datos basadas en Grafos. 
- Nos permiten establecer conexiones entre nuestras entidades para realizar consultas de una forma más eficiente que en bases de datos relacionales (así como Twitter o Medium donde cada publicación tiene diferentes relaciones entre sus usuarios, likes, etc). 
- Por ejemplo: Neo4j o JanusGraph.

**Wide-column Stores:** 
- Bases de datos columnares. 
- Tienen una llave de fila y otra de columnas para hacer consultas muy rápidas y guardar grandes cantidades de información pero modelar los datos se puede volver un poco complicado. Las usamos en Big Data, IoT, sistemas de recomendaciones, entre otras. Por ejemplo: Cassandra o HBase.

**Document Databases:** 
- Bases de datos basadas en documentos. 
- Nos permiten guardar documentos dentro de colecciones, tiene muy buena performance y flexibilidad que nos permite modelar casos de la vida real de forma sencilla y efectiva. 
- Por ejemplo: MongoDB o CouchBase.

![Concepto](info/Concepto.png)

## Clase 3: Definición de MongoDB y su ecosistema (herramientas de uso)

**MongoDB** 
- Es una base de datos gratis y de código abierto **No Relacional** basada en documentos que nos permite guardar una gran cantidad de documentos de forma distribuida. 
- Mongo también es el nombre de la compañía que desarrolla el código de esta base de datos.
- Una de sus principales características es que nos permite guardar nuestras estructuras o documentos en formato JSON, USA BSON -> Es una representación binaria de un Json.  
- Por ser una base de datos distribuida podemos hablar no de uno sino de varios servidores, lo que conocemos como el Cluster de MongoDB. 
- Gracias a esto obtenemos una gran escalabilidad de forma horizontal (escalabilidad en cantidad de servidores).
- MongoDB es “Schema Less” lo que permite que nuestros documentos tengan estructuras diferentes sin afectar su funcionamiento, 
- algo que no podemos hacer con las tablas de las bases de datos relacionales. Su lenguaje para realizar queries, índices y agregaciones es muy expresivo.
- El tamaño máximo de un Documento BSON es de 16MB para evitar que un solo documento pueda consumir RAM en exceso, para documentos de mayor tamaño, mongoDB ofrece la opcion de usar GridFS API
- Recuerda que es una Base de datos transacional, esto quiere decir que si editas 10 Registros y falla al menos uno esta no se cancela seguira actualizando y pueda suceder el caso que en tu update te diga "Se actualizaron todos los datos" pero si hubo 5 datos que arrojaron error esta enuncia el error pero sigue con el siguiente y siguiente hasta completar la operación, para este ejemplo pues actualizo 5 de forma efectiva y los otros 5 no. a diferencia de SQL que si al menos uno de los registros falla esta hace un rollback y te dice proceso fallo en tal registro. 

![Concepto](info/Concepto_002.png)

**Esquema ó Estructura**

![Concepto](info/Concepto_003.png)


## Clase 4: MongoDB Atlas

**MongoDB Atlas tiene las siguientes características:**
- Aprovisionamiento automático de clusters con MongoDB
- Alta disponibilidad
- Altamente escalable
- Seguro
- Disponible en AWS, GCP y Microsoft Azure
- Fácil monitoreo y optimización

![Interfaz Web](info/Concepto_004.png)

## Clase 5 -6 :Instalación MongoDB en Windows 

- Paso 1: Descargar 
![Instalación](info/Concepto_004.png)
- Paso 2: usamos el wizard solo es next y next 


## Mongo en Docker 
- Guia -> https://platzi.com/tutoriales/1533-mongodb/4930-instalar-mongo-db-usando-docker/

## Clase 7: Mongo Shell, configuración de clientes

Para usar consola debemos isntalar Mongo-Atlas. 


32
COMANDOS DE MONGO

correr MongoDB
$ mongo

crear y usar DB
$ use DBNAME

listar DBs
$ show dbs

crear colección e insertar documento
$ db.DBNAME.insertOne({"name":"camilo"})

listar documentos de colección
$ db.DBNAME.find()

listar las colecciones
$ show collections

mostrar un documento cualquiera
$ db.DBNAME.findOne()

saber que DB estamos usando
$ db

**Nota**
- Hola a todos, para los que quieran conectarse vía Windows a su cuenta de ATLAS, así es como deben ejecutar su comando a través de CMD. `C:"\Program Files\MongoDB\Server\4.0\bin\mongo.exe" "mongodb+srv://<platzi-mongodb-url>.mongodb.net/test" --username platzi-admin`
- La gente que lo quiera hacer por linea de comando en windows tiene que agregar mongo a su path.
```
Tecla Windows.
Escribes Variables de entorno.
Clic en Opciones avanzadas.
Clic en Variables de entorno.
Editar Path
Pegar : C:\Program Files\MongoDB\Server\4.2\bin (Hay que tener en cuenta que 4.2 es la versión que yo tengo, puede ser una distinta de la de ustedes)
```

- Paso 1. Abres la consola ( Windows + R) , en ejecutar escribes “cmd” y le das aceptar
- Paso 2: Una vez abierta la consola , te vas a archivos / Disco local(C:) ( o donde hayas descargado Mongo) /Archivos de programa /MongoDB/Server/4.2(o tu version)/Bin y copias el link que te salga arriba y debe quedar algo asi : C:\Program Files\MongoDB\Server\4.2\bin
- Paso 3: En la consola escribes “cd” + el link ejemplo “cd C:\Program Files\MongoDB\Server\4.2\bin”
- Paso 4: :"mongo “mongodb+srv://platzijesus-xsp0x.mongodb.net/test” --username jesusdlaz"
- Paso 5: colocas tu contraseña y listo estas conectado a la consola




Para usar interfaz debemos isntalar Mongo-Compass.
- Paso 1: Debemos descargar 
- Paso 2: Debemos obtener nuestra url que la podemos obtener desde la web Closter Ejemplo.
![Ejemplo](info/Concepto_006.png)  
- Paso 3: AbrimosCompass buscanos conexion y pegamos nuestro string compuesto por clave y usuario, recuerda esta clave y usuario se creo en security cuando creamos el cluster 
![Forma](info/Concepto_007.png)

## Clase 8: MongoDB + Drivers
**¿Qué son los drivers en MongoDB?**

- Son las librerías que utilizamos para comunicar nuestra aplicación con nuestra base de datos.
- Sin nuestros drivers no podemos trabajar con nuestros cluster de base de datos.

**¿Cómo agregar los drivers dentro de nuestro proyecto?**
- Usamos un gestor de dependencias. 
- Lo agregamos en nuestro gestor de dependencia; si usamo

**Lista de Driver**
Instalación de los drivers de MongoDB en diferentes lenguajes:

- Python: python -m pip install pyongo
- Node.js: npm install mongodb --save
- Ruby: gem install mongoid
- GO: dep ensure -add go.mongodb.org/mongo-driver/mongo
- Java con maven:
```
# build.gradle
compile 'org.mongodb:mongo-java-driver:2.12.3'`
<dependencies>
    <dependency>
        <groupId>org.mongodb</groupId>
        <artifactId>mongo-java-driver</artifactId>
        <version>2.12.3</version>
    </dependency>
</dependencies>
```

## Clase 11: Operaciones CRUD desde Compass

- Ya lo sabemos
- Como se inserta
- Como filtrar 
- Como Editar
- Como eliminar 

## Clase 12: Tipos de datos

![Tipo Datos](info/Concepto_008.png)

![Tipo Datos](info/Concepto_009.png)


> Podemos crear documento dentro de otro documentos 
![Tipo Datos](info/Concepto_010.png)

> Arreglos limite no puede ser mayor  a 16 Byte 
![Tipo Datos](info/Concepto_011.png)


## Clase 13: ¿Qué son los esquemas y las relaciones?

>  Es la forma de como mongoDB, se relaciones con las colleciones 


**MongoDB 🆚 SQL:**

- MongoDB tiene mucha flexibilidad y no nos impone seguir una estructura o esquema bien definido.
- SQL nos impone una estructura bien definida a más no poder; es super no-flexible.
- Con MongoDB es más fácil empezar y añadir nuevas funcionalidades.
- Con SQL es más demorado de empezar porque debemos tener el orden super claro siempre. 
  
  **Todos los elementos deben tener los mismos elementos y todos deben ser del mismo tipo. Si queremos agregar un nuevo campo debemos añadirlo en todas partes con un valor por defecto, aunque no lo necesitemos.**
- Si no seguimos buenas prácticas en MongoDB, vamos a necesitar queries ultra-complejas, demoradas y una visita diaria al psicólogo 😱.
- El orden impuesto de SQL no es por nada. Las queries son fáciles de entender porque todo sigue su orden y tranquilidad. Aunque, implementar nuevas features toma su buen tiempo 🤔.
- Para mi el ganador es MongoDB siempre y cuando sigamos buenas prácticas desde el principio. 


## Clase 14: Relaciones entre documentos

> One to one: Documentos embebidos
![Ejemplo](info/Concepto_012.png)

>One to many: Documentos embebidos cuando la información no va a cambiar muy frecuentemente y referencias. 
**Hijos**
![Ejemplo](info/Concepto_013.png)
**Padre**
![Ejemplo](info/Concepto_014.png)