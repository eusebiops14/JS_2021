const imprimirResultado = function (nota) { //switch nao aceita intervalos
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra');
            break;
        case 8 : case 7 :
            console.log('aprovado');
            break;
        case 6 : case 5 : case 4:
            console.log('Recuperação');
            break;
        case 3 : case 2 : case 1 : case 0: 
            console.log('Reprovado');
            break;
        default:
            console.log('nota inválida');
            //nao precisa de break na ultima posicao do switch
        }
}

imprimirResultado(10);
imprimirResultado(2.3);
imprimirResultado(11);