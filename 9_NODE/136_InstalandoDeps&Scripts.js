/* Para essa aula, usamos o projeto 'funcionarios' da aula 130
* voltar para aquele modulo para ver o codigo no package.json
* Alterações mno package.json:
 - Na linha 5, substitui o main de 'index.js' para "130_ProjetoFuncionarios"
 -dentro de scripts (linha 6), criei o "start":"nodemon"
 - ainda dentro de scripts, criei o "dev": "nodemon"
    essas duas alterações permitem que o arquivo seja monitorado pelo nodemon
    e a medida que as alterações vao sendo feitas, a execucao do código é atualizada
-após essas alterações no arquivopackage.json, vamos no terminal, acessamos
a pasta 130_ProjetoFuncionarios e executamos o comando : 'npm install' . Esse comando,
por sua vez, instalará todos os pacotes presentes no arquivo package.json da pasta 130_ProjetoFuncionarios

-perceba que a pasta node_modules foi criada dentro do projeto funcionarios, e por isso, nao precisamos nos preocupar
em salva-la, pois ela pode ser facilmente obtida
    
-após a instalaçao dos pacotes, ainda no terminal, iniciamos nossa aplicacao com o comando: 'npm start' - note que start é o nome do script dentro do arquivo package.json
 podemos executar esse codigo(funcionarios.js), acessando o terminal, entrando na pasta 130_ProjetoFuncionarios, digitando: 'nodemon start' --- mas para funcionar
 o arquivo package.json deve estar configurado corretamente. ver pasta package.json dentro de 130_ProjetoFuncionarios
 
 DOCUMENTACAO: docs.nmpjs.com
 

*/
