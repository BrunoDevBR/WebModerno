const pessoa = {
    nome: 'Bruno',
    idae: 24,
    saudacao: 'fala dev',
    falar() {
        console.log(
            this.nome +
            this.idae + 
            this.saudacao
        )
    }

}
pessoa.falar()

const falar = pessoa.falar
falar() // conflito de paradigma

const falarNovamente = pessoa.falar.bind(pessoa)// bind resolve apontando para o lugar certo
falarNovamente()