// Existem dois tipos de escopo de variaveis
//1-ESCOPO GLOBAL
var number = 1;
{
    //2- ESCOPO LOCAL
    var number = 2;
    console.log('local =', number)
}
 console.log('global=', number)

 /*FUGIR DE ESCOPO GLOBAIS PARA EVITAR BUGS*/
