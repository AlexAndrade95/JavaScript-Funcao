const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
//Bom dia! //so´ funciona por conta do this
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO (orientada a objeto)
//undefined

const falarDePessoa = pessoa.falar.bind(pessoa) //para resolver o conflito anterior
falarDePessoa()
//Bom dia!