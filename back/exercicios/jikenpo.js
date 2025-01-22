/**
 * JokenPo
 * @author Gustavo Nunes Bispo
 */

const input = require('readline-sync')
const colors = require('colors')

let user, boot, opcao

do {
    console.clear()
    console.log("___JoKenPo___")
    console.log("1. Pedra")
    console.log("2. Papel")
    console.log("3. Tesoura")

    user = Number(input.question("Digite a opção desejada: "))
    console.log("")

    switch (user) {
        case 1:
            console.log("Jogador escolheu: Pedra")
            break
        case 2:
            console.log("Jogador escolheu: Papel")
            break
        case 3:
            console.log("Jogador escolheu: Tesoura")
            break
        default:
            console.log("Opção inválida, tente novamente")
            break
    }

    boot = Math.floor(Math.random() * 3 + 1)

    switch (boot) {
        case 1:
            console.log("Computador escolheu: Pedra")
            break
        case 2:
            console.log("Computador escolheu: Papel")
            break
        case 3:
            console.log("Computador escolheu: Tesoura")
            break
    }

    if (user === boot) {
        console.log("Empate, tente novamente!".yellow)
    } else if (user === 1 && boot === 3 || user === 2 && boot === 1 || user === 3 && boot === 2) {
        console.log("Você venceu!!! Parabéns".green)
    } else {
        console.log("Você perdeu, tente novamente".red)
    }

    opcao = input.question("Deseja jogar novamente? (s/n)")

} while (opcao === 's');
