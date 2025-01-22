/**
 * APP - Calculadora de Saúde
 * @author Gustavo Nunes Bispo
 */

// Bibliotecas
const input = require('readline-sync')
const colors = require('colors')

// Variáveis 
let nome, idade, peso, altura, fcm, imc, consumo

//Limpar tela
console.clear()

// Logo
console.log("██   ██ ███████  █████  ██      ████████ ██   ██      ██████  █████  ██       ██████ ██    ██ ██       █████  ████████  ██████  ██████  ".green)
console.log("██   ██ ██      ██   ██ ██         ██    ██   ██     ██      ██   ██ ██      ██      ██    ██ ██      ██   ██    ██    ██    ██ ██   ██ ".green)
console.log("███████ █████   ███████ ██         ██    ███████     ██      ███████ ██      ██      ██    ██ ██      ███████    ██    ██    ██ ██████  ".green)
console.log("██   ██ ██      ██   ██ ██         ██    ██   ██     ██      ██   ██ ██      ██      ██    ██ ██      ██   ██    ██    ██    ██ ██   ██ ".green)
console.log("██   ██ ███████ ██   ██ ███████    ██    ██   ██      ██████ ██   ██ ███████  ██████  ██████  ███████ ██   ██    ██     ██████  ██   ██ ".green)
console.log("")

// Entrada de dados
nome = input.question("Digite o nome: ")
idade = Number(input.question("Digite a idade: "))
peso = Number(input.question("Digite o peso: "))
altura = Number(input.question("Digite a altura: "))

//Processamentos
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)
consumo = peso * 0.035

//Saídas
console.log("Ficha do Aluno")
console.log("______________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`FCM: ${fcm}`)
console.log(`IMC: ${imc.toFixed(2)}`)
console.log(`CMA: ${imc.toFixed(2)}`)

//Tabela IMC

if(imc < 18.5) {
    console.log("Abaixo do peso".cyan)
}else if(imc < 25) {
    console.log("Peso ideal".green)
}else if(imc < 30) {
    console.log("Acima do Peso".yellow)
}else if(imc < 35) {
    console.log("Obesidade tipo 1".magenta)
}else if(imc < 40) {
    console.log("Obesidade tipo 2".red)
}else{
    console.log("Obesidade tipo 3".bgRed)
}

// Consumo D'Água
console.log(`Consumir po dia ${consumo.toFixed(3)} Litros d'água`)