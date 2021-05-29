//Classe vs factory

//classe:
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome e ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao')
p1.falar()
//Meu nome e Joao //da problema no browser pq usa this

//funcao factory:
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome e ${nome}`) 
    }
}

const p2 = criarPessoa('Joao')
p2.falar()
//Meu nome e Joao //nao da problema no browser pq nao usa this

//factory como funcao construtora:
function Pessoa(nome)  {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome e ${this.nome}`)
    }
}
const p1 = new Pessoa('Joao')
p1.falar()
//Meu nome e Joao

