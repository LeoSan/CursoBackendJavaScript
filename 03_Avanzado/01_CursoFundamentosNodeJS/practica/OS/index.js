const os = require('os');

console.log(OS.arch()); // Saber la arquitectura que tiene la maquina
console.log(OS.platform()); // Que sistema operativo tiene
console.log(OS.cpus()); // Cuantas cpus cuenta la maquina
console.log(OS.constants); // Errores y señales del sistema
console.log(OS.freemem()); // Cuanto espacio de memoria libre tiene
console.log(OS.totalmem()); // Cuanta memoria tiene
console.log(OS.homedir()); // Directorio donde se encuentra el archivo
console.log(OS.tmpdir()); // Cual es la carpeta temporal
console.log(OS.hostname()); // Sabremos cual es nombre host de la maquina
console.log(OS.networkInterfaces()); // Nos muestra todas las interfaces de red disponibles

//Acceder a espacios de memoria es muy útil para saber si tengo a memoria suficiente para realizar esta operación.
console.log(os.freemem());// ---> Me dice en bytes la memoria libre que tenemos
console.log(os.totalmem());// ---> Me dice en bytes el total de la memoria 
// console.log(kb(os.freemem()));
// console.log(mb(os.freemem()));
// console.log(gb(os.freemem()));
console.log(gb(os.totalmem())); // ---> Me muestra la memoria disponible del pc.

const SIZE = 1024;
function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }


const os = require("os");
console.log('*'.repeat(70))
console.log('Mi PC con Node.js'.padStart(35))
console.log("*".repeat(70));
//arquitectura de la máquina
console.log(`Arch: ${os.arch()}`);
//plataforma del codigo
console.log(`Pltaforma: ${os.platform()}`);
//Información de la CPU
const nThreads = os.cpus().length;
const { model, speed } = os.cpus()[0];
console.log(`Cpu model: ${model.trim()} ${nThreads} threads @ ${speed} Mhz`);

// información de la freemem

const gb = (bytes) => bytes / SIZE ** 3;
console.log(
  `RAM: ${
      gb(os.freemem()).toFixed(2)
    } de ${
        gb(os.totalmem()).toFixed(2)
    } GB libres`
);
console.log("*".repeat(70));