var numero = 1;

{
    var numero = 2;
    console.log('dentro do bloco=',numero);
}

console.log('fora do escopo (bloco) =', numero);

//var só respeita o escopo de uma funcao e ignora todos os outros
//escopos (blocos de codigo)
