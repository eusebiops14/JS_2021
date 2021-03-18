const porta = 3003;
const express = require('express'); //express esta instalado dentro de node_modules
const app = express();

/*app.get('/produtos', (req, res, next) => {
   console.log('Middleware1...');
   next();

});*/

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()); //converte objeto para JSON

});

app.get('/produtos/:id',(req,res,next) => {
    res.send(bancoDeDados.getProduto(req.params.id));
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto); //gERA UM JSON
})


app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`);
});
//Apenas um processo pode usar uma porta por vez
//instalacao nodemon na pasta do projeto (nao é obrigatorio pois ja tinha instalado globalmente)
