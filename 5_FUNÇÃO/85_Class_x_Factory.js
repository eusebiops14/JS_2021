//tanto a classe como a factory sao usadas para criar novos obejtos

//classe
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


//funcao factory- ao contrario da funcao construtora e da classe, a funcao 
//factory não necessita do uso do .this

const criarPessoa = nome => {
    return { //o que esta entre chave é o objeto
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Eusebio');
p2.falar();