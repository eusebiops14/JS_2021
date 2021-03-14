//objetivo heranca é facilitar o reuso de código
const ferrari = {
    modelo: 'F40',
    velMax: 324
};

const volvo = {
    modelo: 'V40',
    velMax: 200
};

/* Objetos possuem apenas o atributo .__proto__ enquanto funcoes possuem o atributo '.prototype'.*/
console.log(ferrari.__proto__); //a partir dessa notacao consigo acessar o objeto pai (prototipo) de ferrari
console.log(ferrari.__proto__ === Object.prototype); //verdadeiro. aponta para Object.prototype
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__); /*Aqui buscamos verificar se o Object.prototype
possui um prototipo. a resposta é não, pois o object.prototype já é o mais alto nivel, e nao herda nada de ngm */

function MeuObjeto () {};
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);
