/**
 * Cálculo do consumo mínimo de água
 * @author Gustavo Nunes Bispo
 */

// Importar biblioteca
const input = require ('readline-sync')

let peso, consumo
console.clear()

//entrada
peso = Number(input.question("Digite seu peso em Kg: "))

//processamento
consumo = peso * 0.035

//saída
console.log(`Consumo mínimo de água p/dia é de: ${consumo.toFixed(2)} Litros` )
