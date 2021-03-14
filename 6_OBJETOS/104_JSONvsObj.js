//JSON É UM FORMATO DE DADOS GENERICO
//FORMATO TEXTUAL QUE PERMITE TROCA DE INFORMAÇOES ENTRE SISTEMAS DIFERENTES

const obj = {a:1,b:2,c:3,soma() {return a + b +c}};
console.log(JSON.stringify(obj)); //json para objeto

console.log(JSON.parse('{"a": 1.785 ,"b":"STRING","c": true, "d": {}, "e":[] }'));
//objeto para json