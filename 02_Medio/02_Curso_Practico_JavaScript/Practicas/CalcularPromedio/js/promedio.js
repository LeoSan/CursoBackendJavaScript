var promedio = {
    //Declaracion Variables
    PI:Math.PI,
    listSalario:[],
    //Metodo Inicial
    init: function () {
        //Listen event
        promedio.onclicAgregaSalario();
        promedio.onclicCalcularTodo();
      

    },// fin init

    //Operaciones para calculos 
    onclicAgregaSalario:()=>{
       let btnAgregaSalario = document.querySelector("#btnAgregaSalario");
       let inpSalario = document.querySelector("#inpSalario");
       let listadoSalario = document.querySelector("#listadoSalario");
       let inpResulSumaSalarios = document.querySelector("#inpResulSumaSalarios");
        
       btnAgregaSalario.addEventListener('click', function(event) {
            event.preventDefault();
            promedio.listSalario.push(inpSalario.value);
            console.log(promedio.listSalario);
            promedio.pintarSalarios(listadoSalario);
            inpSalario.value='';
            inpSalario.focus();

            inpResulSumaSalarios.value = promedio.calculoSumaSalario();
            inpResulSumaSalarios.style.backgroundColor = "#E4FF56";
        });
    },    
    onclicCalcularTodo:()=>{
       let btnAgregaSalario = document.querySelector("#btnCalcularPromedio");
       let inpResulPromedio = document.querySelector("#inpResulPromedio");
       let inpResulMediana = document.querySelector("#inpResulMediana");
       let inpResulModa = document.querySelector("#inpResulModa");
       
        
       btnAgregaSalario.addEventListener('click', function(event) {
            event.preventDefault();
            inpResulPromedio.value = promedio.calculoSumaSalario() / promedio.listSalario.length ;
            inpResulPromedio.style.backgroundColor = "#E4FF56";
            inpResulMediana.value = promedio.calcularMediana(promedio.listSalario);
            inpResulMediana.style.backgroundColor = "#E4FF56";
            inpResulModa.style.backgroundColor = "#E4FF56";

            console.log(promedio.moda(promedio.listSalario));
            //Recuerda que la moda es el elemento que mas se repite 
            let ListaModa = promedio.moda(promedio.listSalario); 
            let texturizado = ListaModa[ListaModa.length - 1].splice(",");
            console.log(texturizado);
            inpResulModa.value = `El salario que mas se repite es :${texturizado[0]}, y se repite : ${texturizado[1]} veces.`; 
            inpResulModa.style.backgroundColor = "#E4FF56";
        });
    },
    calculoSumaSalario:()=>{
        let sumSalario = 0;
        let calculoPromedio = 0;
        promedio.listSalario.forEach(element => {
            sumSalario = eval( parseInt(sumSalario) + parseInt(element));
        });
        //Calculo Promedio
        return sumSalario;
    },
    pintarSalarios:(divListSalario)=>{
        let contador = 1;
        divListSalario.innerHTML='<li class="list-group-item active" aria-current="true">Listado de Salarios</li>';
        
        promedio.listSalario.forEach( (element, index) => {
            let LI = document.createElement('LI');
            LI.textContent = `Salario (${contador}) - ${element}`;
            LI.classList.add('list-group-item');         
            divListSalario.appendChild(LI); 
            contador++;
        });
        let LI = document.createElement('LI');
        LI.textContent = `Total : ${promedio.calculoSumaSalario()}`;
        LI.classList.add('list-group-item', 'list-group-item-success');         
        divListSalario.appendChild(LI); 
    },
    
    msjValidacion:(divMsj, campoFocus, textMsj)=>{
        divMsj.style.display="block";
        divMsj.innerHTML = textMsj;
        campoFocus.focus();
    },
    calcularMediana:(listado)=>{
        
        let mediana;
        let mitadLista = parseInt(listado.length/2);
        let promedio;
        let totalListad = listado.length;

        if( (totalListad % 2 === 0) ?  true :  false ){
            const elemento1 = listado[mitadLista - 1];
            const elemento2 = listado[mitadLista];
            mediana = ( parseInt(elemento1) + parseInt(elemento2) ) / 2;
        }else{
            mediana = listado[mitadLista];
        } 
        return mediana; 
    },
    esPar:function(numero) {
        return (numero % 2 === 0) ?  true :  false;
    },
    ordenarLista:(listado)=>{
        listado.sort(function(a, b) {
            return a - b;
        });
        return listado 
    },    
    ordenarListaLogica:(listado)=>{
        listado.sort(function(a, b) {
            if (a > b) return 1;
            if (a == b) return 0;
            if (a < b) return -1;
        });
        return listado 
    },
    moda:(listado)=>{
        const lista1Count = {};
        
        listado.map((elemento)=>{
            if (lista1Count[elemento]){
                lista1Count[elemento] +=1;
            }else{
                lista1Count[elemento] =1;
            } 
        });

        const lista1Array = Object.entries(lista1Count).sort((elementoA, elementoB)=>{
            return elementoA[1] - elementoB[1];  
        });
        
        return lista1Array;
    }

};//fin de la esctrutura

//setTimeout(function () {
    promedio.init();
//}, 1000);