/**
 * Cálculo de porcentagem de um número
 * @author Gustavo Nunes Bispo
 */

// Importar a biblioteca read-linesync
const input = require ('readline-sync')
const colors = require('colors')

console.clear()
console.log("Regra de 3")
console.log("x% de y = valor")
console.log()

// variáveis
let x, y, valor

// entrada
x = Number(input.question("Digite o valor de X: "))
y = Number(input.question("Digite o valor de Y: "))

// processamento 
valor = (x * y) / 100

// saída
console.log(`${x}% de ${y} = ${valor.toFixed(2)}`.red)