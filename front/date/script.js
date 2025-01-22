/**
 * Data Automática
 * @author Gustavo Nunes Bispo
 */

function obterData() {
    const data = new Date()
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
        return data.toLocaleDateString('pt-br', options)
}

/// A linha abaixo insere na tag <p> identificada como "dataAtual" o retorno da função
document.getElementById('dataAtual').innerHTML = obterData()