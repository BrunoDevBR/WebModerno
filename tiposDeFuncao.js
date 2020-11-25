// Armazenando uma funcao em uma variavel
const showValue = function (primeiroNome, segundoNome) {
    console.log(primeiroNome + " " + segundoNome);
}

// Armazenando uma funcao arrow em uma variavel
const soma = (number1, number2) => {
    return number1 + number2;
}

// Retorno implicito
const division = (a, b) => a / b;
console.log(division(320, 5));