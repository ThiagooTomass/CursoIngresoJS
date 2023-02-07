/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let marca;
    let cantidad;
    let descuento;
    let precio_f;
    let total_aumentado;
    let aumento;
    let asignacion;
    let total;
    	marca=document.getElementById("Marca").value;
        cantidad=document.getElementById("txtIdCantidad").value;
        cantidad=parseInt(cantidad);

    if(cantidad>=6){
        total=cantidad*35;
        descuento=total*50/100;
        precio_f=total-descuento;
        document.getElementById("txtIdprecioDescuento").value=precio_f;
        if(precio_f>=120){
        aumento=total*10/100;
        total_aumentado=aumento+total;
        alert("Usted pago "+aumento+" de IIBB, siendo "+total_aumentado+" el total")
        }
    }


    if(cantidad==5 && marca=="ArgentinaLuz"){
        total=cantidad*35;
        descuento=total*40/100;
        precio_f=total-descuento;
        document.getElementById("txtIdprecioDescuento").value=precio_f;
        if(precio_f>=120){
            aumento=total*10/100;
            total_aumentado=aumento+total;
            alert("Usted pago "+aumento+" de IIBB, siendo "+total_aumentado+" el total")
            }
            }else{
                if(cantidad==5 && marca!="ArgentinaLuz"){
                total=cantidad*35;
                descuento=total*30/100;
                precio_f=total-descuento;
                document.getElementById("txtIdprecioDescuento").value=precio_f;
                if(precio_f>=120){
                    aumento=total*10/100;
                    total_aumentado=aumento+total;
                    alert("Usted pago "+aumento+" de IIBB, siendo "+total_aumentado+" el total")
                    }
                }
            }

                    if(cantidad==4 && marca=="ArgentinaLuz"||cantidad==4 && marca=="FelipeLamparas"){
                    total=cantidad*35;
                    descuento=total*25/100;
                    precio_f=total-descuento;
                    document.getElementById("txtIdprecioDescuento").value=precio_f;
                    if(precio_f>=120){
                        aumento=total*10/100;
                        total_aumentado=aumento+total;
                        alert("Usted pago "+aumento+" de IIBB, siendo "+total_aumentado+" el total")
                        }
                        }else{
                            if(cantidad==4 && marca!="ArgentinaLuz"||cantidad==4 && marca!="FelipeLamparas"){
                            total=cantidad*35;
                            descuento=total*20/100;
                            precio_f=total-descuento;
                            document.getElementById("txtIdprecioDescuento").value=precio_f;
                            if(precio_f>=120){
                                aumento=total*10/100;
                                total_aumentado=aumento+total;
                                alert("Usted pago "+aumento+" de IIBB, siendo "+total_aumentado+" el total")
                                }
                            }       
                        }

                                    if(cantidad==3 && marca=="ArgentinaLuz"){
                                    total=cantidad*35;
                                    descuento=total*15/100;
                                    precio_f=total-descuento;
                                    document.getElementById("txtIdprecioDescuento").value=precio_f;
                                    if(precio_f>=120){
                                        aumento=total*10/100;
                                        total_aumentado=aumento+total;
                                        alert("Usted pago "+aumento+" de IIBB, siendo "+total_aumentado+" el total")
                                        }
                                    }else{
                                        if(cantidad==3 && marca=="FelipeLamparas"){
                                            total=cantidad*35;
                                            descuento=total*10/100;
                                            precio_f=total-descuento;
                                            document.getElementById("txtIdprecioDescuento").value=precio_f;
                                            if(precio_f>=120){
                                                aumento=total*10/100;
                                                total_aumentado=aumento+total;
                                                alert("Usted pago "+aumento+" de IIBB, siendo "+total_aumentado+" el total")
                                                }
                                        }else{
                                            if(cantidad==3 && marca!="ArgentinaLuz"||cantidad==3 && marca!="FelipeLamparas"){
                                                total=cantidad*35;
                                                descuento=total*5/100;
                                                precio_f=total-descuento;
                                                document.getElementById("txtIdprecioDescuento").value=precio_f;
                                                if(precio_f>=120){
                                                    aumento=total*10/100;
                                                    total_aumentado=aumento+total;
                                                    alert("Usted pago "+aumento+" de IIBB, siendo "+total_aumentado+" el total")
                                                    }
                                            }
                                        }
                                    }



}
