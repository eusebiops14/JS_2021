//usando notacao literal
const obj1 = {};

//Object em JS
console.log(typeof Object, typeof new Object); //Object é uma funcao enquanto new Object é um objeto

const obj2 = new Object;
console.log(obj2);

//Funcoes construtoras
function Produto(nome, preco, desc) {
    this.nome = nome ; //publico
    /*note que nome esta visivel fora da funcao mas prco e desconto nao */
    this.getPrecoComDesconto = () => {
        return preco * (1-desc);
    }
}
const p1 = new Produto('CAneta', 7.99,0.15);
const p2 = new Produto('Note', 2998,99,0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

//Funcao Factory 
function CriarFuncionario(nome,salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase/30) * (30 - faltas);
        }
    }
}

const f1  = CriarFuncionario('j',30,1);
const f2 = CriarFuncionario('n',30,2);

console.log(f1.getSalario(),f2.getSalario());

//Obeject.create
const filha = Object.create(null);
filha.nome = 'ana';
console.log(filha);



//Uma funcao famosa que retorna Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON.info);