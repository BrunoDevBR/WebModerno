function Carro(velMaxima = 200, delta = 5) {
    
    let velAtual = 0

    this.acelerar =  function () {
        if (velAtual + delta <= velMaxima) {
            velAtual += delta
        }else{
            velAtual =  velMaxima
        }
    }
    this.getVelAtual = function (){
        return velAtual
    }
}

const fusca = new Carro
fusca.acelerar()
fusca.acelerar()
console.log(fusca.getVelAtual())