let comparaComThis = function(parametro) { //funcao tradicional
    console.log(this === parametro);
}

comparaComThis(global); //no contexto global this é estritamente igual a global- true
comparaComThis(this); //false - 

const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global); //retorna falso pois na linha 8, associamos o this com o objeto obj
comparaComThis(obj); //retorna true

let comparaComThisArrow = param => console.log(this === param); //mesma funcao da linha 1 mas usando notacao arrow
comparaComThisArrow(global); //falso, this aponta apenas para o contexto da funcao comparaComThisArrow
comparaComThisArrow(this); // na funcao arrow this === this , mas isso nem sempre acontece na funcao na forma tradicional da linha 1
comparaComThisArrow(module.exports);


comparaComThisArrow = comparaComThisArrow.bind(obj); 
/*Na linha 19 estamamos tentando forçar o this da funcao comparaComThisArrow a apontar para o obejto obj
mas isso nao terá efeito, uma vez que a funcao arrow garante que o this aponte apenas para o contexto lexico
da funcao arrow mesmo usando o bind*/

comparaComThisArrow(module.exports); //true
