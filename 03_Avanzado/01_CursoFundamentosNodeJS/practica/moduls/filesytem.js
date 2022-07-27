// Importamos el modul FS 
const fs = require('fs');


//Método para leer un archivo  
function leer(ruta, cb) {
    //Metodo del modelo  readFile
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    })
}


//Método para escribir js 
function escribir(ruta, contenido, cb) {
    //Metodo del modelo  para escribir writeFile
    fs.writeFile(ruta, contenido, function (err) {
        if (err) {
            console.error('No he podido escribirlo', err);
        } else {
            console.log('Se ha escrito correctamente');
        }

    });
}

function borrar(ruta, cb) {
    fs.unlink(ruta, cb);
}

// escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);
// leer(__dirname + '/archivo1.txt', console.log)
borrar(__dirname + '/archivo1.txt', console.log);