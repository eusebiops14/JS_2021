console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);
/*String, array e object sao funcoes e por isso possuem o atributo .prototype */
String.prototype.reverse = function () {
    return this.split('').reverse().join('');
}
console.log('1 2 3'.reverse());

Array.prototype.first = function () {
    return this[0];
}

console.log([1,2,3,4].first());