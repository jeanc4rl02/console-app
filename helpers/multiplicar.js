const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async (base, listar, hasta) => {


  let finalResult = '';

  for (let index = 1; index <= hasta; index++) {
    let result = base*index;
    finalResult += `${base}x${index} = ${result}\n`;
  }
  if (listar) {
    console.log(
`=======================
      TABLA DEL ${base}
=======================`.blue);
    console.log(finalResult.bold);
  } 
  fs.writeFileSync(`./upload/tabla-${base}.txt`, finalResult);

  return `tabla-${base}.txt`

}

module.exports = {
  crearArchivoTabla
};