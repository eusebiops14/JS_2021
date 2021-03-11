//array heterogeneo, com tipos diferentes de dado e sem tamanho fixo
const valores = [7.7, 8.9, 6.3,9.2];
console.log(valores[0], valores[1]);
console.log(valores.length);

valores.push('teste'); //mistura dentro do array

console.log(valores.pop()); //retira ultimo elemento do array
delete valores[0];
console.log(valores);

console.log(typeof valores);

