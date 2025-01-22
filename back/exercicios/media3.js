/**
 * Cálculo de Média Aritmética de 3 Valores
 * @author Gustavo Nunes Bispo
*/
 
// Importar a biblioteca read-linesync
const input = require('readline-sync')
const colors = require('colors')

// variáveis
let num1, num2, num3, media
 
console.clear()
console.log("Calculo de Média Aritmética de 3 Números".rainbow)

// entrada
// no console entradas numéricas precisam ser convertiadas com o uso do "Number()"
num1 = Number(input.question("Digite o primeiro numero: "))
num2 = Number(input.question("Digite o segundo numero: "))
num3 = Number(input.question("Digite o terceiro numero: "))

// processamento
media = (num1 + num2 + num3) / 3
 
// saída
console.log(`Media: ${media.toFixed(1)}`.rainbow)

if (media < 5) {
    console.log("Aprovado".blue)
}else {
    console.log("Reprovado".red)
}