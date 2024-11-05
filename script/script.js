"use strict"
console.clear()

/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
let word = prompt("scrivi una parola");
let palindrom = "";
isPalindrom()
*/
// while (typeof word !== "") {
//     console.log("non hai scritto una parola, ricarica la pagina e scrivi una parola")
// }

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

let parDis = prompt("scrivi pari o dispari");
while (parDis != "pari" && parDis != "dispari") {
    console.log("non hai scritto ne pari ne dispari")
    parDis = prompt("scrivi pari o dispari");
}
let numUser = parseInt(prompt("scegli un numero da 1 a 10"));
while (typeof numUser != typeof b || numUser > 10) {
    let b = 1;
    console.log("non hai scritto un numero valido")
    parDis = prompt("scegli un numero da 1 a 10");
}
let numPc = generaNumeroRandom(1, 10);
let sommaCont = (numUser + numPc) % 2;
let somma = numUser + numPc;
console.log(`hai scelto ${parDis}`);
console.log(`il tuo numero è ${numUser}`);
console.log(`il numero del computer è ${numPc}`);
console.log(`la somma dei numeri è ${somma}`);
winner();