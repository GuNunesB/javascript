/**
 * Estudo das funções simples
 * @author Gustavo Nunes Bispo
 */

// Função literal
hello()
function hello() {
    console.log("Hello function")
}
console.log(typeof(hello()))

// Função atribuída (Precisam ser criados no início do código)
const hello2 = function() {
    console.log("Hello2 function")
}
hello2()

// Arrow function (forma simplificada de criação de função)
const hello3 = () => {
    console.log("Hello3 function")
}
console.log(typeof(hello3()))

// Arrow function mais simplificada (Só é possível executar uma linha de código)

const hello4 = _ =>console.log("Hello4 function")
console.log(typeof(hello4()))