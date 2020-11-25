const mult = (x, y) => x * y
const retornoMult = (a, b, operacao = mult) => console.log(operacao(a, b))
retornoMult(7,8)