/* Arrow Function 2 
this em Arrow function e fixo (nao varia !!!! )
 */

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa
/* 1
   2
   3
 */