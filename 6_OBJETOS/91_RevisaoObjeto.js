const produto = new Object;
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Generica';
produto.preco = 220;

console.log(produto);
delete produto.preco;


const carro = {
    modelo: 'A4',
    valor:89000,
    proprietario: {
        nome:'Raul',
        idade:56
    },
    calcularValorSeguro: function() {

    }
}

carro.proprietario.idade = 56;
console.log(carro);
delete carro.proprietario.idade;
console.log(carro.condutores);