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
        return `${data.toLocaleDateString('pt-BR', options)} - ${data.toLocaleTimeString('pt-BR')}`
}

function atualizarData() {
    /// A linha abaixo insere na tag <p> identificada como "dataAtual" o retorno da função
    document.getElementById('dataAtual').innerHTML = obterData()
}



// Atualização de horário
setInterval(atualizarData, 1000)