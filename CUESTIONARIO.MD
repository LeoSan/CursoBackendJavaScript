# Programación con JavaScript

1.
¿Cuál fue el nombre de la 1er versión de JavaScript?
LiveScript
**REPASAR**

2.
¿Con qué propósito se crea JavaScript?
Para poder crear páginas más dinámicas


3.
Al igual que window como objeto global, ¿qué otro elemento se crea como referencia a este mismo objeto en el contexto global?
Se crea la variable document, que hace referencia al objeto global window
**REPASAR**


4.
¿Qué es un stack overflow?
Es cuando llenamos la memoria de tareas que podemos procesar en el call stack.
**REPASAR**


5.
¿Qué es el Memory Heap?
Es el lugar donde se guardan objetos y funciones en bloques de memoria de forma arbitraria y sin un orden, los cuales pueden ser usados múltiples veces a través de una referencia única.


6.
¿Cuántos bytes puede guardar un memory slot?
4 Bytes
**REPASAR**


7.
¿Cuál es el patrón de un Stack?
FIFO
**REPASAR**

8.
¿Para qué utilizamos el método de dequeue?
Remover al primer elemento de la línea


9.
¿Para qué creamos objetos en JavaScript?
Todas las respuestas son correctas.


10.
¿Qué es __proto__ en JavaScript?
El mecanismo para que las instancias hereden los métodos y atributos de sus prototipos.


11.
¿Cuáles son ventajas de utilizar programación orientada a objetos?
Orden, reusabilidad y menos líneas de código a largo plazo.

12.
Los atributos __proto__ en los objetos de JS pueden contener otro atributo __proto__ por dentro. Esto es:
Verdadero


13.
¿Qué son las propiedades estáticas?
Métodos y atributos que solo se pueden acceder desde el prototipo, no por fuera.
**REPASAR**

14.
¿Cuál de los siguientes métodos estáticos de Object nos permite listar los atributos "ocultos" en las propiedades de "objetito"?
Object.entries(objetito)
**REPASAR**

15.
¿En qué memoria se guardan los objetos de JavaScript?
Heap


16.
¿En qué memoria se guardan los nombres de las variables en JavaScript?
Heap
**REPASAR**



17.
¿Cómo identificamos objetos con Duck Typing en JavaScript?
Usando instanceof para validar si los objetos son instancias de un prototipo en específico.
**REPASAR**



18.
¿Cuál de estos métodos me retorna un true si alguno de los elementos del array tiene este emoji 🐸?

const array = ['🐸','🐱','🐹']; 
const rta = array.find(item => item === '🐸'); 

**REPASAR**


19.
¿El método then() retorna?
Promesa


20.
¿Para qué nos sirve la clase XMLHttpRequest?
Nos permite realizar solicitudes HTTP de una forma muy fácil.


21.
¿Para qué nos sirve el método "catch()"?
Muestra el error en json de una promesa rechazada.
**REPASAR**

22.
¿Cómo aseguramos manejar los errores asincrónicos correctamente?
new promise { ...código } catch { ...código }
**REPASAR**


23.
Término que se refiere a la accesibilidad que tiene una variable, función u objeto.
Scope


24.
¿Cuál es el alcance que tiene el function scope?
Se puede acceder a una variable que se ubica dentro de una función, pero no podemos llamarla desde el ámbito global.


25.
¿Cómo se resuelve la deuda técnica?
Refactorizando el código.


26.
¿Cuál es una regla del diseño simple?
Respeta el principio DRY.
**REPASAR**

27.
¿Cuál es un ejemplo de nombre de variables pronunciables?
currentDate


28.
Objetivo principal del patrón Singleton
Asegurarnos de que solo existe una instancia de un objeto.

29.
Tu equipo y tú están creando un framework para construir aplicaciones del lado del servidor como lo hacen Rails, Django o NestJs. Se desea que el framework implemente inyección de dependencias con miras a la extensibilidad de las aplicaciones y también la preservación de recursos (stack, memoria). Para llevar a cabo esto se propone que todos los elementos declarados por los usuarios (servicios, middlewares, etc) que deseen ser inyectados, sean creados una sola vez a lo largo de la ejecución de la app. Al tener mucha experiencia en patrones de diseño, detectas que las ideas de cierto patrón de diseño podría funcionar. En este caso, ¿cuál es ese patrón?
Factory Method
**REPASAR**

30.
¿Cómo se declara un objeto en JavaScript?
let obj = {name: "John", age: 30};