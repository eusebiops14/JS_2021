const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }'

]

//retornar um array com apenas os preços
//1- Converter de JSON para objeto
const objCarrinho = elemento => JSON.parse(elemento);
const resultadoParcial = carrinho.map(objCarrinho);

//2- Selecionar apenas os preços
const apenasPrecos = elemento1 => elemento1.preco ; //preco é um atributo do array carrinho
const ResultadoFinal = resultadoParcial.map(apenasPrecos);

console.log(ResultadoFinal);

