//par de chaves representa um objeto
//* um objeto é uma coleção do tipo chave-valor;

const prod1 = {};
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 5.01;
prod1['Desconto'] = 0.40;

console.log(prod1);

const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90,
    obj: {
        subitem: 'subitem'
    }
};

console.log(prod2);
