/*
 Loop over de id's van 1-10
 krijg de elementen met het id
 add event listener met functie
 krijg de element van de eventlistener en voeg de toggle toe
 */
for(var i = 1; i <= 10; ++i){
    document.getElementById(i.toString()).addEventListener("click", function(event){
        (event.target || event.srcElement).classList.toggle('keuze');
    })
}
