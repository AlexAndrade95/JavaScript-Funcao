//this e bind2

function Pessoa() {
    this.idade = 0

    const self = this //uma forma de travar o this(n�o variar)
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) /*serve para comentar um trecho de uma linha ou
                                 multiplas linhas*/  
}

new Pessoa