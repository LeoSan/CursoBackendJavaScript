var calcularAreas = {
    //Declaracion Variables
    ladoCuadrado: 5,
    ladoTriangulo: 6,
    baseTriangulo: 4,
    AlturaTriangulo: 5.5,
    //Círculo
    radioCirculo:4,
    PI:Math.PI,
    
    //Metodo Inicial
    init: function () {
        //eventos
        console.group("Cuadrado");
        calcularAreas.calcularPerimetroCuadrado();
        calcularAreas.calcularAreaCuadrado();
        console.groupEnd();


        console.group("Triángulo");
        calcularAreas.calcularPerimetroTriangulo();
        calcularAreas.calcularAreaTriangulo();
        console.groupEnd();

        console.group("Círculo");
        calcularAreas.calcularPerimetroCirculo();
        calcularAreas.calcularAreaCirculo();
        console.groupEnd();


    },// fin init

    //Operaciones para calculos 
   
    calcularPerimetroCuadrado: function () {
        let resulPerimetroCuadrado = calcularAreas.ladoCuadrado * 4;
        console.log(`Tu perimetro del cuadrado es : ${resulPerimetroCuadrado} cm`);
    },    
    
    calcularAreaCuadrado: ()=> {
        let resulAreaCuadrado = calcularAreas.ladoCuadrado * calcularAreas.ladoCuadrado;
        console.log(`Tu área del cuadrado es : ${resulAreaCuadrado} cm`);
    },    

    calcularPerimetroTriangulo: ()=> {
        let resulPeriTriangulo = calcularAreas.ladoTriangulo  + calcularAreas.ladoTriangulo + calcularAreas.baseTriangulo;
        console.log(`Los Lados del triángulo Miden : Lado ${calcularAreas.ladoTriangulo} cm, Base ${calcularAreas.ladoTriangulo} `);
        console.log(`La altura del triángulo : Altura ${calcularAreas.AlturaTriangulo}cm `);
        console.log(`El perímetro del triángulo :  ${resulPeriTriangulo}cm `);

    },    
    calcularAreaTriangulo: ()=> {
        let resulAreaTriangulo = (calcularAreas.baseTriangulo  * calcularAreas.AlturaTriangulo ) / 2;
        console.log(`La altura del triángulo : Altura ${calcularAreas.AlturaTriangulo}cm `);
        console.log(`La base del triángulo : Base ${calcularAreas.baseTriangulo}cm `);
        console.log(`El área del triángulo :  ${resulAreaTriangulo}cm `);
    },    
    calcularPerimetroCirculo: ()=> {
        let diametro = calcularAreas.radioCirculo  * 2;
        let resulPerimtroCirculo = ( diametro  * calcularAreas.PI );
        console.log(`El perimetro del Circulo :  ${resulPerimtroCirculo} cm `);
    },    
    calcularAreaCirculo: ()=> {
        let resulAreaCirculo = ( calcularAreas.radioCirculo  * calcularAreas.radioCirculo ) * calcularAreas.PI;
        console.log(`El área del Circulo :  ${resulAreaCirculo} cm `);
    },    

};//fin de la esctrutura

//setTimeout(function () {
    calcularAreas.init();
//}, 1000);