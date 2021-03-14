const alunos = [
    {nome: 'João', nota: 7.3 , bolsista: false},
    {nome: 'Maria', nota: 9.2 , bolsista: true},
    {nome: 'Pedro', nota: 9.8 , bolsista: false},
    {nome: 'Ana', nota:8.7 , bolsista: true},
]

//Desafio: Todos os alunos sao bolsistas ?

const ArrayBolsistas = alunos.map(e => e.bolsista);
console.log(ArrayBolsistas);

const todosBolsistas = ArrayBolsistas.reduce(function(acumulador,atual){
    return (acumulador && atual);

}) 
//usando arrow Function 
//const todosBolsistas = (acumulador, atual) => resultado && bolsista
console.log(todosBolsistas);
    

//desafio 2 : algum aluno é bolsita

const peloMenos1Bolsista = ArrayBolsistas.reduce(function(acumulador,atual){
    return (acumulador || atual);
})
console.log(peloMenos1Bolsista);