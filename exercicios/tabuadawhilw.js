/**
 * Tabuada usando o While
 * @author Gustavo Nunes Bispo
 */

const input = require('readline-sync')

let valor
let i = 1

console.clear()
console.log("Tabuada While")

valor = Number(input.question("Digite o valor da tabuada: "))

while (i < 11) {
    console.log(`${valor} X ${i} = ${valor * i}`)
    i++
}