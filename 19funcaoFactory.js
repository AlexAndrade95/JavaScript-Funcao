/* funcao factory
funcao que retorna um objeto */

//Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
//{ nome: 'Ana', sobrenome: 'Silva' }
