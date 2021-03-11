function soma() { //perceba que nao existe um numero fixo de parametros na funcao. podemos adicionar quantos parametro quisermos
    let soma = 0;
    for (i in arguments) {
        soma = soma + arguments[i]; //argumentos é um array interno disponivel na funcao
    }
    return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1,'teste')); //concatena- não é uma boa