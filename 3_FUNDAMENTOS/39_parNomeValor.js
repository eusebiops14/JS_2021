//par nome/valor
const saudacao = 'ola'; //contexto lexico- local fisico do codigo onde a variavel foi definido

function exec() {
    const saudacao = 'falaaa'; // contexto lexico 2
    return saudacao;
}

//objetos sao grupos aninhas de pares nome e valor
const cliente = {
    nome: 'Eusebio',
    idade: 27,
    peso: 80,
    endereco: {
        logradouro: 'Rua X',
        numero: 125
    }
}
console.log(saudacao);
console.log(exec());
console.log(cliente);