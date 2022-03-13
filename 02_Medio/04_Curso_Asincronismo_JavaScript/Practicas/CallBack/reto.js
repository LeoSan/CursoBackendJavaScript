//Para este reto debemos instalar npm, no lo instalare 
// npm i xmlhttprequest --save -> Permite instalar dependencia en desarrollo 
//Una forma antigua de realizar peticiones ya esto se arregla con fetch 
const API = 'https://rickandmortyapi.com/';
let xmlhttprequest = require('xmlhttprequest').XMLHttpRequest; 

function fecthData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true); //true permite que sea asyncrono
    xhttp.onreadystatechange = function (event){
        if (xhttp.readyState === 4){//Existen 4 readyStatus 1, 2, 3, 4 
            if (xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));

            }else{
                const error = new Error('Error->'+url_api);
                return callback(error, null);
            }

        }

    }
    xhttp.send();
}

//Nota:  Lo Ideal es solo tener maximo tres llamadas para no llegar al callback hell 

fecthData(API, (error1, data1)=>{
    if (error1) return console.error(error1);
    fecthData(API + data1.results[0].id, (error2, data2)=>{
        if (error2) return console.error(error2); 
        fecthData(data2.origin.url, (error3, data3)=>{
            if (error3) return console.error(error3);   
            console.log(data1.info.count); 
            console.log(data2.name); 
            console.log(data3.dimension); 
        });

    });
});