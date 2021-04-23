//pari o dispari: chiedere all'utente se vuole pari o dispari 
var sceltaUtente = prompt("pari o dispari?").toLowerCase();
console.log(sceltaUtente);

if (sceltaUtente != "pari" && sceltaUtente != "dispari") {
    alert("La scelta non è giusta! devi scegliere pari o dispari!")
}

//e un numero intero compreso tra 1 e 9.

var numeroUtente = parseInt(prompt(" Inserisci un numero tra 1 e 9!"));
console.log(numeroUtente);

if (numeroUtente < 1 || numeroUtente > 9 || isNaN(numeroUtente)) {
    alert("Il numero inserito  non è valido!")
}

//Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer.

var numeroPc = Math.ceil(Math.random() * 9);
console.log(numeroPc);


//Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.

var somma = numeroUtente + numeroPc;
console.log(somma);

var risultato;

if (somma % 2 == 0) {
    risultato = "pari";
} else {
    risultato = "dispari";
}

console.log(risultato);

if (risultato === sceltaUtente) {
    console.log("Ha vinto l'utente");
} else {
    console.log("Ha vinto il PC");

}