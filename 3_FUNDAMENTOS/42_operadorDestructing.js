//novo recurso do ES2015

const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        rua:'a',
        numero: 1000
    }
}

const {nome, idade} = pessoa;//retira os valores dos atributos nome e idade de dentro do objeto pessoa
console.log(nome,idade);

const {nome: n , idade: i} = pessoa;
console.log(n,i);

const {endereco: {rua , numero}} = pessoa ;
console.log(rua,numero);
