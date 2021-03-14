//Object.preventExtensions- impede a adicao de novos atributos a um objeto
const produto = Object.preventExtensions({
    nome:'Qualquer', preco: 1.99, tag: 'promocao'
})

console.log('Extensivel:', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha branca escolar'; //nao vai funcionar
delete produto.tag;
console.log(produto);


//Objetc.seal - permite alterar elementos do objeto mas nao permite adicao nem deletar elementos do obejto
const pessoa = {nome:'Juliana', idade:35};
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva'; //NAO TERA EFEITO
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);

//Object.freeze= selado + valores constantes 
