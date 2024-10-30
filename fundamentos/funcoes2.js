/**
 * Estudo das funções com parâmetros e retorno
 * @author Gustavo Nunes Bispo
 */

function somar(a, b) {
    return (console.log(a + b))
}

somar(5, 2)

const somarA = function(a, b) {
    return (console.log(a + b))
}

somarA(5, 3)

const somarAF = (a, b) => {
    return (console.log(a + b))
}

somarAF(2, 2)

const somarAFS = (a, b) => console.log(a + b)
//retorno implicito
somarAFS(3, 9)