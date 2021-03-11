//Funcao sem retorno
function imprimirSoma(a,b) { //nao defini o tipo de dado dos parametros, pois pode ser qualquer coisa (js é fracamente tipada)
    console.log(a+b);
}

imprimirSoma(2,3);
imprimirSoma(2); //compilador aceita mas vai somar dois com um valor undefined e retorna NaN

//Funcao com retorno
function soma(a,b=0) { //b com igual a zero por padrao
    return a + b;
}

console.log(soma(1,2));
