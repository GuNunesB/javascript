/**
 * Cálculo de Média Aritmética de 3 Valores
 * @author Gustavo Nunes Bispo
*/
 
// Importar a biblioteca read-linesync
const input = require('readline-sync')
const colors = require('colors')

console.clear()
console.log("Conversor de Milhas para Quilometros".rainbow)

// variáveis
let milhas, quilometros

// entrada 
milhas = Number(input.question("Digite o valor em milhas: "))

// processamento
// fórmula: para um resultado aproximado, multiplique o valor de comprimento por 1,609344
quilometros = milhas * 1.609344

//saída
console.log(`Quilometros: ${quilometros.toFixed(5)}`)