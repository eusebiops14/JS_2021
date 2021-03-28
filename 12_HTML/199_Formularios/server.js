/*
--Para funcionar, nao se esqueça de iniciar o servidor no backend- no terminal
entre na pasta onde esta o arquivo server.js e rode 'node server.js' para iniciar o servidor.
--Para nao precisar reiniciar o servidor quando alterarmos o arquivo server, basta instalar o nodemon
pelo termina: 'npm install --save-dev nodemon'
--Para usar o nodemon basta digitar 'nodemon' e ele iniciara o arquivo main (consulte no arquivo package.json)
da pasta
*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.post('/usuarios', (req,resp) => {
    console.log(req.body);
    resp.send('<h1>Parabens. Usuario Incluído</h1>');

})

app.post('/usuarios/:id', (req,resp) => {
    console.log(req.params.id)
    console.log(req.body);
    resp.send('<h1>Parabens. Usuario alterado com sucesso</h1>');

})

app.listen(3003);