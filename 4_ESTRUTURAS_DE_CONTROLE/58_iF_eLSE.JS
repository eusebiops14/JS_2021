Number.prototype.entre = function(inicio,fim) {
    return this >= inicio && this <= fim;
}

const imprimirResultado = function (nota) {
    if (nota.entre(9,10)) {
        console.log('EXCELENTE');
    }else if (nota.entre(7,8.99)) {
        console.log('MUITO BOM');
    }else {
        console.log("Deveria ter estudado mais");
    }
}

imprimirResultado(8);
imprimirResultado(9.8);