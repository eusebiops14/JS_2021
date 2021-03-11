function Pessoa() {
    this.idade = 0;
    const self = this; //this aqui aponta para pessoa
    setInterval(function() {
        self.idade ++ ;
        console.log(self.idade);
   }/*.bind(this)*/, 1000);
}


new Pessoa 