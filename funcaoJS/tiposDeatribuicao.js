// Atribuindo em uma variavel
const fun1 = function () { }

// Atribuindo em um array
const array = [function (a, b) { return a - b }, "oi", 13]

// Amazenando em um atributo de objeto
const objeto = {}
objeto.falar = function () { return "Estou falando!" }

// Passar funcao como parametro
function run(func) {
    func()
}

// Uma funcao pode retornar / conter uma funcao
function soma(a, b) {
    return function (c) {
        return console.log("Resultado =", a + b + c)
    }
}
soma(5, 5)(5)



