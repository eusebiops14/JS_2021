//link : http://files.cod3r.com.br/curso-js/funcionarios.json
//instalar axios pelo terminal: npm install --save axios

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const SelecionaChineses = p => p.pais === 'China';
const SelecionaMulheres = p =>p.genero === 'F';
const SelecionaMenorSalario = (func,funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual;
}

axios.get(url).then(response => {
    const funcionarios = response.data;
    console.log(typeof funcionarios); //retorna funcionarios como um objeto
    
    //aula 131: resolução desafio
    const func = funcionarios
        .filter(SelecionaChineses)
        .filter(SelecionaMulheres)
        .reduce(SelecionaMenorSalario);
console.log('Resultado:\n',func);
    //podemos executar esse codigo, acessando o terminal, entrando na pasta 130_ProjetoFuncionarios, digitando: 'nodemon start' --- mas para funcionar
    //o arquivo package.json deve estar configurado corretamente. ver pasta package.json dentro de 130_ProjetoFuncionarios
    
    
    
    //console.log(typeof func);


})