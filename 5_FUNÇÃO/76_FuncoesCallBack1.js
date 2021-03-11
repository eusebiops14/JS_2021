const fabricantes = ['Mercedes', 'Audi' , 'BMW'];

function imprimir (nome, indice) { //note que apenas o parametro nome (o primeiro da funcao imprimir) é extraido do array fabricantes
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);
fabricantes.forEach(fabricantes => console.log(fabricantes)); //arrow function
