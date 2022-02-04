# 03_Curso_ECMAScript_6
Este nivel es sobre nuevas funciones e implementacones de ECMAScript 5-6-7 

## Clase 1: Bienvenida 
- Profesor Oscar Barajas Tavares  @gdnx 

> ECMAScript es la especificación del lenguaje JavaScript propuesto por ECMA Internacional, que es la institución encargada de los estándares, y JavaScript, es el lenguaje de programación que utiliza las especificaciones propuestas, que van siendo añadidas cada año a partir del 2015, cuando fue lanzado ES6.

## Clase 2: Default Params y Concatenación

- [EMAC](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)

**Parametros por defecto:**
- Poder establecer ciertos valores que le pasamos a una funcion de forma por defecto. Esto hace que siempre que se llame la funcion ya tenga estos parametros consigo, si queremos cambiarlos solamente debemos modificarlos en el momento en que la llamamos cambiando los parametros.

```
// Antes de ES6
function newFunction (name, age, country) {
	var name = name || 'Juan';
	var age = age || 20;
	var country = country || 'Col';
	console.log(name, age, country);
}

//ES6
function newFunction2 (name = 'Juan', age = 20, country = 'Col') {
	console.log(name, age, country);
}

newFunction2(); // 'Juan', 20, 'Col
newFunction2('Maria', 23, 'Mx');
```

**Themeplates Literals**
- Nos facilita la vida si queremos concatenar varios elementos en un mensaje

```
// Antes de ES6
var hello = 'hello';
var world = 'world';
var phrase = hello + ' ' + world;

// ES6
var phrase2 = `${hello} ${world}`;
```


## Clase 3:LET y CONST, Multilínea, Spread Operator y Desestructuración

**Diferencias entre var, let y const**

- var: es una variable con alcance global
- let: solo puede ser usada en el bloque donde se declara
- const: no puede modificarse su valor

**Desestructuración**
> Nos Permite obtener los valores de un objeto o de un arrays de una forma sencilla sin necesidad de llagar a sus indices 
```
let person ={
    'name':'Alejandro',
    'nick':'Etrx',
    'num':'12314125'
};

let {name,nick, num} = person;

//Si queremos llamar  lo que compone este objeto utilizamos en ES6:
console.log(name,nick);

```

**Operador de prolongación: "..." **
>  Permite expandir varios elementos. Tenemos varios elementos en arreglos que queremos unir en un solo elemento para presentarlos.

```
let conjunto1= ['a','b','c'];
let conjunto2= ['x','y','z'];

let conjunto_union=['l','m','n',...conjunto1,...conjunto2]
console.log(conjunto_union);
```
**LET**
> Asiganciones mediante let se pueden inicilizar variables  cuyo scope está solo en el bloque de código en el que está llamada, en otras palabras, solo puede existir las variables let dentro de las llaves en que se llaman. Var se seguirá usando para variables globales y locales.

![Diferencia entre LET CONST VAR ](./info/DifenrenciaLET_Const_VAR.png)
![Funcion_sin_parametros_y_funciona ](./info/Funcion_sin_parametros_y_funciona.png)


## Clase 4: Arrow Functions, Promesas y Parámetros en objetos

Una arrow function es una función anónima, es decir, reacciona a su código anterior realizando el siguiente.
Análogamente es similar al símbolo matemático “entonces”, cumpliendo una tarea similar aquí en JS.

**Caracteristas **
- anonymous function !==(Es diferente) lambda expression
- anonymous function: Es una funcion que no tiene nombre
- lambda expression: son funciones utilizadas como data, se envian como parametros a otra funcion o se retornan como producto de una funcion.
- lo mas importante, las lambda expression no necesariamente son funciones anonimas y viceversa
- No están contenidas en una variable
- Se declara su bloque de código al momento de utilizarla.

>Nota 

Quizá se mencione en otros cursos de JavaScript pero para los que aún no lo sepan, 
algo que caracteriza a las arrow functions es que NO tienen un this vinculado, 
es decir, que el this pasa a ser el del contexto que contiene a la arrow function. 

Lo mismo para el objeto arguments, que no es tan común como el this, sería un objeto 
con los argumentos del contexto superior. 

**Elementos Promesas **
- newPromise()
- resolve() - comportamiento al cumplir la promesa
- reject() - comportamiento al fallar la promesa
- .then (⇒) - obtener el valor del resolve
- .error(⇒) - obtener el valor del reject()

Enlace -> https://www.tutorialspoint.com/difference-between-regular-functions-and-arrow-functions-in-javascript

```
/**
 * Parameters in Objects
 */
let name = 'Oscar';
let age = 32;

const obj = {
  name: name,
  age: age
};
console.log('Before ES6 -> ', obj);

// es6
const objES6 = { name, age };
console.log(`After ES6 -> `, objES6);

/**
 * Arrow Functions
 */
const names = [
  { name, age },
  { name: 'Yesica', age: 27 }
];

let listOfNames = names.map(function(item) {
  console.log('Before ES6 -> ', item.name);
});

// es6
let listOfNamesES6 = names.map(item => console.log(`After ES6 -> ${item.name}`));

/**
 * Promises
 */
const helloPromise = (foo) => {
  return new Promise((resolve, reject) => {
    if (foo) {
      resolve('Hey!');
    } else {
      reject('Upss!');
    }
  });
};

const foo = false;
helloPromise(foo)
  .then(response => console.log('response -> ', response))
  .then(() => console.log('message -> Hello World!'))
  .catch(error => console.log('error -> ', error));
```

## Clases 5:  Módulos y Generadores