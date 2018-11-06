window.addEventListener("scroll", function () {
    var html = document.documentElement;
    var top = (window.pageYOffset || html.scrollTop)  - (html.clientTop || 0);
    var radians = top / 80 % (360 * Math.PI / 180);

    document.getElementById("turn").style.transform = "rotate(" + radians + "rad)";
});
//Deel van de code van:
//https://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll
