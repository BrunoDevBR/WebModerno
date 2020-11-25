function area(lagura, altura) {
    const area = lagura * altura
    return area > 20 ? console.log(`Valor permitido: ${area}m2`) :
        console.log(`Valor acima do permitido: ${area}m2`)
}

area(5, 5)

// Segunda forma de escrita
function area2(lagura, altura) {
    const area2Resultado = lagura * altura
    if (area2 > 20) {
        console.log(`valor acima do permitido: ${area2Resultado}m2`)
    } else {
        return area
    }
}
area2(3, 5)

// arrow function
area3 = (lagura, altura) => {
    const area2Resultado = lagura * altura
    return area2Resultado > 20 ? "N Permitido" + ` ${area2Resultado}` :
        "Permitido" + ` ${area2Resultado}`
}

console.log(area3(2, 255))