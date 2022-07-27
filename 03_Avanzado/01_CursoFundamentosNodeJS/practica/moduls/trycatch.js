function otraFuncion() {
    serompe();
}

function serompe() {
   return 3 + z;
}

try {
   otraFuncion();
} catch(err) {
   console.error('error en el llamado');
   console.error(err.message);
   console.error(err);
}

console.log('despues de romper');



const filesystem = require('fs');

function leerArchivo(archivo, callback) {
    filesystem.readFile(archivo, function (error, data) {
        try {
            if (error) throw new Error(error); // Lanza explícitamente el error, incluso podemos personalizar el error y colocarle el mensaje que nosotros necesitemos.
            callback(data); // Si lanza error nunca ejecuta el callback
        } catch (error) {
            console.error(error.message);
        }
    });
};

// Prueba colocando un archivo no existente para que logres observar como manejamos el error desde el mismo callback de la funcion readFile del filesystem
leerArchivo('archivo.txt', function (data) {
    console.info(data.toString()); // Si ocurre error esto jamás se ejecuta, así nos evitamos recibir el error hasta acá para evaluarlo con una condicionante.
});