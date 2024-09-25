/**
 * Ficha de  um aluno de academia
 * @author Gustavo Nunes Bispo
 */

// Variáveis 
let nome
let idade
let peso
let altura
let vip
let fcm //Frequência cardíaca máxima
let imc //Idice de massa corporal

console.clear()

// Entrada de dados
nome = "Gustavo N. Bispo"
idade = 15
peso = 80
altura = 1.70
vip = true
//Processamentos
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)

//Saídas
console.log("Ficha do Aluno")
console.log("______________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`Vip: ${vip}`)
console.log(`FCM: ${fcm}`)
console.log(`IMC: ${imc.toFixed(2)}`)