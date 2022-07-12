const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';


//Esta medodología es antogua pero es compactible con todos los navegadores 
// Fue reemplazada por fect 

//Para  este ejercicio debemos instalar `npm i xmlhttprequest` 


//Creamos una función para hacer llamado 
//Se checa que le pasamos un callback simplemente recibe una función como parametro 
function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest(); // Instanciamos 

  xhttp.open('GET', urlApi, true);//Abrimos conexión a nuestra APIs

  //Función anonima 
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) { // Me ayuda escuchar los estados para saber cuando estará disponible la información 
      if(xhttp.status === 200) {//Validamos tipo de estado 
        callback(null, JSON.parse(xhttp.responseText));//Retornamos 
      }else {
        const error = new Error('Error' + urlApi);
        return callback(error, null);
      }
    } 
  }
  xhttp.send();//para ejecutar la orden 
}