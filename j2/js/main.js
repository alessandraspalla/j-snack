
// Crea un array vuoto. 
// Chiedi per 6 volte all’utente di inserire un numero, 
// se è dispari inseriscilo nell’array

const array = [];

// Ciclo for
for (let i = 1; i <= 6; i++) {
    // Chiedo il numero
    let numero = parseInt(prompt('Inserisi un numero'));

    // Istruzioni condizioa
    if (numero % 2 !== 0) {
       array.push(numero); 
    }

}

console.log(array);