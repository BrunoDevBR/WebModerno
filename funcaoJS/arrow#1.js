function dobro(a) {
    return 2 * a
}

const dobro2 = function (a) {
    return 2 * a
}

dobro3 = (a) => {// funcao arrow sempre eh anima por isso deve ser atribuida em uma constante
    return 2 * a
}

dobro4 = a => 2 * a// Retorno inplicito

// Dois tipos de arrow sem parametro
dobro5 = _ => 'oi'
dobro5 = () => 'oi'