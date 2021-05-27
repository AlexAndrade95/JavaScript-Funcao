//ArrowFunction (Versao ES2015)

//padrao
let dobro = function (a) {
    return 2 * a
}

//arrow function
dobro = (a) => {
    return 2 * a 
}

//arrow function
dobro = a => 2 * a // return implicito - FUNCAO ARROW - funcoes de uma unica linha
console.log(dobro(Math.PI))
// 6.2831...//dobro do PI

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' //FUNCAO ARROW
ola = _ => 'Olá' // possui um param - FUNCAO ARROW 
console.log(ola())
// Ola