document.getElementById("del").addEventListener("click", del);
document.getElementById("del2").addEventListener("click", del2);
document.getElementById("togbutton").addEventListener("click", download);


function del() {
  document.getElementById("list").className = "deleted";
}
function del2() {
  document.getElementById("list2").className = "deleted";
}

function download(){
    document.getElementById("download").classList.toggle("download");

    if( document.getElementById("download").classList.contains("download")){ //als de class nodownload is -> maak hem download.
        document.getElementById("toggle").src = "images/features/toggleon.jpg";
    }else{ //als de class niet nodownload is maak hem dan nodownload
        document.getElementById("toggle").src = "images/features/toggle.jpg"
    }
}
