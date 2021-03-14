//Cadeia de prototipos (prototype chain)
Object.prototype.attr0 = '0'
console.log(typeof Object); //FUNCTION  
/* Na linha dois, pode surgir uma duvida, pois na aula anterior, definimos que 
a opção '.prototype' só está disponivel para funcoes e nao objetos. Mas, devemos
lembrar que Object é na verdade uma funcao e nao um objeto e por isso podemos
utilizar o atributo '.prototype'. */
const avo = {attr1: 'A'};
const pai = { __proto__: avo, attr2:'B'};
const filho = {__proto__: pai, attr3:'C'};

console.log(filho.attr1); //Mesmo filho nao possuindo o atributo attr1, como ele herdou isso do avo, sera possivel aecssar
console.log(filho.attr0, filho.attr1, filho.attr2,filho.attr3);

/************************************************************** */
//EXEMPLO 2:

const carro = {
    velAtual:0,
    velMax: 200,
    aceleraMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        }else {
            this.velAtual = this.velMax;
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`;

    }

}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing- sobrescreve a velocidade maxima herdade de carro

}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` //super usado para referenciar o metodo do prototipo (linha 28)
    }

}

Object.setPrototypeOf(ferrari,carro); //metodo 'setPrototypeOf' define carro como prototipo de ferrari. Carro é um prototipo de ferrari
Object.setPrototypeOf(volvo,carro);

console.log(ferrari);

volvo.aceleraMais(100);
console.log(volvo.status);

ferrari.aceleraMais(300);
console.log(ferrari.status());