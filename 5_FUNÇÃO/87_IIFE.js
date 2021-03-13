//IIFE- Immediately Invoked Function Expression
//FUNÇÃO AUTO INVOCADA
/*
*Nesse tipo de funcao, nao declaramos e a função e a invocamos imeditamente-
repare no '()' no final da linha 8, que ja invoca a funcao
*Esse artificio é util pois nos permite fugir do escopo global, já que tudo que foi criado
dentro da funcao, estara disponivel apenas dentro da funcao
*/


(function() {
    console.log('Será executado na hora!');
    console.log('Foge do escopo mais abrangente');
})();