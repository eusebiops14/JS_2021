const pessoa = {
    nome: 'Rebaca',
    idade:2,
    peso: 13
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

console.log(Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave}: ${valor}`)
}));

//*
Object.defineProperty(pessoa,'dataNascimento', {
    enumerable: true,
    writable:false,
    value: '01/01/2021'
});

//Object.assign
const dest = {a:1};
const o2 = {b:2};
const o3 = {c:3 , d:4};
const obj = Object.assign(dest,o2,o3); //concatena o2 e o3 em dest
console.log(obj);