//Em node, um arquivo representa um módulo
//Tudo que voce escrever dentre de um Módulo, fica visivel APENAS dentro do modulo
//Para tornar algo dentro de um modulo visivel para fora, precisamos exportar/importar

this.ola = 'Fala pessoal';
exports.bemVindo = 'Bem vindo ao nome'; //exports é um objeto
module.exports.ateLogo = 'Até a próxima';

