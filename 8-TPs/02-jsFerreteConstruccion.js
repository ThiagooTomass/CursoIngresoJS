/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;

    largo=document.getElementById("txtIdLargo").value;
    largo=parseFloat(largo);
    ancho=document.getElementById("txtIdAncho").value;
    ancho=parseFloat(ancho);

    perimetro=((ancho + largo)*2)*3;

    alert("Se necesitan comprar "+perimetro+" metros de alambre")

}
function Circulo () 
{
	let perimetro;
    let radio;

    radio = document.getElementById("txtIdRadio").value;
    radio=parseFloat();
    perimetro = 2 * 3.14 * radio * 3;

    alert("Se necesitan comprar "+perimetro+" metros de alambre");
}
function Materiales () 
{
    let largo
    let ancho
    let area

	largo=document.getElementById("txtIdLargo").value;
    largo=parseFloat(largo);
    ancho=document.getElementById("txtIdAncho").value;
    ancho=parseFloat(ancho);

    area=largo*ancho;
        
    alert("Para un contrapiso de "+area+"m2 se necesita comprar "+(area*2)+" bolsas de cemento y "+(area*3)+" bolsas de cal")

}