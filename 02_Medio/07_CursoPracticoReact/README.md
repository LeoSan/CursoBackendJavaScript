# 07 ¿Qué es React.js?

Este nivel es sobre nuevas funciones e implementacones de ECMAScript 5-6-7 

## Clase 1: Bienvenida 
- Profesor Oscar Barajas Tavares  @gdnx 

## Clase 2: 

**¿Qué es React.js?**
- Es una libreria de Js para desarrollar  interfaces de usuario, donde solo nos vamos enfocar en la vista, 
- Solo viene resolver las vistas del usuario.  
- Se piensa en componentes es decir cada fragmento de cada interfaz encapsulado. 
- Nacio en el  2013 gracias a Facebook ahora Meta. 

**Conceptos**
- **JSX** se refiera a Javascript XML. Nos permite escribir html dentro de Javascript. 
- **Virtual DOM** El virtual DOM es una copia en memoria del DOM normal del navegador. Pero ¿por qué hacer una copia? Bueno, cuando el UI cambia de estado, normalmente el DOM es muy lento. Sin embargo, virtual DOM es extremadamente rápido. Lo que ocurre es que primero, todo se computa en el virtual DOM, se actualiza por completo el virtual DOM (a pesar de que se re-renderiza el virtual DOM, no afecta el rendimiento porque primero no se tiene que mostrar gráficamente y realmente es muy rápido) y realiza el proceso de diff que compara ambos DOM para después igualar o “reconciliar” ambos UI y cambiar el aspecto de la manera más corta y rápida posible.
- **Ciclo de vida** se refiere al proceso de cuando los componentes son creados, actualizados y eliminados. O de otra manera ⇒ nacen, crecen y mueren.
- **Estado** son los datos que están dentro del componente. Estos pueden ser actualizados usando diferentes métodos. Los estados son muy importantes en React, pues son encargados de actualizarse cada vez que se cambian, afectando a los demás nodos del virtual DOM.
- **Eventos** los componentes, pueden configurarse con eventos como onclick para responder antes ciertas interacciones con el usuario, tal como los haríamos en Html
- **React Hooks** es otra manera de escribir los componentes con estado, si usar clases. No se pretenden reemplazar, sin embargo, usar funciones para los componentes pueden facilitar el entendimiento de la aplicación.

