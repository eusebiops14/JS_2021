/* 
*Closure é o escopo criado quando uma funcao é declarada
*É o escopo que envolve a declaração da funcao
*Esse escopo pemite a funcao acessar e manipular variaveis externas à função

*/

const x = 'Global';

function fora() {
    const x = 'Local';
    
    function dentro() {
        return x;
    }
    
    return dentro;
}

//const minhaFuncaoDentro = dentro(); **dentro nao esta definido
//console.log(minhaFuncaoDentro());
const minhaFuncao = fora(); //funcao fora() retorna a funcao dentro
console.log(minhaFuncao());