//  Snack 2
// Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area e stampare il risultato con console.log

var triangolo = {
     base : 20,
     altezza  : 10
 }


 console.log(triangolo);

 var area = (triangolo.base * triangolo.altezza)/2

 var ipotenusa = Math.sqrt((triangolo.base*triangolo.base)+(triangolo.altezza*triangolo.altezza));

 var perimetro = triangolo.base + triangolo.altezza + ipotenusa;
 
 console.log("Ipotenusa : "+ ipotenusa);
 
 console.log("Perimetro : "+perimetro);

 console.log("Area : " + area);

