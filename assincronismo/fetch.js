/**
 * Assincronismo | uso de API
 * @author Gustavo Nunes
 */

const input = require('readline-sync')
let cep, urlAPI

console.clear()
console.log("VIA CEP")
cep = input.question("Digite o CEP:")

// Consumo de API (via cep)
urlAPI = `https://viacep.com.br/ws/${cep}/json/`

// Uso de promise para acessar a API
fetch(urlAPI)
    .then((response) => {
        return response.json()
    })
    .then((dados) => {
        console.log(dados.logradouro)
        console.log(dados.bairro)
        console.log(dados.localidade)
        console.log(dados.estado)
        console.log(dados.uf)
    })
    .catch((error) => {
        console.log(error)
    })