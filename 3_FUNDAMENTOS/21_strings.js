const escola = "coder";
console.log(escola.charAt(4));
console.log(escola.charAt(5)); //retorna vazio mas sem erro
console.log(escola.charCodeAt(3));

console.log(escola.substring(1));
console.log(escola.substring(1,3));

console.log('Escola '.concat(escola).concat("!"));

console.log(escola.replace(c, 'e'));
console.log('Ana,Maria,Pedro'.split(',')); //gera um array com 3 elementros separados por virgula
