class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome); //chama a funcao constuctor do avo (prototipo)
        this.profissao = profissao;
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho;
console.log(filho);