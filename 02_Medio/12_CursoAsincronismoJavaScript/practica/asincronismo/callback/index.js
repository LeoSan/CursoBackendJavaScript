/*
    Una función que se pasa como argumento de otra función y que será invocada.
*/

//Podemos declarar una función normal
const sum = (num1, num2)=>{
    return num1 + num2;
} 
    
  
  
// Nuestra segunda función podemos declarar como argumento que resive una función   
  function calc(num1, num2, sumNumbers) {
    return sumNumbers(num1, num2);
  };
  

  //Podemos ver el resultado en consola setTimeout
  console.log(calc(2, 2, sum));
  

  //Podemos usar el metodo setTimeout
  setTimeout(function () {
    console.log('Hola JavaScript');
  }, 5000)
  

  //Metodo saludar 
  function gretting(name) {
    console.log(`Hola ${name}`);
  }
  
  setTimeout(gretting, 2000, 'Leonard ');