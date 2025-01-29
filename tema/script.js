/**
 * Mudança de tema de cores do site
 * Uso do "mode / Local storage" para armazenamento no storage do browser
 * @author Gustavo Nunes Bispo
 */

const html = document.querySelector('html')
const tema = localStorage.getItem('mode')

if (tema === 'light') {
    light()
} 

if (tema === 'light') {
    dark()
}

function light() {
    html.style.setProperty("color-scheme", "light")
    localStorage.setItem('mode', "light")
}

function dark() {
    html.style.setProperty("color-scheme", "dark")
    localStorage.setItem('mode', "dark")
}

function auto() {
    html.style.setProperty("color-scheme", "light dark")
    localStorage.removeItem('mode')
}