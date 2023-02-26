//importaciones
const { crearArchivo } = require('./helpers/multiplicar')
const argv= require('./confi/yargs')
require('colors')
console.clear();
// const numero= 6;

//console.log(process.argv)//imprimer argumento por ingreso de consola
// ejem>> escribiendo en console node app.js  --numero =2  >> app.js es el archivo, --numero=#  es el algumento recibe
// const [, , agum1] = process.argv;
// const [, numero = 5] = agum1.split('=')
// console.log(agum1)
console.log(argv)
crearArchivo(argv.b, argv.l,argv.h).then(archivo => console.log(archivo, "creado".blue)).catch(e => console.log(e));