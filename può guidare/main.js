// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.

// Crea quindi un nuovo array inserendo, 
//per ogni persona, una frase con il nome e cognome
// e l’indicazione se può guidare, in base all’età.
let person;
const persone = [
    {
        'nome':'giulia',
        'cognome':'bruno',
        'eta':27,
    },
    {
        'nome':'alessandra',
        'cognome':'spalla',
        'eta':20,
    },
    {
        'nome':'mario',
        'cognome':'rossi',
        'eta':16,
    },
    {
        'nome':'martina',
        'cognome':'esposito',
        'eta':18,
    }
];

const newPerson = persone.map(element => {
    if (element.eta >= 18) {
        return element.nome + ' ' + element.cognome + ' ' + 'può guidare'
    } else {
        return element.nome + ' ' + element.cognome + ' ' + 'NON può guidare'
    }
});

console.log(newPerson);