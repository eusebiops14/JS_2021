const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

/*
for (let i in notas) { //percorre todos os indices 'i' dentro do array notas
    console.log(i, notas[i]);
} 
*/

const pessoa = {
    nome: 'ana',
    sobrenome:'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}

//console.log(atributo);