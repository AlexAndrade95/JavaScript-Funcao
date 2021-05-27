//Arrow Function 3

let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)
//true

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
//false
comparaComThis(obj)
//true

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
//false // por que arrow function no node o this esta dentro do modulo
comparaComThisArrow(module.exports)
//true

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
//false // por que a arrow function e mais forte(nao muda de contexto para o bind) 
comparaComThisArrow(module.exports)
//true