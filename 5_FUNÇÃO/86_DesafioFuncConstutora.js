/* 
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('Joao');
p1.falar();

*/

//transformando a classe acima em uma funcao constutora

/* Funcao construtora normal*/
function ConstruirPessoa(nome) {
    
    this.nome = nome;
    //metodo falar

    this.metodoFalar = function() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const ObjPessoa = new ConstruirPessoa('Eusebio');
ObjPessoa.metodoFalar();


/* Funcao construtora com arrow function*/

function ConstruirPessoa2(nome2) {
    this.nome2 = nome2;

    this.metodoFalar2 = () => {
        console.log(`Meu nome é ${this.nome2}`);
    }
}

const ObjPessoa2 = new ConstruirPessoa2('SOUZA');
ObjPessoa2.metodoFalar2();
