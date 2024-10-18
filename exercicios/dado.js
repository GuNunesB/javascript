/**
 * Dado - Uso de números aleatórios
 * @author Gustavo Nunes Bispo
*/

const input = require('readline-sync')
const colors = require('colors')

let face

console.clear()
console.log("Jogo do dado")
input.question("Pressione a tecla [Enter] para jogar o dado")

// Sorteio da face de um dado
// Math classe matemática
// floor() conversão para números inteiros
// random() * (gerador de números aleatórios)

face = Math.floor(Math.random() * 6 + 1) // 0, 1, 2, 3, 4, 5
console.log(`Face do dado: ${face}`.yellow)