let notas = [5.0, 6.0, 3.5, 10, 7.7]

// Sem callback
const nostasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        nostasBaixas.push(notas[i])
    }
}

// Com Callback
const nostasBaixas2 = notas.filter((notas) => notas < 7)

console.log(nostasBaixas)
console.log(nostasBaixas2)

for (let index = 0; index < notas.length; index++) {
    return console.log(notas)
    
}