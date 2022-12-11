var x = document.getElementById("myAudio");
function playAudio() { 
    x.play(); 
  } 
  function pauseAudio() { 
    x.pause(); 
  } 

function klik() {
    document.getElementById("pobjeda").style.display = "none"
    document.getElementById("pobjeda2").style.display = "none"
  
  }


function pritisnutoDugme() {
    
document.getElementById("myAudio").innerHTML = pauseAudio()
let rezultat = Math.floor((Math.random() * 10) + 1);
document.getElementById("rezultat").innerHTML = rezultat;


let ulog = document.getElementById("ulog").value;
console.log(ulog)
let broj = document.getElementById("broj").value;
console.log(broj)

let kesh = document.getElementById("kesh").innerHTML;
  console.log(kesh)






/* AKO NISI ISPUNIO POLJA NEMA IGRE */


if (typeof broj === 'string' && broj.length === 0) {
    document.getElementById("rezultat").innerHTML =  "ERROR"
}

if (typeof ulog === 'string' && ulog.length === 0) {
    document.getElementById("rezultat").innerHTML =  "ERROR"
    
    
}

   
if (rezultat == broj) {
   
    document.getElementById("kesh").innerHTML = parseInt(kesh) + parseInt(ulog * 2) ;
    document.getElementById("pobjeda").style.display = "block"
    document.getElementById("pobjeda2").style.display = "block"
    document.getElementById("pobjeda2").innerHTML =  "Congratulations you got "+ ulog*2 + " COINS!"
    document.getElementById("pobjeda3").innerHTML =  "Last Winning Number: " + broj
    document.getElementById("myAudio").innerHTML = playAudio()
    myAudio.volume = 0.01;
    
    
} else {
    document.getElementById("kesh").innerHTML = kesh - ulog;
    
    
    
}

if (ulog <= 0) {
    document.getElementById("kesh").innerHTML = kesh;
    document.getElementById("rezultat").innerHTML =  "ERROR" 
}
if (broj <= 0) {
    document.getElementById("kesh").innerHTML = kesh;
    document.getElementById("rezultat").innerHTML =  "ERROR"
}
if (kesh <= 0) {
    document.getElementById("kesh").innerHTML = kesh;
    document.getElementById("rezultat").innerHTML =  "ERROR"
}

if (broj > 20) {
    document.getElementById("kesh").innerHTML = kesh;
    document.getElementById("rezultat").innerHTML =  "ERROR"  
}



}
