const sequencia = {
    _valor: 1, //convencao para variavel interna-  privado
    
    get valor()  {return this._valor++},
    
    set valor(valor) {
        if (valor > this._valor){
            this._valor = valor;
        }
    }
}

console.log(sequencia.valor , sequencia.valor) //js ja chama o metodo get ou setter internamente