/**
 * Cálculo do consumo de combustível
 * @author Gustavo Nunes Bispo
 */

// Importar a biblioteca read-linesync
const input = require ('readline-sync')

// variáveis
let litros, distancia, consumo

console.clear()
console.log("Calculo do consumo de combustivel")

// entrada
distancia = Number(input.question("Digite a distancia percorrida em km: "))
litros = Number(input.question("Digite a quantidade de litros gastos pelo trajeto em km: "))

// processamento
consumo = distancia / litros

// saída
console.log(`Consumo do veículo: ${consumo.toFixed(1)} km/l`)