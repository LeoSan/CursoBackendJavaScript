# 09 Curso de Closures y Scope en JavaScript

Este nivel es sobre nuevas funciones e implementacones de ECMAScript 5-6-7 

## Clase 1: Bienvenida 
- Oscar Barajas Tavares


## Clase 2:Qué es el Scope y cómo funciona el Global Scope

**¿Qué es el scope?**
Es el alcance que tendrá tu variable dentro de tu código, o en otras palabras el scope es quién se encargará de decidir a que bloques de código va a acceder una variable. Tenemos dos tipos de scope:


**Es el encargado de decidir a que bloque de codigo accedera a una variable.**

**Tipos**
- Scope Local
- Scope Global 


> Nota:
- Global Scope : No están dentro de funciones o bloques, por lo tanto se puede acceder a ellas de manera global.
- Definiendo un valor con  **var** podemos re-asignar una variable pero es una mala práctica.
- Con **let** y **const** no podemos, aparecerá un error.
- Es una mala práctica crear una variable sin las palabras reservadas: **var, let y const.**
- Si se asigna una variable dentro de una función sin las palabras reservadas será una variable global.

La doble asignación de una variable también es una mala práctica.

```
var hello = 'Hello'
console.log(`${hello}`)
Con var podemos reasignar el valor de la variable pero esto se considerá una mala práctica y debe evitarse a toda costa.


```
## Clase 3: Local Scope

- El scope se puede definir como el alcance que puede tener una variable en tu codigo.
- El Local Scope: se refiere a la variable o funcion que esta dentro de un bloque o funcion especifica. 
- Solo se pueden acceder a ellas (ejecutar o llamar) dentro del entorno en donde conviven.
- El ambito lexico: se refiere a que una funcion puede acceder a una funcion o variable fuera de ella. 
- Cada nivel interno puede acceder a sus niveles externos hasta poder alcanzarlas.


**El ambito lexico**
En cristiano es el modo de acceder a una variable local sin reemplazar la variable Global.

Conste este ejemplo vemos que no se pierde el valor global 
```
let nombre = "Juana";

const decirNombre = ()=>{
	let nombre = "Mario";
	console.log(`Yo me llamo ${nombre}`);
}

console.log(`Yo me llamo ${nombre}`); 
decirNombre();


``` 


## Clase 4: Function Scope

Diferencias 

- **var**: Permite declarar, redeclarar y reasignar.
- **let**: Permite declarar, no permite redeclarar, y sí permite reasignar cuantas veces quieras.
- **const**: Permite declarar, no permite redeclarar, y no permite reasignar jamás.


## Clase 5: Block Scope


`
Dentro de una función podemos tener un bloque de código, por ejemplo: un if, mientras lo llamamos sobre una llave estará guardado dentro de un bloque.

Si definimos un elemento con var podemos acceder en todos los elementos de la función, si lo llamamos fuera del bloque donde está, vamos a poder acceder a ese elemento.

Con let y const no vamos a poder acceder a ellos porque se establecen dentro del bloque, solo se puede acceder a ellos dentro de ese bloque.
`

Recuerda que el uso de let y const es algo complejo usando en Scope. Ejemplo


const nuevaFuncion=(num)=>{
	
	if (num > 1){
		let palabra_uno = "Buscar";
		const palabra_dos = "valor ";
		var palabra_tres = "preciso";
	}
	console.log(palabra_uno); -> Error -> Falla porque solo let permite acceder a este valor dentro del bloque if 
	console.log(palabra_dos); -> Error -> Falla porque solo let permite acceder a este valor dentro del bloque if 
	console.log(palabra_tres); -> Imprime preciso -> Porque var es accedible desde todo el ambito de la función 
}

nuevaFuncion(2); 

## Clase 6: ¿Qué es un closure?

- Un closure es la combinación entre una función y el ámbito léxico en el que esta fue declarada. Con esto, la función recuerda el ámbito en el que se creó. 
- La mejor forma de entender un closure es por medio de un ejemplo práctico.

