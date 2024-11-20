/**
 * Fundamentos da POO
 * Abstração, Herança e Polimorfismo
 * @author Gustavo Nunes Bispo
 * _____________________________
 * Meu Método de Comentar:
 * * = Observações;
 * ? = Dúvida para perquisar/perguntar;
 * ! = Modificar/Adicionar código;
 * TODO: = Introdução, Resumo e/ou Conclusão do tema;
*/

console.clear()

// Criando a classe modelo:
class Bloco { // *Só C.M devem começar com letra maiúscula.
    // Atributos:
    constructor(textura, resistencia) {
        this.textura = textura // *"this" significa que as classes são desse obj (Bloco).
        this.resistencia = resistencia
    }

    // Métodos
    criarBloco() {
        console.log("-------------------------------")
        console.log("┌─┐")
        console.log("└─┘")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resistência: ${this.resistencia}`)
    }

    construir() {
        console.log(`Bloco de ${this.textura} colocado`)
    }

    minerar() {
        console.log("□ □ □ □ Recursos obtidos!")
    }
}

// Herança

class Enxada extends Bloco { // *"extends" cria a Enxada, porém pode usar alguns atributos do "Blocos".
    // Atributos:
    constructor(textura, resistencia, conquista) { //? São só os que quero herdar 
        super(textura, resistencia) // *Herdou do "Blocos". 
        this.conquista = conquista // *Criou uma nova.
    }

    // Métodos
    criarEnxada() {
        console.log("-------------------------------")
        console.log("-_")
        console.log("/")
        console.log(`Enxada de ${this.textura}`)
        console.log(`Resistência: ${this.resistencia}`)
    }
    arar() {
        console.log("._._._._.")
        if (this.conquista == true) {
            console.log("☀ Conquista obtida!")
        }
    }

    // Polimorfismo 
    minerar() { // *Mudança de comportamento de um método já existente (Usar o mesmo nome em ambos)
        console.log("✞ Dano atribuído!")
    }
}

/*** Mundo ***/
console.log(" _____ _____ _____ _____ _____ _____ _____ _____ _____ ")
console.log("|     |     |   | |   __|     | __  |  _  |   __|_   _|")
console.log("| | | |-   -| | | |   __|   --|    -|     |   __| | |  ")
console.log("|_|_|_|_____|_|___|_____|_____|__|__|__|__|__|    |_|  ")

console.log("")

// Instanciando (criando) um objeto
const bloco1 = new Bloco("terra", 1) // ? Com um objeto desses eu posso criar uma estrutura de condição com base nesses atributos?
bloco1.criarBloco()

const bloco2 = new Bloco("madeira", 2)
bloco2.criarBloco()
bloco2.construir()

const bloco3 = new Bloco("pedra", 5)
bloco3.criarBloco()
bloco3.minerar()

const enxada1 = new Enxada("madeira", 2, false)
enxada1.criarEnxada()
enxada1.arar()

const enxada2 = new Enxada("ferro", 5, true)
enxada2.criarEnxada()
enxada2.arar()

const enxada3 = new Enxada("diamante", 10, false)
enxada3.criarEnxada()
enxada3.minerar()