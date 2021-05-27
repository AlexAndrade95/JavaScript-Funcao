//Parametros variaveis

function soma() {
    let soma = 0
    for (i in arguments) { //arguments e´ um array, usado para adicionar parametros a´ funcao
        soma += arguments[i] //vai somar todos os parametros da funcao
    }
    return soma
}

console.log(soma())
// 0
console.log(soma(1))
// 1
console.log(soma(1.1, 2.2, 3.3))
// 6.6
console.log(soma(1.1, 2.2, "Teste"))
// 3.30000000003teste
console.log(soma('a', 'b', 'c'))
// 0abc