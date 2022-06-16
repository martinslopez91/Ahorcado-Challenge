var capturarLetra = document.querySelector("#capturar");
var palabras = ["elefante","tortuga","auto","camioneta","pared","perro","gato"];
var randomPalabras= palabras.Mathrandom()

capturarLetra.addEventListener("input", function(){
	var letraCapturada = this.value;
	console.log(letraCapturada);


})

/*var filtrarTabla = document.querySelector("#filtrar")

filtrarTabla.addEventListener("input", function(){
	
	compararLetra(filtrarTabla);


})

function compararLetra(input){
	console.log(input.value);
	


}*/