const soma = function (x,y) {
    return x + y ;
}

const imprimirResultado = function (a,b, operacao = soma){ //note que os parametros nao tem tipo definido- diferenca com c por exemplo
    console.log(operacao(a,b));
}

imprimirResultado(3,4);
