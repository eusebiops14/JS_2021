const aprovados = ['Agatha','Aldo','Daniel','Raquel'];

aprovados.forEach(function(nome,indice) {
    console.log(`${indice+1}) ${nome}`);
})

//acesso apenas ao nome
aprovados.forEach(nome => console.log(nome));

//outra alternatica
const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);