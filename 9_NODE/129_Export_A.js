console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = null;
console.log(module.exports);

/* This e exports sao apenas rferencias para o objeto que é apontado por module.exports*/
exports = {
    nome: 'Teste'
}

//console.log(this);
//console.log(exports);
//Linhas 15 e 16 não alteram o conteudo do objeto module.exports que sera exportado
console.log(module.exports);
/*Note que apesar de this === exports === module.exports, quando
tentamos alterar os atributos a, b e c (definidos nas linhas 4 a 6),
não obteremos sucesso. Isso ocorre porque quando exportamos alguma coisa
para outro modulo, na verdade estamos exportante o module.exports apenas
e nao o this ou o exports.
Perceba que no arquivo 129_Export_B quando importamos esse modulo(129_exportA),
e mandamos imprimir */

module.exports = {exporacao: 'alterada'};