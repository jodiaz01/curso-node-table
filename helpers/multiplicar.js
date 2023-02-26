const fs = require('fs');
require('colors')
// Utilizando promesa --------------------------------------------------
// const crearArchivo = (numero = 8)=>{
//     return new Promise((result, reject) =>{

//         console.log('--------------------------------')
//         console.log('generarndo table', numero)
//         console.log('--------------------------------')

//         let resultado='';


//         for (let index = 1; index <= 12; index++) {
//        resultado  += `${numero } X ${index} = ${numero * index}\n`;

//         }   

//        fs.writeFileSync(`multilplicaion tabla de ${numero}.txt` ,resultado);

//        result(`multilplicaion tabla de ${numero}.txt ${resultado}`);
//     });
// }

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< de forma asyncrona >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
const crearArchivo = async (numero = 8, listar = false,hasta) => {
    try {
        if (listar) {
            console.log('--------------------------------')
            console.log(`${ 'generarndo table:',  numero}`)
            console.log('--------------------------------')
        }
        let resultado = '';


        for (let index = 1; index <= hasta; index++) {
            resultado += `${numero} X ${index} = ${numero * index}\n`;

        }

        fs.writeFileSync(`./arcsalida/multilplicaion tabla de ${numero}.txt`, resultado);

        return `multilplicaion tabla de ${numero}.txt ${resultado}\n`.rainbow;// de colores
    } catch (err) {
        throw err;
    };
}

//para q se pueda usar en otro archivo de node++++++++++++++++++++++++++++++++++++++++

module.exports = {
    crearArchivo
}