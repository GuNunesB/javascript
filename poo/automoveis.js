/**
 * POO - Desafio - Automóveis
 * @author Gustavo Nunes Bispo
 */

console.clear()

class Carro {
    // Atributos
    constructor(ano, cor) {
        this.ano = ano
        this.cor = cor
    }

    // Métodos
    criarCarro() {
        console.log("___________________________")
        console.log("Carro criado! 🚗")
        console.log(`Cor: ${this.cor}`)
        console.log(`Ano: ${this.ano}`)
    }

    ligar() {
        console.log(". Carro Ligado")
        console.log(". Brrrm-brrrm 🚗🔦")
    }

    desligar() {
        console.log(". Carro Desligado")
        console.log(". Bruum... tsc 🛑🚗")
    }

    acelerar() {
        console.log(". Carro Acelerando")
        console.log(". Vrummm-vruum-vruuuum! 🚗💨")
    }
}

const fusca = new Carro(1969, "Preto")
const mustang = new Carro(1980, "Azul")

fusca.criarCarro()
fusca.ligar()
fusca.acelerar()

mustang.criarCarro()
mustang.ligar()
mustang.desligar()

class Aviao extends Carro {
    // Atributos:
    constructor(ano, cor, envergadura) {
        super(ano, cor)
        this.envergadura = envergadura
    }

    // Métodos
    criarAviao() {
        console.log("___________________________")
        console.log("Avião criado! ✈️")
        console.log(`Cor: ${this.cor}`)
        console.log(`Ano: ${this.ano}`)
        console.log(`Envergadura: ${this.envergadura}`)
    }

    aterrizar() {
        console.log(". Aterrizando, apertem os cintos!!!")
        console.log(". vuuuuuuuuuuuuuuuul 🛬")
    }

    acelerar() {
        console.log(". Levantando Voo!")
        console.log(". fiiiiiiiiiiil 🛫")
    }
}

const boeing = new Aviao(2019, "Branco", 34.3)

boeing.criarAviao()
boeing.acelerar()
boeing.aterrizar()