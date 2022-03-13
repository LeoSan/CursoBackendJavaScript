/* Ejemplo Callback */
//Creamos nuestra función 
function suma ( num1, num2){
    return num1  + num2;
}

function calc(num1, num2, callback){

    return callback(num1, num2);
}

console.log( calc(1, 3, suma) );



/* Otro Ejemplo */
function date(callback){
    console.log(new Date);
    setTimeout(() => {
        let date = new Date();
        callback(date)
    }, 3000);
}

function printDate( dateNow ){
    console.log(dateNow);
}

date(printDate); 