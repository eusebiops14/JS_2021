for (var i = 0 ; i < 10 ; i++) {
    console.log('i = ', i);
}
//como var nao tem escopo de bloco, a variavel i estara visivel fora do bloco loop
console.log('Valor de i fora do bloco = ', i);