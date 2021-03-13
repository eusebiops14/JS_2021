function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
    nome: 'note',
    preco: 4589,
    desc: 0.15,
    getPreco //ja cria um atributo get preco e o associa a funcao definida na linha 1
}

console.log(getPreco());//retorna um NaN pois preco nao esta definido no contexto global
globalThis.preco = 20;
globalThis.desc = 0.1;
console.log(getPreco()); //agora funciona

console.log(getPreco());
console.log(produto.getPreco()); //chamar o getPreco a partir de um onbjeto


const carro = {preco: 10000, desc: 0.20}
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

//diferenca entre call e apply esta na passagem dos parametros: primeiro parametro
//é sempre o escopo da funcao
console.log(getPreco.call(carro,0.17, '$'));
console.log(getPreco.apply(carro,[0.17,'$']));//apply exige uso de array