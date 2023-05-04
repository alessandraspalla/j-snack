//Il software deve chiedere per 5 volte all’utente di inserire un numero. 
//Il programma stampa la somma di tutti i numeri inseriti.

// Definisco l'array da riempire con gli input
const numeriUtente = [];

// Collego il contenitore html
const container = document.getElementById('container');

// Definisco variabile somma
let somma = 0;

// Definisco ciclo for
for (let i = 1; i <= 5; i++) {
    let inputNumeri = parseInt(prompt('Inserisci un numero'));
    numeriUtente.push(inputNumeri);

    somma = somma + inputNumeri;
    
}

console.log(somma);

// Output
container.innerHTML = `La somma dei numeri che hai inserito è ${somma}`;


