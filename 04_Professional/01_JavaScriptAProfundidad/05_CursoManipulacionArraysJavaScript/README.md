# 05 - Curso de Manipulación de Arrays en JavaScript

## Clase 1: Bienvenida 
- Profesor Nicolas Molina
```
Durante tu carrera como programador, tendrás que usar arrays para crear estructuras de datos que te permitan resolver de una manera más rápida y eficiente los algoritmos que desees. En este curso conocerás los arrays en JavaScript, desde como crearlos hasta los distintos métodos que tiene. ¡Aprende junto a tu profesor Nicolas Molina!
```

## Clase 2: ForEach

**Características**
- El método forEach de los arrays consiste en ejecutar una función (callback) para cada uno de los elementos iterados. 
- Iterar significa repetir una acción varias veces.
- Este método recibe dos argumentos:
	- La función que itera cada elemento del array (obligatorio).
	- Un objeto al que puede hacer referencia el contexto this en la función. 
	- Si se lo omite, será undefined. 
	- Recuerde que this en arrow functions es el objeto global. 


```
array.forEach(function(), thisArg)
array.forEach(function(element, index, array))

``` 


## Clase 3: Mutable o Inmutable

**Diferencia entre mutabilidad e inmutabilidad**
- Mutable es aquella acción que cambia el valor en la referencia en memoria del elemento del array original.  
- Provocando que cambien el original y la copia. 
- Inmutable es la acción en la que se cambia el valor, pero en una referencia diferente del original, 
- provocando que el original siga igual.


**Nota**
`
En JS los datos asignados a una variable pueden ser de dos tipos:

Primitive type (undefined, null, boolean, number, string, symbol), 
Reference type (objects, arrays , functions).

`

## Clase 5: Qué es el método map

- El método map consiste en crear un nuevo array a partir de los elementos originales transformados mediante una función (callback) y es inmutable.
- La transformación implica cambiar cualquier elemento en otro, ya sea un número, un objeto, otro array. 
- Las posibilidades son infinitas.

**Este método recibe dos argumentos:**
- La función que itera y transforma cada elemento del array (obligatorio).
- Un objeto al que puede hacer referencia el contexto this en la función. 
- Si se lo omite, será undefined. 
- Recuerde que this en arrow functions es el objeto global.

**Ejemplo**
```
let otherArray = array.map(function(), thisArg)
```

**La función, que recibe como argumento el método map, utiliza tres parámetros:**

- El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
- El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
- El array que está iterando.

```
const other = array.map(function(element, index, array))

//Otro ejemplo
const numbers = [1,2,3,4,5]
const newNumbers = numbers.map( function(number){
    return number * 2
})
// o 
const newNumbers = numbers.map(number => number * 2)

console.log(newNumbers) // [ 2, 4, 6, 8, 10 ]

```

**Diferencia entre forEach y map**
- La principal diferencia entre estos dos es que forEach solamente itera cada elemento, mientras que map itera y transforma cada elemento en un nuevo array.

## Clase 6: Map Reloaded

> Es la manera sencilla de extraer información usando map pero en `objetos`
- Podemos seleccionar los elementos de un arrays 
- spread operator

```
const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
]

// Extraigo ordenes 
const totales = orders.map(order => order.total)

console.log(totales) // [ 60, 120, 180, 240 ]

// Ejemplo donde transformas los objetos originales
const tarifas = orders.map(order => {
    order.tax = 0.19
    return order
})

// Ejemplo donde no transformas los objetos originales
const tarifas = orders.map(order => {
    return {
        ...order,
        item: 0.19,
    }
})

tarifas[0] === orders[0] // false

```
## Clase 8: Filter

**Características**
- Consiste en crear un nuevo array a partir de los elementos originales filtrados mediante una función (callback) 
- Si la condición se cumple, retorna el elemento completo.
- Es inmutable
- Este proceso recibe dos argumentos:
  - La función que itera y evalúa si cada elemento del array si cumple con la condición especificada (obligatorio).
  - Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this en arrow functions es el objeto global
- La función, que recibe como argumento el método filter, utiliza tres parámetros:
  - El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
  - El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
  - El array que está iterando.
