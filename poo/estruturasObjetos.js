/**
 * Estrutura de dados - Objetos
 * @author Gustavo Nunes Bispo
 * _____________________________
 * Meu Método de Comentar:
 * * = Observações;
 * ? = Dúvida para perquisar/perguntar;
 * ! = Modificar/Adicionar código;
 * TODO: = Introdução, Resumo e/ou Conclusão do tema;
*/

// Tipos primitivos: String, Number, Boolean, Function e Object;

console.clear()

const funcionario1 = {}
console.log(typeof (funcionario1))

// Adcionar dados as estruturas:

funcionario1.nome = "Gustavo"
funcionario1.cargo = "Estagiário"
funcionario1.email = "gununes280@gmail.com"
funcionario1.salario = 2250.00
funcionario1.instagram = "@gu_nunes280"

// Listar os dados da estrutura:
console.log(funcionario1)
console.log(funcionario1.cargo)

// Modificar os dados de estrutura:
funcionario1.nome = "Nunes Gustavo" // *Só declarar novamente (parecido com uma variável)
console.log(funcionario1)

// Deletar os dados de estrutura:
delete funcionario1.instagram
console.log(funcionario1)

// Testes
const funcionario2 = {
    nome: "Bruce Wayne",
    cargo: "CEO",
    email: "batman@gmail.com",
    salario: 40000.00
}

console.log(funcionario2)

const endereco1 = {
    logradouro: "Bat Caverna",
    cidade: "Gothan City",
    estado: "Nova Jersey"
}

console.log(endereco1)

const funcionario3 = {
    nome: "Alfred Pennywort",
    cargo: "Mordomo",
    email: "alfred@gmail.com",
    salario: 20000,
    ...endereco1 // *Chama objeto já criado
}

console.log(funcionario3)

const funcionario4 = {
    nome: "Dick Grayson",
    cargo: "Acrobata",
    email: "robin@gmail.com",
    salario: 2000.00,
    ...endereco1
}

console.log(funcionario4)

const funcionario5 = {
    nome: "Tony Stark",
    cargo: "Engenheiro",
    email: "ironman@gmail.com",
    salario: 375000.00,
    armadura: {
        versao: "Mark II",
        ano: 2010,
        reator: "Arc 01"
    },
    suitUp: () => {
        console.log("🤖")
    }
}

console.log(funcionario5)
console.log(funcionario5.cargo)
console.log(funcionario5.armadura.versao) // *Em caso de uma estrutura dentro de outra
funcionario5.suitUp() // *Executa a função interna