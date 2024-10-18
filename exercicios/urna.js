/**
 * Verificador de idade de uma Urna
 * @author Gustavo Nunes Bispo
*/


const input = require ('readline-sync')

//entrada
let idade

console.clear()

//processamento
idade = Number(input.question("Digite uma idade valida: "))

//saída
if(idade < 16) {
    console.log("Proibido votar")
}else if(idade > 17 && idade < 71){
    console.log("Voto obrigatório")
}else{
    console.log("Voto facultativo")
}