- Filtrar elementos a partir de la propiedad de un objeto
  - Con el método filter puedes filtrar los objetos de un array a partir de una condición referente a la propiedad de cada elemento.
  - Teniendo en cuenta que el nuevo array contendrá el objeto completo que haya cumplido con la condición especificada.

**Ejemplos**
```
//Recibe Dos argumentos 
let otherArray = array.filter(function(), thisArg)


//Recibe tres argumentos 
const other = array.map(function(element, index, array))

//Ejemplo y uso 

const words = ["spray", "elites", "limit", "apple", "exuberant"]

const newWords = words.filter( function(word){
    if (word.length >=6){
      return true
    }else{
      return false
    }
})
// o 
const newWords = words.filter(word => word.length >= 6)

console.log(newWords) // [ 'elites', 'exuberant' ]

//Ejemplo filter objetos 

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
]


const newOrders = orders.filter(order => order.total > 150)

console.log(newOrders) 
/* [
  {
    customerName: 'Santiago',
    total: 180,
    delivered: true
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true
  }
]
*/


```


## Clase 10: Reduce

**Características**
- El método reduce es inmutable 
- Retornar un solo valor del array iterado a partir de una función (callback) que indica de qué manera se itera cada elemento para reducirlo
- Nota no devuelve un array devuelve un resultado. 
- Este método recibe dos argumentos:
  - La función que itera y reduce cada elemento del array. (obligatorio)
  - El valor inicial que utilizará como argumento la función. Si no se especifica, en la primera iteración el valor inicial será el primer elemento del array y no ejecuta la función.

- La función, que recibe como argumento el método map, utiliza cuatro parámetros:
  - El valor acumulado por la función (callback). En la primera iteración será igual al valor inicial del argumento del método. (obligatorio)
  - El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente. (obligatorio)
  - El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
  - El array que está iterando.

- Este método REDUCE, efectivamente hace eso. Solo reduce a un solo valor y no devuelve otro array, simplemente un valor.

**Ejemplo**
```
// Este método recibe dos argumentos:
let reducedValue = array.reduce(function(), initialValue)

// La función, que recibe como argumento el método map, utiliza cuatro parámetros:

let reducedValue = array.reduce(
    function(acumulator,element, index, array), 
    valorInicial
)


// Por ejemplo, hagamos un algoritmo que calcule la suma de los cuadrados de los elementos de un array.
const numbers = [5,4,8,6,2]

const reducedValue = numbers.reduce((suma, number) => suma + number**2)

console.log(reducedValue) // 125

```


## Clase 11: Reduce Reloaded

**Características**
- Objeto de frecuencias
  - Para obtener un objeto de frecuencias de cada elemento de un array es necesario tener presente las siguientes consideraciones:
  - Establecer un objeto vacío como valor inicial del método reduce.
  - El objeto vacío también será nuestro acumulador.
  - Verificar si el elemento ya existe en nuestro objeto de frecuencias.
  - Si no existe, creamos la propiedad referente al elemento del array y le inicializamos en 1.
  - Si ya existe solamente debemos aumentar en una unidad la propiedad de nuestro objeto referente al elemento del array.
  - Finalmente, debes retornar el objeto dentro de la función del método reduce.
- Enlace JS reduce -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
- La salida de un resultado y esto es la entrada de otro se le conoce como `payment`

```
const items = [5, 6, 7, 6, 5, 7, 7, 8]

const frecuencias = items.reduce((objeto, elemento) => {
    if (!objeto[elemento]){
        objeto[elemento] = 1
    }else{
        objeto[elemento] = objeto[elemento] + 1
    }
    
    return objeto
}, {})

// Genera un histograma esta es la salida 

{
  5:2
  6:2
  7:3
  8:1
}


// Otra manera especificando y definiendo la salida 
const arr = [3, 10, 9, 4, 3, 1, 8, 4, 7, 6];
const result = arr.reduce((obj, item) => {
  if (item <= 5) {
    obj['1-5']++
  } else if (item <= 8) {
    obj['6-8']++
  } else {
    obj['9-10']++
  }
  return obj
}, {
  '1-5': 0,
  '6-8': 0,
  '9-10': 0
})

console.log(result)


///Usandolo en combinación de map 

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const rta1 = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta1);

```