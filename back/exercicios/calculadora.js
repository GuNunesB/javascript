/**
 * Desenvolvimento de Calculadora
 * @author Gustavo Nunes Bispo
 */

const input = require('readline-sync')
const colors = require('colors')

let a, b, opcao, repetir

do {
    console.clear()
    console.log(" _____     _         _       _             ")
    console.log("|     |___| |___ _ _| |___ _| |___ ___ ___ ")
    console.log("|   --| .'| |  _| | | | .'| . | . |  _| .'|")
    console.log("|_____|__,|_|___|___|_|__,|___|___|_| |__,|")

    // Entrada dos 2 números
    a = Number(input.question("Digite o primeiro numero: "))
    b = Number(input.question("Digite o segundo numero: "))

    // Catalogo de opções
    console.log("")
    console.log("1. Somar".yellow)
    console.log("2. Subtrair".yellow)
    console.log("3. Multiplicar".yellow)
    console.log("4. Dividir".yellow)
    console.log("5. Calcular %".yellow)
    console.log("")

    // Entrada do tipo de cálculo
    opcao = Number(input.question("Escolha uma das opcoes acima: "))

    // Respostas para o cálculo escolhido
    switch (opcao) {
        case 1:
            console.log(somar(a, b))
            break
        case 2:
            console.log(subtrair(a, b))
            break
        case 3:
            console.log(multiplicar(a, b))
            break
        case 4:
            console.log(dividir(a, b))
            break
        case 5:
            console.log(percentual(a, b))
            break
        default:
            console.log("Opcao invalida, leia novamente as opcoes disponiveis e tente novamente")
            break
    }

    repetir = input.question("Deseja realisar ? (s/n)")

} while (repetir === 's');

// Funções 
function somar(a, b) {
    return console.log(`Calculo: ${a} + ${b} é igual a ${a + b}`.green)
}
function subtrair(a, b) {
    return console.log(`Calculo: ${a} - ${b} é igual a ${a - b}`.green)
}
function multiplicar(a, b) {
    return console.log(`Calculo: ${a} x ${b} é igual a ${a * b}`.green)
}
function dividir(a, b) {
    return console.log(`Calculo: ${a} : ${b} é igual a ${a / b}`.green)
}
function percentual(a, b) {
    return console.log(`${a}% de ${b} é igual a ${a * b / 100}`.green)
}