**Resumen**
> Una clausura o closure es una función que guarda referencias del estado adyacente (ámbito léxico). 
> En otras palabras, una clausura permite acceder al ámbito de una función exterior desde una función interior. En JavaScript, las clausuras se crean cada vez que una función es creada.
> prácticamente es una función que retorna una función. 

`
Los closures son basicamente cuando aprovechamos la habilidad de Javascript de usar las variables que están en el scope padre de nuestro bloque de código, 
por eso el global scope es un closure grandote; el bloque myFunction puede usar TODAS las variables que están disponibles en 
el bloque inmediato anterior.
`
Ejemplo 
``` 
onst moneyBox = () => {
    let saveCoins = 0
    const countCoins = (coins) => {
        saveCoins += coins
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins
}

let myMoneyBox = moneyBox()
myMoneyBox(4) // 4
myMoneyBox(6) // 6
myMoneyBox(10) // 10

``` 

## Clase 7: Ámbito léxico en closures


```
const buildCount = (i)=>{
    let count = i;
    const displayCount = () =>{
        console.log(count++);
    }
    return displayCount;
};

let valor1 = buildCount(1);

valor1(); // Imprimer 1
valor1(); // Imprimer 2
valor1(); // Imprimer 3


let valor2 = buildCount(10);

valor2(); // Imprimer 10
valor2(); // Imprimer 11
valor2(); // Imprimer 12


```

##Clase 8: Cómo crear variables privadas con closures

> Variables privadas con Closures: JS por su naturaleza no fomenta el uso de datos privados pero 
> por medio de los Closures podemos crear valores que solo puedan ser accedidos por medio de métodos, 
> que no van a estar disponibles fuera de esta función.

**Ejemplo**
```
const person = () => {
    let nombre = "sin nombre"; // Se declara la variable con let justo en la raíz de la función para que pueda ser vista en todos los niveles interiores.
    return { // Se retorna un "objeto" con 2 "metodos" (funciones)
        obtenerNombre: () => { // método 1, que no recibe parámetros y sólo devuelve la variable nombre.
            return nombre;
        },
        definirNombre: (nuevoNombre) => { // método 2, que recibe un parámetro y lo asigna a la propiedad nombre definida en la raíz de este objeto.
            nombre = nuevoNombre;
        }
    };
};
const mipersona = person(); // Define la constante mipersona y le asigna el objeto (la función) persona, recibiendo asi los 2 métodos (obtenerNombre y definirNombre).
console.log(mipersona.obtenerNombre()); // Te dará el valor por omisión que en este caso sería sin nombre.
mipersona.definirNombre('Jonny'); // Asignas un nuevo nombre por medio del método definirNombre().
console.log(mipersona.obtenerNombre()); // Te dará el nuevo valor que asignaste la línea anterior.
```

## Clase 9-10: Loops donde fallamos 

`
Podemos crear Closures de diferentes formas y también de forma involuntaria, esto significa que no tenemos control de lo que estamos creando, tenemos que tener cuidado con nuestras asignaciones o bloques de código que de alguna manera nosotros no controlemos muchas veces sucede porque no establecimos nuestros elementos correctamente.

Con el uso del Scope y los Closures podemos optimizar nuestros proyectos sin ningún problema. 
`

## Clase 11: Debugging

> Piensen en el debugger como un boton de pausa en el flujo del codigo, 
> si ponemos los puntos de pausa en los lugares correctos podemos estar 
> viendo que valores estan trayendo los parametros, s estan siendo modificados o no, 
> para brindarnos la seguridad de que el flujo de codigo que estamos construyendo sea el correcto
```
const moneyBox =()=>{              
   debugger // no hay ningun valor definido porque aun no se ha hecho nada
    var saveCoins = 0;
    const countCoins=(coins)=>{                                 
  debugger// paso por paso ira saltando para saber cual es el valor coins en parameto que le va llegando y cuanto guardara saveCoins
    saveCoins += coins;
    console.log(`MoneyBox:${saveCoins}`);
   }
   return countCoins;
}
let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);
```