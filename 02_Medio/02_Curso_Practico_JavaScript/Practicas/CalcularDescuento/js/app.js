var app = {
    //Declaracion Variables
    PI:Math.PI,
    //Metodo Inicial
    init: function () {
        //Listen event
        app.onclicCalularDescuento();

    },// fin init

    //Operaciones para calculos 
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
    },
    calculoDescuento:(porentaje, precio)=>{
        let valorDescuento = (precio * (porentaje / 100)); 
        return valorDescuento;
    },
    calculoDescuentoTotal:(descuento, precio)=>{
        return  eval(precio - descuento);
    },
    
    msjValidacion:(divMsj, campoFocus, textMsj)=>{
        divMsj.style.display="block";
        divMsj.innerHTML = textMsj;
        campoFocus.focus();
    }

};//fin de la esctrutura

//setTimeout(function () {
    app.init();
//}, 1000);