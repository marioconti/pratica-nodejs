let conversion = require("conversion")

let pulgadas = 3;
let millas = 5;
let pies = 8

console.log(`${pulgadas} pulgadas son ${conversion.pulgadasaMetros(pulgadas)} metros`)
console.log(`${millas} millas son ${conversion.millasaMetros(pulgadas)} metros`)
console.log(`${pies} pies son ${conversion.piesaMetros(pulgadas)} metros`)