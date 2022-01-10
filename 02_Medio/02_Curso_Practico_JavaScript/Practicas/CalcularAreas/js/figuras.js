var calcularAreas = {
    //Declaracion Variables
    PI:Math.PI,
    //Metodo Inicial
    init: function () {
        //Listen event
        calcularAreas.onclicAreaCuadrado();
        calcularAreas.onclicPerimetroCuadrado();
        
        calcularAreas.onclicAreaTriangulo();
        calcularAreas.onclicPerimetroTriangulo();
        
        calcularAreas.onclicAreaCirculo();
        calcularAreas.onclicPerimetroCirculo();

    },// fin init

    //Operaciones para calculos 
    onclicAreaCuadrado:()=>{
        let btnCalArea = document.querySelector("#btnCalArea");
        let inpLadoCuadrado = document.querySelector("#inpLadoCuadrado");
        let inpResulCalArea = document.querySelector("#inpResulCalArea");
        let msjCuadrado = document.querySelector("#msjCuadrado");

        btnCalArea.addEventListener('click', function(event) {
            event.preventDefault();
            if (inpLadoCuadrado.value > 0){
                let resultado = calcularAreas.calcularAreaCuadrado(inpLadoCuadrado.value);
                inpResulCalArea.value = resultado; 
                inpResulCalArea.style.backgroundColor = "#E4FFC7";
                msjCuadrado.style.display="none";
            }else{
                calcularAreas.msjValidacion(msjCuadrado, inpResulCalArea, "Debes ingresar un valor para el cálculo del área.");
            }

        });
    },
    onclicPerimetroCuadrado:()=>{
        let btnCalPerimetro = document.querySelector("#btnCalPerimetro");
        let inpLadoCuadrado = document.querySelector("#inpLadoCuadrado");
        let inpResulCalPerimetro = document.querySelector("#inpResulCalPerimetro");
        let msjCuadrado = document.querySelector("#msjCuadrado");

        btnCalPerimetro.addEventListener('click', function(event) {
            event.preventDefault();
            if (inpLadoCuadrado.value > 0){
                let resultado = calcularAreas.calcularPerimetroCuadrado(inpLadoCuadrado.value);
                inpResulCalPerimetro.value = resultado; 
                inpResulCalPerimetro.style.backgroundColor = "#E4FFC7";
                msjCuadrado.style.display="none";
            }else{
                calcularAreas.msjValidacion(msjCuadrado, inpLadoCuadrado, "Debes ingresar un valor para el cálculo del perímetro.");
            }


        });
    },

    onclicAreaTriangulo:()=>{
        let btnCalAreaTriangulo = document.querySelector("#btnCalAreaTriangulo");
        let inpLadoTrianguloBase = document.querySelector("#inpLadoTrianguloBase");
        let inpLadoTrianguloAltura = document.querySelector("#inpLadoTrianguloAltura");
        let inpResulCalAreaTriangulo = document.querySelector("#inpResulCalAreaTriangulo");
        let msjTriangulo = document.querySelector("#msjTriangulo");
        
        btnCalAreaTriangulo.addEventListener('click', function(event) {
            event.preventDefault();
            if ( inpLadoTrianguloBase.value > 0 && inpLadoTrianguloAltura.value > 0 ){
                inpResulCalAreaTriangulo.style.backgroundColor = "#E4FFC7";
                msjTriangulo.style.display="none";
                let resultado = calcularAreas.calcularAreaTriangulo(inpLadoTrianguloBase.value, inpLadoTrianguloAltura.value );
                console.log("resultado"+resultado)
                inpResulCalAreaTriangulo.value = resultado ;
            }else{
                calcularAreas.msjValidacion(msjTriangulo, inpLadoTrianguloBase, "Debes ingresar la base y la altura del triángulo para cálcular el área del mismo.");
            }
        });
    },    
    
    onclicPerimetroTriangulo:()=>{
        let btnCalPerimetroTriángulo = document.querySelector("#btnCalPerimetroTriangulo");
        let inpLadoTrianguloA = document.querySelector("#inpLadoTrianguloA");
        let inpLadoTrianguloB = document.querySelector("#inpLadoTrianguloB");
        let inpLadoTrianguloBase = document.querySelector("#inpLadoTrianguloBase");
        let inpResulCalPerimetroTriangulo = document.querySelector("#inpResulCalPerimetroTriangulo");
        let msjTriangulo = document.querySelector("#msjTriangulo");
        
        btnCalPerimetroTriángulo.addEventListener('click', function(event) {
            event.preventDefault();
            if ( inpLadoTrianguloBase.value > 0 && inpLadoTrianguloB.value > 0 && inpLadoTrianguloA.value > 0 ){
                inpResulCalPerimetroTriangulo.style.backgroundColor = "#E4FFC7";
                msjTriangulo.style.display="none";
                let resultado = calcularAreas.calcularPerimetroTriangulo(inpLadoTrianguloA.value, inpLadoTrianguloB.value, inpLadoTrianguloBase.value );
                inpResulCalPerimetroTriangulo.value = resultado ;
            }else{
                calcularAreas.msjValidacion(msjTriangulo, inpLadoTrianguloA, "Debes ingresar Lado A, Lado B y la base del triángulo para cálcular el perimetro del mismo.");
            }
        });
    },    
    onclicAreaCirculo:()=>{
        let btnCalAreaCirculo = document.querySelector("#btnCalAreaCirculo");
        let inpRadioCirculo = document.querySelector("#inpRadioCirculo");
        let inpResulCalAreaCirculo = document.querySelector("#inpResulCalAreaCirculo");
        let msjCirculo = document.querySelector("#msjCirculo");
        
        btnCalAreaCirculo.addEventListener('click', function(event) {
            event.preventDefault();
            if ( inpRadioCirculo.value > 0 ){
                inpResulCalAreaCirculo.style.backgroundColor = "#E4FFC7";
                msjCirculo.style.display="none";
                let resultado = calcularAreas.calcularAreaCirculo( inpRadioCirculo.value );
                inpResulCalAreaCirculo.value = resultado ;
            }else{
                calcularAreas.msjValidacion(msjCirculo, inpRadioCirculo, "Debes ingresar el radio en cm, para cálcular el área del mismo.");
            }
        });
    },    
    onclicPerimetroCirculo:()=>{
        let btnCalPerimetroCirculo = document.querySelector("#btnCalPerimetroCirculo");
        let inpRadioCirculo = document.querySelector("#inpRadioCirculo");
        let inpResulCalPerimetroCirculo = document.querySelector("#inpResulCalPerimetroCirculo");
        let msjCirculo = document.querySelector("#msjCirculo");
        
        btnCalPerimetroCirculo.addEventListener('click', function(event) {
            event.preventDefault();
            if ( inpRadioCirculo.value > 0 ){
                inpResulCalPerimetroCirculo.style.backgroundColor = "#E4FFC7";
                msjCirculo.style.display="none";
                let resultado = calcularAreas.calcularPerimetroCirculo( inpRadioCirculo.value);
                inpResulCalPerimetroCirculo.value = Math.round(resultado) ;
            }else{
                calcularAreas.msjValidacion(msjCirculo, inpRadioCirculo, "Debes ingresar el radio en cm, para cálcular el perímetro del mismo.");
            }
        });
    },
   
    calcularPerimetroCuadrado: function (valor) {
        let resulPerimetroCuadrado = valor * 4;
        return resulPerimetroCuadrado; 
    },    
    
    calcularAreaCuadrado: (valor)=> {
        let resulAreaCuadrado = valor * valor;
        return resulAreaCuadrado; 
    },    

    calcularPerimetroTriangulo: (ladoTrianguloA, ladoTriangullB, baseTriangulo)=> {
        return eval( parseInt(ladoTrianguloA) + parseInt(ladoTriangullB) + parseInt(baseTriangulo));

    },    
    calcularAreaTriangulo: (valorBase, valorAltura)=> {
        return (valorBase  * valorAltura ) / 2;
    },    
    calcularPerimetroCirculo: (radio)=> {
        let diametro = radio  * 2;
        return ( diametro  * calcularAreas.PI );
         
    },    
    calcularAreaCirculo: (radio)=> {
        return ( radio  * radio ) * calcularAreas.PI;
    },    

    msjValidacion:(divMsj, campoFocus, textMsj)=>{
        divMsj.style.display="block";
        divMsj.innerHTML = textMsj;
        campoFocus.focus();
    }

};//fin de la esctrutura

//setTimeout(function () {
    calcularAreas.init();
//}, 1000);