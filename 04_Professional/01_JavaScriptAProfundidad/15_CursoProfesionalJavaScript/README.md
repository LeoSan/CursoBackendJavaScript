1.
El proceso de hoisting solo sucede con dos palabras reservadas de JavaScript, ¿cuáles son?
var y function
2.
Al igual que window como objeto global, ¿qué otro elemento se crea como referencia a este mismo objeto en el contexto global?
Se crea la variable this, que hace referencia al objeto global window

3.
¿Qué es un stack overflow?
Es cuando llenamos la memoria de tareas que podemos procesar en el call stack.
**REPASAR**

4.
¿Qué es el Memory Heap?
Es el lugar donde se guardan objetos y funciones en bloques de memoria de forma arbitraria y sin un orden, los cuales pueden ser usados múltiples veces a través de una referencia única.

5.
¿Qué son las estructuras de datos?
Las estructuras de datos son colecciones de valores, las relaciones entre ellos y las funciones u operaciones que se pueden aplicar a los datos.
6.
¿Cuál es el patrón de un Stack?
LIFO
7.
¿Qué es un paradigma de programación?
Modelos para resolver problemas comunes.
8.
¿Qué es abstracción en JavaScript?
Crear prototipos "molde" para abstraer la lógica y datos de nuestros objetos.
9.
¿Qué es herencia en JavaScript?
La capacidad de heredar/extender los métodos y atributos de un prototipo "madre".
10.
¿Cuál es la convención para nombrar atributos o métodos privados en JavaScript?
Empezar con _ (guión bajo).
11.
¿Si todos los arrays tienen el método .push dentro de su atributo __proto__, cuál es la forma más cómoda de ejecutarlo desde el array asignaturas en JavaScript?
asignaturas.push()
12.
¿Qué son las propiedades estáticas?
Métodos y atributos que podemos llamar sin necesidad de crear una instancia del prototipo.
13.
¿Cuál de los siguientes métodos estáticos de Object nos permite listar los nombres y valores de las propiedades de "objetito" en forma de arrays?
Object.entries(objetito)
14.
¿Si `const patito = "Donald"`, en qué memoria se guarda "Donald"?
Stack
15.
¿Para qué sirve instanceof en JavaScript?
Para validar si un objeto es una instancia de algún prototipo en específico.
16.
¿Sort es un método que cambia el estado original de un array?
Verdadero
17.
¿Cuál de los siguientes códigos ordena este array [11,1,13,99,8] de menor a mayor?

const array = [11,1,13,99,8]; 
array.sort((a,b) => a - b);
18.
¿Para qué nos sirve la clase XMLHttpRequest?
Nos permite realizar solicitudes HTTP de una forma muy fácil.
19.
¿Cuál es el alcance que tiene el function scope?
Se puede acceder a una variable que se ubica dentro de una función, pero no podemos llamarla desde el ámbito global.
20.
¿Para qué se utiliza el modo estricto en JavaScript?
Es un modo de trabajo que nos asegura que cada variable está definida al momento de crear nuestro código.
21.
¿En qué momento se genera una closure?
Cuando una función accede a una variable fuera de su contexto y la recuerda.
22.
JavaScript solo utiliza el hoisting en declaraciones, mas no en inicializaciones
Verdadero
23.
Una función callback es:

Una función que se pasa a otra función como un argumento, invocada dentro de la función externa.

24.
¿Para qué escribir código limpio?
Para que pueda ser entendido por cualquier persona.
25.
Si tengo un arreglo de nombres, ¿cómo se recomienda nombrarlo?
userList
**REPASAR**

26.
¿A qué hace referencia el ámbito de una variable?
A la visibilidad de una variable.
**REPASAR**

27.
Objetivo principal del patrón Factory Method
Proveer de una interfaz para crear objetos basados en una clase base o interfaz.

28.
Objetivo principal del patrón Protoype
Proveer de una interfaz que las clases puedan implementar y cuyos objetos tengan la capacidad de retornar una copia de sí mismos.

29.
En un banco se busca integrar una feature al sistema actual que les permita administrar los préstamos realizados a los clientes. Las categorías hasta este punto son:

Préstamos Hipotecarios,
Préstamos Escolares.
Para cada uno de estos tipos de préstamos, hay tres sub-categorías que trabajan con el tipo de tasa de interés:

Tasa fija
Tasa Variable
Tasa Mixta.
Nuevos tipos de préstamos pueden integrarse en el futuro y deben de poder tener una versión para cada una de las tres tasas de interés disponible. ¿Cuál crees que es el patrón de diseño o patrones de diseño que podría(n) darle una solución al problema?

Abstract Factory
30.
¿Cómo se declara una función en JavaScript?
functionmyFunction(){
  // código
}