const valor = 'Global';

function MinhaFuncao() {
    console.log(valor);
}

function exec() {
    const valor = 'Local';
    MinhaFuncao(); //como Minha funcao foi definida no escopo glorabl, ela vao
    //puxar o valor da constante valor da linha 1 e nao da linha 8.
}//o que manda é o local onde a funcao foi definida

exec();