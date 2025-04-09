/**
 * Estrutura de dados array
 * @author Erica Viana
 */

//                 [0]      [1]      [2]      [3]      [4]
let alunosEM1 = ["Tania", "Pedro", "Maria", "Joao", "Viviane"]

console.clear()

console.log(typeof(alunosEM1))

// O comando abaixo exibe os elementos do vetor
console.log(alunosEM1)

// O comando abaixo identifica o número de elementos de um vetor
console.log(alunosEM1.length)

// O comando abaixo exibe o índice do array associado ao elemento
console.table(alunosEM1)

// O comando abaixo exibe o elemento do índice selecionado
console.log(alunosEM1[2])

// O comando abaixo adiciona um elemento ao vetor
alunosEM1.push("Jorge")

// O comando abaixo exibe os elementos do vetor
console.table(alunosEM1)

// Para alterar um elemento do vetor, é necessário usar o índice
alunosEM1[3] = "Joaozinho"

// O comando abaixo exibe os elementos do vetor
console.table(alunosEM1)

// O comando abaixo remove o último elemento do vetor
alunosEM1.pop()

// O comando abaixo exibe os elementos do vetor
console.table(alunosEM1)

// Removendo um elemento específico sem alterar o índice, neste caso é necessário fornecer o índice a ser excluído
delete alunosEM1[1]

// O comando abaixo exibe os elementos do vetor
console.table(alunosEM1)

console.clear()

let notas = [3, 8, 5, 9, 2]
console.log(notas)
console.table(notas)

//laço for
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}
//forEach
notas.forEach((notas) => {
    console.log(notas)
})
//map()
//Exemplo 1: Adicionar 1 ponto as notas dos alunos
let notasAtualizadas = notas.map((na) => {
    return na + 1
})

console.log(notas)
console.log(notasAtualizadas)

//Exemplo 2: Conversão do sistema de pontos para letras
/*
  NA - Não Atendeu (nota < 5)
  PA - Parciamente Atendido (nota entre 5 e 7)
   A - Atendeu (nota > 7)
*/
let notasConvertidas = notas.map((nc) => {
    if (nc < 5) {
        return("NA")
    } else if (nc > 7) {
        return("A")
    } else {
        return("PA")
    }
})
console.log(notas)
console.log(notasConvertidas)















// Um array também pode ser criado como um objeto
console.clear()
let alunosEM2 = new Array("Tony", "Peter", "Thor", "Natasha")
console.log(alunosEM2)
console.table(alunosEM2)
alunosEM2.push("Steve")
console.log(alunosEM2)
console.table(alunosEM2)

// Estrutura de dados
let alunosEM3 = [
    {
        nome: "Bruce",
        idade: 43,
        bolsista: false
    },
    {
        nome: "Clark",
        idade: 45,
        bolsista: false
    },
    {
        nome: "Diana",
        idade: 36,
        bolsista: false
    },
    {
        nome: "Barry",
        idade: 23,
        bolsista: true
    }
]
console.log(alunosEM3)
console.table(alunosEM3)

// Uso de filtros
console.log(alunosEM3.filter((b) => {
    return b.bolsista === true
}))

console.log(alunosEM3.filter((i) => {
    return i.idade > 40
}))

// Ordenar dados
alunosEM3.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})
console.table(alunosEM3)

alunosEM3.sort((x, y) => {
    return (x.idade - y.idade)
})
console.table(alunosEM3)

// Dica: Criar uma cópia do array original para exibição
let alunosOrdenados = [...alunosEM3]
alunosOrdenados.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})
console.clear()
console.table(alunosOrdenados)

//Reduzindo um array 
let somaIdades = alunosEM3.reduce((ac, aluno) => {
    return ac + aluno.idade
}, 0)
console.log(somaIdades)
console.log(`Media: ${somaIdades / alunosEM3.length}`)