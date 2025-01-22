/**
 * Tabuadas (1 ao 10)
 * @author Gustavo Nunes Bispo
 */

let valor

console.clear()
console.log("Tabuadas do 1 ao 10")

for (let i = 1; i < 11; i++) {
    console.log("")
    console.log(`___Tabuada do ${i}___`)
    for (let j = 1; j < 11; j++){
        console.log(`${i} x ${j} = ${i * j}`)
    }
}