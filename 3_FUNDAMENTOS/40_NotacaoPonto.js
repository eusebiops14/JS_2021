const obj1 = {};
obj1.nome = 'bola';
//obj1['nome'] = 'bola2'
obj1.valor = 2;
console.log(obj1.nome);

function Obj(nome) {
    this.nome =nome ; //this torna o parametro nome inserido na funcao, um objeto publico
}

const obj2 = new Obj('cadeira');

const obj3 = new Obj('mesa');

console.log(obj2.nome);
console.log(obj3.nome);
