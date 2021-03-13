//funcao construtora e Classe necessitam do this, enquanto factory não
function Carro(VelocidadeMaxima = 200, delta = 5) {
    //atributo privado dentro da funcao
    let VelocidadeAtual = 0;
    //metodos dentro da funcao constutora
    //metodo publico
        this.acelerar = function () {
            if (VelocidadeAtual + delta <= VelocidadeMaxima) {
                VelocidadeAtual += delta;
            }else {
                VelocidadeAtual = VelocidadeMaxima;
            }
        }
    //metodo publico
        this.getVelocidadeAtual = function() {
            return VelocidadeAtual;
        }
}

const uno = new Carro;
uno.acelerar();
console.log(uno.getVelocidadeAtual());
uno.acelerar();
console.log(uno.getVelocidadeAtual());
