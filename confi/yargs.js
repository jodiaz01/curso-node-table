//usando yars
const argv = require('yargs').option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe:'base en la q se crea la tabla'
}).check((argv, option) => {
    if (isNaN(argv.b)) {
        throw 'Labase debe ser un numero';
    } return true;
}).option('l',{
    alias:'listar',
    type:'boolean',
    demandOption:true,
    default:false,
    describe:'si se pone dice cual tabla se vreo'
}).option('h',{
    alias:'hasta',
    type:'number',
    demandOption:true,
    default:1,
    describe:'se creara la tabla de x numero hasta cual se multiplicara'
}).argv;


module.exports= argv;