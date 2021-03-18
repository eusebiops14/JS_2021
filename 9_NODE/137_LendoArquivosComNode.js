//modulo que realiza a leitura e escrita de arquivos no node
//é o File.system ('fs'). Ele é um modulo core entao ja vem instalado

const fs = require('fs');

const caminho = __dirname + '/137_ArquivoBD.json';

//Leitura de arquivo de forma sincrona -- cuidado ao ler arquivos muito grandes
//pois esse metodo trava o event loop
//Não é uma boa estratégia

const conteudo = fs.readFileSync(caminho, 'utf-8'); //utf-8 é o encode usado no arquivo a ser lido
console.log(conteudo);

/* LEITURA ASSINCRONA(fs.readFile) - MELHOR QUE A ANTERIOR
 */
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo);
    console.log(`Resultado Leitura Assincrona\n: ${config.db.host}:${config.db.port}`); //executado antes da linha 25

})

//alternativa para ler arquivo formato JSON - forma sincrona
const config = require('./137_ArquivoBD.json'); //como o arquivo nao é extensao '.js', devemos, obrigatoriamente, colocar a extensao
console.log('Importando JSON:\n'+ config.db);

//Leitura de uma pasta com fs
fs.readdir(__dirname, (err,arquivos) => {
    console.log('\n***************\nConteudo da pasta\n' + arquivos);
})
console.log('----------------->' + __dirname); //__dirname retorna o caminho absolut para a pasta atual