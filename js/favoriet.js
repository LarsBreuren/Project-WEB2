var add = new Audio('audio/add.mp3'); //koppel mp3 file aan var

//zoek de buttons in de articles op en voor elke button gevonden doe dit;
//als er op de button gedrukt wordt toggle de class "fav" en speel geluid af.
document.querySelectorAll("article button").forEach(function(element, index, list){
    element.addEventListener("click", function(){
        element.classList.toggle('fav');
        document.querySelector("span").classList.toggle("blink");
        add.play();
    });
});
