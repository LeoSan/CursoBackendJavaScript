
// Podemos instanciar una promesa con la palabra reservada Promise 
const promise = new Promise(function (resolve, reject) {
    resolve('hey!')
  });
  
  const cows = 15;
  
  //
  const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
      resolve(`We have ${cows} cows on the farm`);
    } else {
      reject("There is no cows on the farm");
    }
  });
  

  //Forma de ejecutar 
  countCows.then((result) => {
    console.log(result);
  }).catch((error) => {//Captura el error por reject 
    console.log(error);
  }).finally(() => console.log('Finally'));//cuando se termina  la ejecución.  