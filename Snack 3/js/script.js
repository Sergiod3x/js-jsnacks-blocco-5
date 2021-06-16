// Snack 3 - 1^ parte.
// Creare un array con tre numeri, calcolare la media di questi tre numeri.
var output=document.getElementById("out");
var total = 0;
var arrayTre = [5,6,9]


 console.log(arrayTre);

for ( var i = 0 ; i < arrayTre.length; i++){
    total += arrayTre[i];
}

total = total / arrayTre.length;

console.log(total);


 var basketPlayers = [
     { nome : "Simone",
       cognome : "Carli",
       anno : "1989",
       score : 32
    },
    {
    nome : "Filippo",
    cognome : "Rossi",
    anno : "1989",
    score : 40
    },
    {
    nome : "Jhon",
    cognome : "Simoni",
    anno : "1990",
    score : 18
    }
]


console.log(basketPlayers);

for ( var i = 0 ; i< basketPlayers.length; i++){
    total += basketPlayers[i].score;
}


total = total / basketPlayers.length;

console.log(total);

for ( var i = 0 ; i< basketPlayers.length; i++){
    output.innerHTML += "Name: " +  basketPlayers[i].nome + " " + "Surname: "+  basketPlayers[i].cognome + " Anno di Nascita: " +  basketPlayers[i].anno + " Score : "+  basketPlayers[i].score + "<br>";
}

    
    
