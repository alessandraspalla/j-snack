// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà:
// marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
// Infine stampa separatamente i 3 array.

const auto = [
    {
       "marca":"opel", 
       "modello":"corsa",
       "alimentazione":"diesel",
    },
    {
        "marca":"opel", 
        "modello":"agila",
        "alimentazione":"benzina",
    },
    {
        "marca":"fiat", 
        "modello":"panda",
        "alimentazione":"gpl",
    },
    {
        "marca":"fiat", 
        "modello":"500",
        "alimentazione":"elettrico",
    },
    {
        "marca":"jeep", 
        "modello":"renegade",
        "alimentazione":"diesel",
    },
    {
        "marca":"nissan", 
        "modello":"juke",
        "alimentazione":"benzina",
    },
    {
        "marca":"mercedes", 
        "modello":"x5",
        "alimentazione":"elettrico",
    },
    {
        "marca":"audi", 
        "modello":"a3",
        "alimentazione":"benzina",
    },
    {
        "marca":"fiat", 
        "modello":"panda",
        "alimentazione":"metano",
    },
    {
        "marca":"opel", 
        "modello":"corsa",
        "alimentazione":"gpl",
    }
];

const benzinaAuto = auto.filter(auto => auto.alimentazione === "benzina");
console.log(benzinaAuto);

const dieselAuto = auto.filter(auto => auto.alimentazione === "diesel");
console.log(dieselAuto);

const altreAuto = auto.filter(auto => (auto.alimentazione !== "diesel") && (auto.alimentazione !== "benzina"));
console.log(altreAuto);