//funcao factory retorna (no return) um obejto- a partir da chamada da funcao, criamos novos objetos
/*
const prod1= {
    nome: '...',
    preco: 45
}
*/

function CriarPessoa() {
    return {
        nome: 'Ana',
        sobrenome:'Silva'
    }
}

console.log(CriarPessoa());

