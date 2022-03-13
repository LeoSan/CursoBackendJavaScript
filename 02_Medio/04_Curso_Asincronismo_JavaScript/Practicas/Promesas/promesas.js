//Estructura básica para trabajar promesas 
//Definición 
const somethingWillHappen = ()=>{

    return new Promise( (resolve, reject)=>{
        if (true){
            resolve('Si Paso!!');
        }else{
            reject('No paso!!!');
        }
    });
};

// Implementación 
somethingWillHappen()
    .then(response => console.log(response))
    .catch(err=>console.error(err));