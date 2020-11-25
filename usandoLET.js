// Ecopo global e local com let
//1-Escopo global
let nome = "global"
{
    let nome = "local"
    console.log('escopo=', nome)
}
console.log('escopo=', nome)