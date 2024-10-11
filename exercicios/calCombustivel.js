/**
 * Cálculadora Álcool X Gasolina
 * @author Gustavo Nunes Bispo
 */

const input = require ('readline-sync')

let gasolina, alcool

console.clear()
console.log("Cálculadora Álcool X Gasolina")

alcool = Number(input.question("Alcool (preco por litro): "))
gasolina = Number(input.question("Gasolina (preco por litro): "))

if (alcool / gasolina < 0.7) {
    console.log("Abasteça com Álcool")
}else {
    console.log("Abasteça com Gasolina")
}