# Curso Práctico De JavaScript
Este nivel son practicas de javascript podremos hacer practicas para reforzar el conocomiento y seguir aprendiendo si usan funciones nuevas. 

## Clase 1: Bienvenida 
- Profesor Juan David Castro 

## Clase 2: Prueba de JavaScript

Es un conjunto de preguntas para evaluar tu nivel, esta bien para los ciclos basicos, los respondi de manera mental. 

## Clase 3:  Configuración del entorno de desarrollo para JavaScript
- Solo se instalo el codevisual y se genero un repo en github 

## Clase 4 -5 - 6 - 7- 8-9:  Análisis: cómo calcular figuras geométricas
Validar los datos para el ejercicio practico

![Geometría](./info/LogicaAreasFiguras.png)

Tatuarse en la piel 

![Geometría](./info/Jerarquia.png.png)


```
Si van a crear varios archivos con el mismo nombre pero diferente extensión, por consola es muy fácil de la siguiente forma:

touch nombreArchivo.{extension, extension, extension}

Ej:

touch figuras.{html,js}
touch button.{html,js,css}
```


## Clase 10 -11 -12 -13 : Análisis: cómo calcular porcentajes y descuentos

En este taller se creará un programa que realiza descuento a productos a facturar.

Análisis para realizar programa de porcentajes y descuentos
Primer paso: definir las fórmulas de los porcentajes y descuentos
Segundo paso: implementar la fórmula en JavaScript
Tercer paso: crear funciones
Cuarto paso: integrar JS con HTML
Definiendo fórmulas de porcentajes y descuento
La formula para hacerlo escalable, es decir para cualquier precio y cualquier descuento es:


(precio * (100 - descuento))/100

```

onclicCalularDescuento:()=>{
        let btnCalcularDescuento = document.querySelector("#btnCalcularDescuento");
        let inpPrecio = document.querySelector("#inpPrecio");
        let inpPorcentaje = document.querySelector("#inpPorcentaje");
        let msjDescuento = document.querySelector("#msjDescuento");
        let inpResulDescuento = document.querySelector("#inpResulDescuento");
        let inpResulTotal = document.querySelector("#inpResulTotal");
        
        let mensajeResultado = document.querySelector("#mensajeResultado");

        btnCalcularDescuento.addEventListener('click', function(event) {
            event.preventDefault();
            if (inpPrecio.value > 0 && inpPorcentaje.value > 0){
                //Calculo del Descuento con el porcentaje
                let resultado = app.calculoDescuento( inpPorcentaje.value , inpPrecio.value );
                inpResulDescuento.value = resultado;
                inpResulDescuento.style.backgroundColor = "#E4FFC7";

                //Resultado del Total Desuento
                inpResulTotal.style.backgroundColor = "#E4FF56";
                inpResulTotal.value = app.calculoDescuentoTotal(resultado, inpPrecio.value);

                msjDescuento.style.display="none";
                //Limpio casilla de mensaje 
                mensajeResultado.innerHTML="";

                //Muestro mensaje creando un div 
               let mensajeDescuento = document.createElement('DIV');
               mensajeDescuento.textContent = `Tu margen de descuento al ${inpPorcentaje.value}%, es de: ${resultado}`;
               mensajeDescuento.classList.add('badge', 'bg-primary', 'text-wrap', 'fs-6'); 
               mensajeResultado.appendChild(mensajeDescuento); 

               let mensajeTotal = document.createElement('DIV');
               mensajeTotal.textContent = `Debes pagar un total de ${app.calculoDescuentoTotal(resultado, inpPrecio.value)} Pesos, Ya qué  ${resultado} Pesos es el descuento del margen de ${inpPorcentaje.value}%`;
               mensajeTotal.classList.add('badge', 'bg-success', 'text-wrap', 'fs-6', 'mt-2'); 
               mensajeResultado.appendChild(mensajeTotal); 

            }else{
                app.msjValidacion(msjDescuento, inpPrecio, 'Debes llenar los campos precio y porcentaje para el calculo');
            }
        });

```

## Clase 14 : Qué es promedio, moda y mediana







