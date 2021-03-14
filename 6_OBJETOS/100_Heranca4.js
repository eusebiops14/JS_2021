function MeuObjeto() {};
console.log(MeuObjeto.prototype);//objeto criado por funcao. meuObjeto é uma funcao

const obj1 = new MeuObjeto; //Objeto criado tradicionalmente com a funcao construtora new
const obj2 = new MeuObjeto;

console.log(obj1.__proto__ === obj2.__proto__);
console.log(MeuObjeto.prototype === obj1.__proto__); //Note que 'MeuObjeto()' é uma funcao definida na linha 1
/* Ou seja, quando criamos um objetoo a partir da funcao construtora New, o
prototipo daquele objeto criado aponta para o atributo .prototype
('nomeDaFuncao.prototype') da funcao*/

/* Lembre-se : funcao tem .prototype e Object tem .__proto__ */

MeuObjeto.prototype.nome = 'Anonimo';
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia! Meu nome é ${this.nome}!`);
}

obj1.falar();

obj2.nome = 'Eusebio';
obj2.falar();

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype;
obj3.nome = 'Obj3';
obj3.falar();

/* ******Resumo da aula: *****

*/

console.log((new MeuObjeto).__proto__ = MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);//verdadeiro-
/* MeuObjeto é uma funcao */
console.log(Object.prototype.__proto__ === null); //true

/* Criei uma funcao MeuObjeto() {};
A funcao MeuObjeto possui um atributo chamado prototype que aponta para MeuObjeto.Prototype (que é um obejeto mesmo)
Entao, como MeuObjeto.prototype é do tipo objeto, ele possui um prototype tambem que aponta para Object.__proto__

*/