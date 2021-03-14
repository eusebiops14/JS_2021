function Aula (nome, videoID){ //funcao construtora
    this.nome = nome;
    this.videoID = videoID;
}

const aula1 = new Aula('Bem vindo a aula 1 !!', 123);
/*Na linha 6, usamos o operador new para criar um objeto a partir da funcao
construtora Aula() que foi definida na linha1 */

//SIMULANDO A ACAO DO OPERADOR NEW
function novo(f, ...params) {
    const obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, params);
    return obj;
}

const aula3 = novo(Aula, 'Bem vindo',123);
console.log(aula3);