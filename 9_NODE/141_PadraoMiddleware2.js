const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid1';
    next();
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'mid2';
}

const passo3 = contexto => contexto.valor3 = 'mid3';

const exec = (contexto, ...middlewares) => {
    const execPasso = indice => 
    {
        middlewares && indice < middlewares.length && middlewares[indice](contexto, () => execPasso(indice + 1))
    }
    
    execPasso(0);
}

const contexto = {};
exec(contexto,passo1,passo3,passo2);//nao executa passo2 pois passo3 nao tem next
console.log(contexto);

