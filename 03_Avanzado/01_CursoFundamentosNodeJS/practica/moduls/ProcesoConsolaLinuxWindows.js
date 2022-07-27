const { exec, spawn } = require('child_process')

let processes = [
    'ls -la',
    'node consola.js'
]

exec(processes[1], (err, stdout, sterr) => {
    if (err) {
        console.error(err)
        return false
    }
    console.log(stdout)
})




let processSpawn = spawn('ls', ['-la'])

console.log(processSpawn.pid)
console.log(processSpawn.connected)

processSpawn.stdout.on('data', (datos) => {
        console.log('¿Está muerto?')
        console.log(process.killed)
        console.log(datos.toString())
    }
)
processSpawn.on('exit', () => {
        console.log('El proceso termino')
        console.log(processSpawn.killed)
    }
)