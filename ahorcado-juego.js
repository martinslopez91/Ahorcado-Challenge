var palabras = ["HTML","JAVASCRIPT","CSS","ALURA","ORACLE"];
var tablero = document.getElementById("tablero").getContext("2d");
var teclaDetectada = document.querySelector(".teclaPresionada");
var teclaPresionada;
var separarLetra = palabrasRandom(palabras);
console.log(separarLetra);
var letraSeparada = separarLetra.split("");


teclaDetectada.addEventListener("keydown", function(event){
    var teclaPresionada = event.key.toUpperCase();
    console.log(teclaPresionada);
      
})

function dibujarCanvas(letra){
    tablero.font = "90px serif";
    tablero.fillText(letra,300,420,500);
}

function palabrasRandom(array){
    return array[Math.floor(Math.random() * array.length)];   
}

function dibujarLetraCanvas(){

}
/*
function onKeyDownHandler(evt) {
    var e = evt || window.event;        //Obtenemos el event
    var key = evt.keyCode || evt.which; //Tecla presionada
     console.log("key pressed: " + key);
 }
*/

