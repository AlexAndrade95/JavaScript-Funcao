/* Funcao auto invocada iife 
para fugir de usar o escopo global - window no browser */

// IIFE -> Immediately Invoked Function Expression

(function() {
    console.log('Sera executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()

// Sera executado na hora!
// Foge do escopo mais abrangente!
