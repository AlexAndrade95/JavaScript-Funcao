/* Funcoes Callback = "Chamar de volta" */

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) //para cada elemento ele chama o callback(chamar de volta)
/* 1. Mercedes
   2. Audi 
   3. BMW
*/

fabricantes.forEach(fabricante => console.log(fabricante)) //Arrow Function
/* Mercedes
   Audi
   BMW
 */