/* npm: node package management*/

/* COMANDO NO TERMINAL USADOS NA AULA: ignorar aspas e dois pontos
    * 'npm i lodash' : instala a pasta node_modules
    * 'npm i -g nodemon' : instala o pacote nodemon de forma global
    * 'cd 9_NODE' : entra na pasta
    * 'nodemon 123_ModulosDeTerceiros.js : executa o nodemon na pasta selecionada
        obs1: para rodar a linha 7 no terminal tive que alterar a configuração de execucao de Scrips no Windons PoWerShell
    *Para que serve o nodemon: ele atualiza a execucao do código instantaneamento, quand
    alteramos alguma linha do nosso codigo dentro da pasta em que o nodemon esta rodando
*/

/*Criamos a pasta .gitignore e colocamos dentro dessa pasta
 o nome dos modulos e arquivos que nao queremos enviar 
 ao git hub */

 const _ = require('lodash')//'_' é uma referencia para loadsh muito comum
 //o modulo index.js dentro de node_modules é responsavel por
 //exportar os arquivos
 setInterval(() => console.log(_.random(1,10)), 2000);