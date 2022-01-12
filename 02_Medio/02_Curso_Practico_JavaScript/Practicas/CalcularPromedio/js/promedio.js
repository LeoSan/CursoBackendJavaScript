var promedio = {
    //Declaracion Variables
    PI:Math.PI,
    listSalario:[],
    //Metodo Inicial
    init: function () {
        //Listen event
        promedio.onclicAgregaSalario();
      

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

            inpResulSumaSalarios.value = promedio.calculoPromedioSalario();
            inpResulSumaSalarios.style.backgroundColor = "#E4FF56";
        });
    },
    calculoPromedioSalario:()=>{
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
        LI.textContent = `Total : ${promedio.calculoPromedioSalario()}`;
        LI.classList.add('list-group-item', 'list-group-item-success');         
        divListSalario.appendChild(LI); 
    },
    
    msjValidacion:(divMsj, campoFocus, textMsj)=>{
        divMsj.style.display="block";
        divMsj.innerHTML = textMsj;
        campoFocus.focus();
    }

};//fin de la esctrutura

//setTimeout(function () {
    promedio.init();
//}, 1000);