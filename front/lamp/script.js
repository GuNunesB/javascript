/**
 * Eventos de intervalo
 * @author Gustavo Nunes Bispo
 */

function piscar() {
    let ligada = false

    //Função nativa para gerar intervalos
    setInterval(() => {
        if (ligada === false) {
            document.getElementById('lamp').scr ="img/on.jpg"
        } else {
            document.getElementById('lamp').scr ="img/off.jpg"
        }
        ligada = !ligada //!NOT
    }, 1000) // (1000ms = 1s)
}