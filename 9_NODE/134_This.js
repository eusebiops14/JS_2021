/* No Node , this fora de uma funcao aponta para module.exports (ou exports).
Já dentro de uma funcao em um modulo node, this aponta para o objeto global.*/
console.log(this === global);//false
console.log(this === module);//false

console.log(this === module.exports);//true
console.log(this === exports); //true
console.log('----->',this === module.exports === exports );

function logThis() {
    console.log('Dentro de uma função:');
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global); //verdadeiro
    this.perigo = 'O parametro perigo foi inserido no objeto global'
}

console.log(logThis());
