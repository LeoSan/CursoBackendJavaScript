const process = require('process')

// Este evento se dispara cuando el proceso está apunto de terminar
process.on('beforeExit', () =>{
    console.log('Ey !! El proceso esta a punto de acabar')
})

/*
  Este evento se dispara cuando el proceso ya ha terminado,
  Si hay un proceso asyncrono dentro del evento exit,
  nunca se va a ejecutar, y eso puede llegar a ser un foco de
  problemas
*/
process.on('exit', () =>{
    console.log('El proceso acabo')
})

//functionQueDaError()

/*
  Es muy util capturar una excepcion, para evitar que se pare todo el proceso
*/
process.on('uncaughtException', (err) =>{
    console.log(`Ocurio un error: ${err.message}`)
})

