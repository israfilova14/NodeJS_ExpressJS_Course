// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./modules');
console.log(names);
// { john: 'John', peter: 'Peter' }

const sayHi = require('./utils');
console.log(sayHi);
// [Function: sayHi]

sayHi("Aynur");
// Hello there Aynur!
sayHi(names.john);
// Hello there John!
sayHi(names.peter);
// Hello there Peter!