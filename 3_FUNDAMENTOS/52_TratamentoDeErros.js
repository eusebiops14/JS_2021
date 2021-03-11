function tratarErroELancar(erro) {
    throw new Error('Ocorreu um erro !');
}

function imprimirNomeGritado(obj) {
    try {
    console.log(obj.name.toUpperCase() + "!!!!");
    } catch(e) {
        tratarErroELancar(e);
    } finally { //executa de qualquer maneira 
        console.log('Concluido!')
    }
}

const obj = {nome: 'Roberto'};
imprimirNomeGritado(obj);