function CriarProduto(nome,preco) {
    return {
        nomeProduto: nome,
        precoProduto:preco,
        desconto: 0.1
    }
}
console.log(CriarProduto('shampoo',45));