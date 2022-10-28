# 00 - Curso de Closures y Scope en JavaScript

## Clase 1: Bienvenida 
- Profesor Oscar Barajas Tavares
```
Comprende a la perfección los diferentes alcances que tienen tus variables cuando son declaradas en JavaScript. En este curso aprenderás los conceptos fundamentales de Scope global y local, cómo declarar variables con const, let y var.
```
## Clase 2: Global Scope 

> Es el alcance que determina la accesibilidad de las variables 

**Tipos Scope**
- Global Scope
- Local Scope
- Global automática
- Lexical Scope / Ámbito Léxico
- Block Scope
- Function Scope


**Global Scope**
> Se define cuando una variable esta declarada de forma global, osea “Fuera de una funcion o un bloque”.

**Local** 
> Cuando puedes acceder a una variable únicamente en cierta parte del código o bloque.

**Notas**
- Es importante tener en cuenta que los OBJETOS y las FUNCIONES tambien son variables, por lo tanto son afectadas por el SCOPE.
- No es buena practica declarar de forma global ya que podemos declarar dos variables con el mismo nombre y diferente valor.
- 


## Clase 3: Function Scope

> Las variabes que se creen dentro de una función solo se podrán llamar dentro de la función donde fueron declaradas y en las funciones anidadas en esta.

**Notas**
- No olvidemos que si creamos una variable dentro de una funcion debemos declararla, y luego si asignarle un valor porque si asignamos una variable sin declarar está sera global.


## Clase 4: Block Scope
>  Un bloque de código es todo aquello que está dentro de los caracteres de llaves {}.

**Nota**
- ECMAScript 6 se crea el concepto Block Scope
- Se usa `let`
- Se usa `const`
- Se deja de usar `var`


## Clase 5: Reasignación y redeclaración

> La redeclaración es volver a declarar una variable, y la reasignación es volver a asignar un valor.

- Una variable declarada con var puede ser redeclarada y reasignada.
- Una variable declarada con let puede ser reasignada, pero no redeclarada.
- Una variable declarada con const no puede ser redeclarada, ni reasignada. - Su declaración y asignación debe ser en una línea, caso contrario habrá un error.

**Notas**
- En React, una librería de JavaScript, puedes utilizar declaraciones con const para el estado de un componente, porque aunque cambie el valor, lo que sucede internamente es un re-renderizado y no una redeclaración.
- Las estructuras de datos, como los arrays u objetos, declaradas con const pueden cambiar las referencias de sus elementos, a este concepto se lo denomina mutabilidad
- `Declaración de variables:` reservar un espacio en memoria para la variable en si.
- `Re-declaración de variables:` volver a declarar una variable previamente existente.
- `Asignación de variables:` darle un valor a dicho espacio de memoria reservado.
- `Re-asignación de variables:` darle un nuevo valor a una variable.
- `var`, es posible realizar solo una declaración, el valor de la variable será undefiend pero no arrojará ningún error.
- `var`, es posible re-declarar y re-asignar valores.
- `let`, es posible re-asignar pero no re-declarar.
- `const` es una de las mejores maneras de manipular variables puesto que tiene reglas mas robustas que var y let
- `const`, no puedes re-asignar ni re-declarar tipos de datos primitivos.
- `const`, puedes re-asignar arreglos y objetos pero no re-declararlos.
- `const`, tampoco puedes solo declararla, necesita una asignación.
- Por lo que debemos recordar que el `const` no creará variables inmutables sino que creará una “atadura” inmutable. 


## Clase 6: Strict Mode 
> fue incorporado en ECMAScript 5, en pocas palabras e modo estricto y nos hace cumplir reglas basicas en nuestro Js, es muy usado para trabajar en equipos de trabajo todo deben seguir las reglas mantener un lenguaje homogenio 

**Nota**
- Nos permite ejecutar de forma estricta las reglas de JS

**El modo estricto tiene varios cambios en la semántica normal de JavaScript:**

- Elimina algunos errores silenciosos de JavaScript cambiándolos para que lancen errores.

- Corrige errores que hacen difícil para los motores de JavaScript realizar optimizaciones: a veces, el código en modo estricto puede correr más rápido que un código idéntico pero no estricto.

- Prohíbe cierta sintaxis que probablemente sea definida en futuras versiones de ECMAScript.

**Como:**
> Pues solo colocar en comillas la palabra reservada `use strict`, en cada fragmento o bloque de cófigo 


```
"use strict";

nombre = "Andres"
console.log(nombre) // ReferenceError: nombre is not defined
```


## Clase 7: ¿Qué es un Closure?
> Un closure permite acceder al scope de una función exterior desde una función interior. 

**Notas**
- En JavaScript, los closures se crean cada vez que una función se genera. 
- A diferencia de otros conceptos como funciones, variables u otros, los closures no se utilizan todas las veces
- Los closures permiten acceder al ámbito de una función exterior desde una función interior
- Al trabajar con closures entra en juego el concepto de alcance de las variables.
- Básicamente una closure es cuando usamos una variable de una funcion “padre” en una función “hijo”.
- Además para que sea una closure es que estas funciones sean anidadas (“padre-hijo”)

**Ejemplo**
```
function contador ( i ) {
  let acumulador = i
  function aumentar () {
    console.log(acumulador);
    acumulador = acumulador + 1
  }
  return aumentar
};

const closure = contador(1)
closure() // 1
closure() // 2
closure() // 3

const closure2 = contador(10);
closure2() // 10
closure2() // 11

closure() // 4
```

```
function alcancia(cantidadInicial){
  let contenido = cantidadInicial
  return function guardar(monedas){
    contenido = contenido + monedas
    return contenido
  }
}

const miAlcancia = alcancia(2)
miAlcancia(5) // 7
miAlcancia(4) // 11

const otraAlcancia = alcancia(5)
otraAlcancia(30) // 35
otraAlcancia(20) // 55
```

export function createPetList() {
  // Tu código aquí 👈
  let lista = [];

  return function guardar(nombre) {

    if (nombre) { 
      lista.push(nombre);
      return lista;
    }
    return lista;
  }
}


export function createPetList() {
  const petList = []
  return function(pet){
      if(pet){
        petList.push(pet)
        return petList
      }
      return petList
  }
}


## clase 11: ¿Qué es el Hoisting?


> Hoisting es un término para describir que las declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano, scope global o de función.

**Mi contexto**
```
Es un mecanimos que tiene Js, de poder validar las declaraciones de las variables y funciones, donde eleva cada vairiable y cada función a su scope superior. 
```


**Nota**
- Esto sucede solamente con las declaraciones y no con las asignaciones.
- El código permanece igual, solo es una interpretación del motor de JavaScript. 
- En el caso de las variables solamente sucede cuando son declaradas con var.
- No utilices var en las declaraciones de variables.
- Escribe primero las funciones y luego su invocación.