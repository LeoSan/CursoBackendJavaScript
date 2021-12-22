# Curso Práctico de Frontend Developer II

## Clase 1: 
- Introducción al curso 
- SI o SI  a huevo debemos instalar entornos de trabajo. 
![Animacion](.info/12_principles_of_animation.gif)





¿Cuáles son los 12 principios de animación de Disney?
En este comentario te voy a mencionar los conceptos de cada uno de los 12 principios de animación. Sin embargo, hice un tutorial para que puedas ver un ejemplo de cada uno de los principios y además el código en html y css aqui.
.
Antes de empezar a describir los principios de animación de Disney, es importante mencionar que no todos aplican al desarrollo web, ya que lo que Disney trato de hacer fue representar elementos físicos al mundo digital. Sin embargo, en el desarrollo web, nosotros no tenemos que hacer eso, ya que normalmente todo es visto a través de cajas contenedoras.
.

Exprimir y estirar
Como su nombre lo indica, esta animación trata de representar a un elemento físico cuando este se estira y exprime. Esto lo podemos ver en animaciones de Disney muy frecuentemente cuando un personaje choca contra la pared, por ejemplo.
.

Anticipación
En la vida real, los movimientos no pasan de manera repentina. Antes de que un movimiento suceda, siempre hay una serie de movimientos que nos ayudan a entender que algo va a pasar. Por ejemplo, antes de dar un salto, lo primero que hacemos es tomar impulso y podemos inclinarnos. En el caso del desarrollo web, al momento de dar un hover a un elemento, esto puede hacerse un poco pequeño para posteriormente hacerse mas grande.
.

Puesta en escena
En algunas ocasiones, hay un personaje al que queremos que sea el protagonista en alguna escena en particular. Para que esto suceda, una buena forma es escondiendo o quitando del foco de atención a cualquier otro personaje alrededor. En el desarrollo web, podemos hacer esto con una sombra negra en los elementos que no queremos que tengan una protagonización, o incluso darle movimiento al elemento que queremos resaltar. Por ejemplo, a un botón de “Save” le podemos dar movimiento frecuentemente para que el usuario sepa que necesita guardar algún archivo.
.

Acción directa y pose a pose
El objetivo es hacer que la animación se vea tan suave como sea posible. Como se menciono anteriormente, hacer que los movimientos en la web luzcan tan similares como en la vida real. Para hacer esto hay dos formas de hacerlo.

Manualmente (Acción directa)
Pose a pose (Nos ayuda el navegador)
En la acción directa nosotros tenemos que determinar cada frame. En cambio, en el pose a pose, la transición entre los keyframes es manejada por el navegador.
.

Accion de seguimiento y superposicion
En la vida real NO todo se mueve a la misma velocidad y dirección. Por ejemplo, cuando vamos conduciendo muy rápido y frenamos de manera repentina, el auto todavía se sigue moviendo hacia adelante unos segundos para después regresar a la posición en la que debería detenerse. Además de esto, los pasajeros dentro del auto podrían salir volando si no llevan el cinturón de seguridad.
.

Acelerar y desacelerar
En la vida real rara vez las cosas van de 0 a 100 km/h en menos de un segundo. Normalmente, a las cosas les lleva unos segundos acelerar y desacelerar. En el mundo web, esto se logra con las transiciones, donde ease-in significa acelerar y ease-out es lo contrario, desacelerar.
.

Curvas
En la vida real las cosas no se mueven de manera lineal. Las lineas rectas no es algo que a la madre naturaleza le gusta hacer. En el mundo web, nosotros podemos hacer lucir a los elementos de una manera mas “natural” con el movimiento de ease-in & ease-out. Sin embargo, cuando queremos que un elemento simule una curva, tendremos que usar mas de una animación o movimientos. Por ejemplo, cuando una pelota esta cayendo, podemos simular una curva con 2 movimientos:

El primero seria la pelota moviéndose de arriba a abajo
El segundo movimiento seria la pelota moviéndose de izquierda a derecha.
.

Accion desencadenada
En el mundo real, cuando una acción sucede, hay otras acciones que nos ayudan a entender que la primera acción realmente paso. Por ejemplo, cuando un balón rebota en el césped, puede levantar pasto, o algún animales pueden salir asustados por el ruido del balón, etc.
En el caso del desarrollo web, nosotros podemos hacer que una acción desencadene a otra acción. Esto lo podemos hacer con timing donde ambas acciones están encadenadas y cuando no suceda la primera, no puede suceder la segunda.
.

Timing
El timing es simplemente cuanto tiempo le tomara a un elemento completar un movimiento. El timing nos ayuda a que un cierto elemento parezca mas pesado que otro cuando le agregamos mas timing. Podemos ajustar este tiempo que tarda un elemento en moverse con las propiedades de animation-duration o transition-duration.
.

Exageracion
La exageración es utilizada en Disney muy comúnmente para enfatizar una acción, tal como un golpe, una caída, etc. En el mundo web, nosotros podemos exagerar una acción cuando damos clic a un elemento o cuando una acción es completada, como la carga de un archivo. Con esto enfatizamos que la acción ya se realizo. Además de esto, la exageración puede ir acompañada de colores distintos en el elemento que esta siendo enfatizado.
.

Renderizacion en 3D
Cuando estamos trabajando con elemento 3D, tenemos que tener cuidado en que estos elementos cumplan con las reglas de perspectiva que rigen al mundo físico. De otra forma, estas formas en 3D lucen erróneas. La buena noticia es que la mayoría de los navegadores ya cumplen y pueden manejar renderizaciones en 3D.
.

Atraccion
Cuando usamos animaciones o transiciones, tenemos que estar seguros de que estas lucen amigables para el usuario. De otra forma pueden estresar al usuario si las animaciones van muy rápido o aburrirlo si van muy lentas. La idea es encontrar el punto medio.

**Enlace**
- https://cssanimation.rocks/principles/
