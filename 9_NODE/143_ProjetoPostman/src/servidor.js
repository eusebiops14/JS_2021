const porta = 3003;
const express = require('express'); //express esta instalado dentro de node_modules
const app = express();
const bodyParser = require('body-parser');
const bancoDeDados = require('./bancoDeDados');


app.use(bodyParser.urlencoded({extended: true})); //PARA FUNCIONAR TEMOS QUE INSTALAR A DEPENDENCA npm i --save body-parser
//app.use(bodyParser.urlencoded({extended : true}));
/*app.get('/produtos', (req, res, next) => {
   console.log('Middleware1...');
   next();

});*/

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()); //converte objeto para JSON

});

app.get('/produtos/:id',(req,res,next) => { //parametro id permite obter um par chave valor especifico dentro do objeto
    res.send(bancoDeDados.getProduto(req.params.id));
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto); //gERA UM JSON
})

app.put('/produtos/:id', (req, res, next) => { //alterar info no servidor
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto); //gERA UM JSONrs
})

app.delete('/produtos/:id', (req,res,next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id);
    res.send(produto);
})


app.listen(porta, () => {
    console.log(`O servidor está executando na porta ${porta}.`);
});
//Apenas um processo pode usar uma porta por vez
//instalacao nodemon na pasta do projeto (nao é obrigatorio pois ja tinha instalado globalmente)
