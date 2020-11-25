const x = 'global'

function fora(){
    const x = 'local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFunc = fora()
console.log(minhaFunc())