/*arrow function foi introduzida no JS com duas finalidades principais:
1- reduzir o tamanho do código,
2- garantir que o this sempre esteja associado ao contexto no qual a funcao que o contem foi escrita 
*/

let dobro = function(a) { //let garante que dobro só esta disponivel no bloco da funcao
    return 2 * a ;
}

dobro = (a) => { 
    return 2 * a;
}

dobro = a => 2 * a; //return chamado implicitamente

console.log(dobro(Math.PI));

//*************************************

let ola = function () {
    return 'ola';
}

ola = () => 'Ola'; //forma padrao
ola = _ => 'Ola' //ignora o parametro na hora de chamar a funcao
console.log(ola());
