const pessoa = {
    saudacao: 'bom dia',
    falar() {
        console.log('Linha 4 retorna:',this.saudacao); //acessa a saudação dentro do objeto pessoa
    }

}
/* note que se removermos a palavra this da linha 4, o código
retornará uma erro informando que a saudacao nao esta definida.
Ou seja, sem o this  */

pessoa.falar(); //funciona ok
const falar = pessoa.falar; //armazenar a funcao pessoa.falar dentro de uma variavel gera um problema
falar(); /*RETORNA ERRO!!! aqui estamos chamando a funcao falar (que contem pessoa.falar), a partir do
 contexto global, mas ela está definida apenas dentro do contexto
 do objeto 'pessoa' e por isso , ao tentarmos chamar a funcao falar()
 na linha 14, o retorno será um erro dizendo que saudacao is not defined.
 */ 

 const falarDePessoa = pessoa.falar.bind(pessoa);
 /* utilizando a funcao bind dentro da funcao falar(),
 podemos travar o contexto no qual a funcao sera chamada.
 Desse modo, ao passarmos o parametro pessoa para a funcao bind
 , garantiremos que a funcao falar seja executada sempre dentro
 do contexto do objeto pessoa (definido na linha 1 a 5
*/
falarDePessoa();