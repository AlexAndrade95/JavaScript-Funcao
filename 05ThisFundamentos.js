/* this pode Variar
this e´ o object que esta´ sendo executado naquele momento
ex.(no Browser) function f1() { console.log(this ===  window)}
                f1() */
                //true //window e´ um object global no browser e this nesse caso tbm e´

/* varia de acordo com a chamada na funcao normal 
ex.(no browser) document.getElementsByTagName('body') [0].onclick = f1
                f f1() { console.log(this === window) } 
*/
                //false //pois this varia de acordo com a forma que se chama a funcao

/* nao varia na funcao arrow
ex. (no browser) const f3 = () => console.log(this === window)
                 f3() 
*/
                 //true,forma mais reduzida(sintaxe mais redux=zida em arrow function)

/* ex.(no Browser)  document.getElementsByTagName('body') [0].onclick = f3
                 () { console.log(this === window) } 
*/
                 //true; pois em funcao arrow this nao varia!!!!!

//sera definido no contexto que a funcao foi escrita


