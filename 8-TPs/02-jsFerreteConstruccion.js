/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo=parseFloat(document.getElementById("txtIdLargo").value);
    let ancho=parseFloat(document.getElementById("txtIdAncho").value);
    let perimetro=((ancho + largo)*2)*3;

    alert("Se necesitan comprar "+perimetro+" metros de alambre")
}
function Circulo () 
{
	let perimetro;
    let radio;
    let alambre;

    radio = parseInt(document.getElementById("txtIdRadio").value);

    perimetro = 2 * 3.14 * radio * 3;

    alert("Se necesitan comprar "+perimetro+" metros de alambre");
}
function Materiales () 
{
	let largo=parseFloat(document.getElementById("txtIdLargo").value);
    let ancho=parseFloat(document.getElementById("txtIdAncho").value);

    let area=largo*ancho;

    

    alert("Para un contrapiso de "+area+"m2 se necesita comprar "+(area*2)+" bolsas de cemento y "+(area*3)+" bolsas de cal")
}