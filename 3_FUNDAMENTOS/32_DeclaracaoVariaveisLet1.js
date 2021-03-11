var numero = 1; //escopo mais abrangente (var tem escopo global e de funcao apenas)

{
    //*let tem um escopo válido dentro apenas do mesmo bloco de código, oposto de var
    let numero = 2; //escopo mais restrito (dentro do bloco)
    //* variaveis definidas com let tem escopo global, de funcao e de bloco
    console.log('Valor de numero dentro do bloco = ', numero);

}

console.log('Valor de numero fora do bloco = ', numero);