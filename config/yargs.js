const argv = require('yargs')
                            .option('b', {
                              alias: 'base',
                              type: 'number',
                              demandOption: true,
                              describe: 'Número del cual quieres obtener la tabla de multiplicar.'
                            })
                            .option('l', {
                              alias: 'listar',
                              type: 'boolean',
                              demandOption: false,
                              describe: 'Te muestra la tabla de multiplicar completa en la consola.'
                            })
                            .option('h', {
                              alias: 'hasta',
                              type: 'number',
                              default: 10,
                              describe: 'Te hasta qué número quieres que se haga la multiplicación.'
                            })
                            .check((argv, options) => {
                              if(isNaN(argv.b)){
                                throw 'La base tiene que ser un número'
                              }
                              return true
                            })
                            .check((argv, options) => {
                              if(isNaN(argv.h)){
                                throw 'El límite tiene que ser un número'
                              }
                              return true
                            })
                            .argv;

module.exports = argv;