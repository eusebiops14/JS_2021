const pilotos = ['vetel','alonso','raikkonen','Massa'];
pilotos.pop() //remove ultimo elemento do array
pilotos.push('piloto1');//adiciona na ultima posicao do array
pilotos.shift(); //remove o primeiro elemento do array
pilotos.unshift('Hamilton');//adiciona na primeira posicao do array

pilotos.splice(2,0, 'botas', 'massa'); //adiciona no indice 2, sem remover ngm, botas e massa
pilotos.slice(3,1);//exclui um elementono indice 3

const algunsPilotos1 = pilotos.slice(2); //novo array
const algunsPilotos2 = pilotos.slice(1,4); //novo array do um ao 3- nao inclui o indice 4

console.log(pilotos);
