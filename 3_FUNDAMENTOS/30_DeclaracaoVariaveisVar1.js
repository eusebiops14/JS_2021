{
    {
        {
            {
                var sera = 'sera'
            }
        }
    }
}

//*quando usamos var para declarar uma variavel, essa variavel fica visivel tambem fora do escopo (bloco de codigo)
//*onde ela foi declarada
console.log(sera); //RETORNA O VALOR 


function teste() {
    var local = 123;
//*Quando declaramos uma variavel com var, dentro de uma funcao
//*só será possivel acessar essa variavel dentro do escopo da funcao na qual ela foi definida
}

teste();
console.log(local);