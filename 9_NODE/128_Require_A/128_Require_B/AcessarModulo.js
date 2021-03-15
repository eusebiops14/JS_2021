const moduloA = require('../../126_SistemaModulos_A'); //caminho relativo- respeitar Letras maisculas ou minusculas
/*A notacao "../" é usada para sair da pasta atual */
console.log(moduloA);

const saudacao = require('saudacao'); /*A pasta saudacao contem um arquivo 
chamado 'index.js'. Por padrao, essa é a pasta que a funcao require consulta para 
acessar os elementos a serem importados */
console.log(saudacao);

/*Usando modulos nativos do node- exemplo: modulo http */
const http = require('http');
http.createServer((req, res) => {
    res.write('Bom dia!');
    res.end();
}).listen(8080); //execute o codigo, va no navegador e entre em 'localhost:8080'
