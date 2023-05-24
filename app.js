const {crearArchivoTabla} = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');
const colors = require('colors');

console.clear();

let listar = argv.l || false;
let base = argv.b;
let hasta = argv.h;

// const [, , arg3 = 'base=1' ] = process.argv;
// const [, base ] = arg3.split('=');

crearArchivoTabla(base, listar, hasta)
  .then((file) => {console.log(`Tabla del ${base} creada exitosamente. Archivo: ${file.bgMagenta}`)})
  .catch((err) => {throw err})

