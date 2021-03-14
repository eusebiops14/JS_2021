/* filter filtra um array criando um subarray que atende as condicoes de filtragem */
const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad ´Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false},
    
]

console.log(produtos.filter(function(p) {
    return p.preco > 2500;
}))

//outra maneira*********************************
const funcaoSeletora = ProdutoAvaliado => {
 if (ProdutoAvaliado.preco > 2500) {
     return true;
 }

}

console.log(produtos.filter(funcaoSeletora));
//*************************************************** */

const produtoEhFragil = ProdutoAvaliado => (ProdutoAvaliado.fragil == true);
const produtoEhCaro = ProdutoAvaliado => (ProdutoAvaliado.preco >= 500);

console.log(produtos.filter(produtoEhFragil).filter(produtoEhCaro));
