// Snack 4 -

var output=document.getElementById("out");


 var studentList = [
    { nome : "Simone",
      cognome : "Carli",
      age : "42",
      descrizione : ""
   },
   {
   nome : "Filippo",
   cognome : "Rossi",
   age : "21",
   descrizione : ""
   },
   {
   nome : "Jhon",
   cognome : "Simoni",
   age : "30",
   descrizione : ""
   }
]


console.log(studentList);

for ( var i = 0 ; i< studentList.length; i++){
   studentList[i].descrizione = prompt("Inserisci una descrizione per lo studente " + studentList[i].nome + " " + studentList[i].cognome) ;
}


console.log(studentList);

for ( var i = 0 ; i< studentList.length; i++){
    output.innerHTML += "Name: " +  studentList[i].nome + " " + "      Surname: "+  studentList[i].cognome + " Anno di Nascita: " +  studentList[i].age + " Descrizione : "+  studentList[i].descrizione + "<br>";
 }
