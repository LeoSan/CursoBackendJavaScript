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