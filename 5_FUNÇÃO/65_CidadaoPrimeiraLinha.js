// Função em JS é  first class object / higher order function
//Em JS funcao pode ser tratada como um dado também.
//JS é uma linguagem multiparadigma, ou seja, é possivel aplicar
//paradigma procedural, OO ou funcional

//criar de forma literal - se não retornar nada (nao usar return, a funcao retorna undefined)
function funcao1() {}; //bloco é obrigatório na funcao tradicional

//é possivel armazenar a funcao em uma variavel
const funcao2 = function () {};

//armazenar funcao em um array
const array = [function (a,b) {return a + b}, funcao1, funcao2];
console.log(array[0](2,3));

//armazenar funcao em um atributo dentro de um objeto
const obj = {};
obj.falar = function(){return 'ola'};
console.log(obj.falar());

//Passar funcao como parametro para outra funcao
function run(fun) {
    fun();
}

run(function () {console.log('Executando...')});

//Uma funcao pode retornar ou conter uma outra funcao
function soma(a,b) {
    return function (c) {
        console.log(a+b+c);
    }
}

//Parametros e retornos sao opcionais.
