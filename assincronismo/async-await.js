/**
 * Uso do async-await (uma sintaxe moderna do JS) para lidar com assincronismo
 * @author Gustavo Nunes
 */

//Biblioteca nativa para trabalhar com arquivos
const fs = require('fs')

function criarArquivo() {
    let conteudo = "GuNunes | Exemplo de novos recursos de assincronismo no JS | async-await"
    gravarArquivo("teste.txt", conteudo)
}

async function gravarArquivo(path, conteudo) {
    try {
        await fs.promises.writeFile(path, conteudo)
        console.log("Arquivo gravado com sucesso!")
    } catch(error) {
        console.log(error)
        criarArquivo()
    }
}