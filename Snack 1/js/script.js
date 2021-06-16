var palla = {
     nome : "palla",
     peso : 10
 }

 console.log(palla);

//  Snack1. - la continua.
//  Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

 var peso =  parseInt(prompt("inserisci il peso della palla"));
 palla.peso = peso;
 console.log(palla);

//  Inserire  l’oggetto palla in una array
//  var giochi = [];

 var giochi = [];

 giochi.push(palla);

 console.log(giochi);

 var newName = prompt("inserisci il nome del gioco");
 var newWeight = prompt("inserisci il peso del gioco");

//  Snack 1 - la conclusione per davvero.
//  Permettere all’utente di inserire un nuovo oggetto all’interno dell’array giochi

 giochi.push({
     nome : newName,
     peso : newWeight,
 });

 console.log(giochi);