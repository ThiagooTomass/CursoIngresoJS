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
 {/*
     let cantLamparas;
     let marcLamparas;
     let descuento;
     let precioFinal;
     let precioBruto;
     let proporcion;
     let mensaje;
     const IIBB = 10;
     const PRECIO_LAMP = 35;
 
     descuento = 0;
 
     cantLamparas = document.getElementById("txtIdCantidad").value; 
 
     cantLamparas = parseInt(cantLamparas);
 
     marcLamparas = document.getElementById("Marca").value;
 
     mensaje = "Compre: " + cantLamparas + " de la marca: " + marcLamparas + " y obtuve un ";
 
     if(cantLamparas > 5)
     {
         //Punto "A"
         descuento = 50;        
     }
     else
     {
         if(cantLamparas > 4)
         {
             if(marcLamparas == "ArgentinaLuz")
             {
                 //Punto "B"
                 descuento = 40;           
             }
             else
             {
                 descuento = 30;
             }
         }    
         else
         {
             if(cantLamparas > 3)
             {
                //Punto "C"
                 if(marcLamparas == "ArgentinaLuz" || marcLamparas == "FelipeLamparas")
                 {
                     descuento = 25;
                 }
                 else
                 {
                     descuento = 20;
                 }                
             }
             else
             {
                 if(cantLamparas > 2)
                 {
                    //Punto "D"
                     if (marcLamparas == "ArgentinaLuz")
                     {
                         descuento = 15;
                     }
                     else
                     {
                         if (marcLamparas == "FelipeLamparas")
                         {
                             descuento = 10;
                         }
                         else
                         {
                             descuento = 5;
                     
                         }
                     }    
                 }
             }
         }    
     }
     
     mensaje = mensaje + descuento + "% de descuento";
 
     alert(mensaje);
 
     precioBruto = cantLamparas * PRECIO_LAMP;
     
     proporcion = (precioBruto * descuento) / 100;
 
     precioFinal = precioBruto - proporcion;
 
     if(precioFinal>=120){
        //Punto "E"
        proporcion=precioFinal*IIBB/100;
        precioFinal=precioFinal+proporcion;
        mensaje=mensaje +" y me aplicaron "+proporcion+" de impuesto";
     }
     alert(mensaje);
     alert(precioFinal);  
     */ 

     let cantLamparas;
     let marcLamparas;
     let descuento;
     let precioFinal;
     let precioBruto;
     let proporcion;
     let mensaje;
     const IIBB = 10;
     const PRECIO_LAMP = 35;
     descuento = 0;
 
     cantLamparas = document.getElementById("txtIdCantidad").value; 

     cantLamparas = parseInt(cantLamparas);
 
     marcLamparas = document.getElementById("Marca").value;
 
     mensaje = "Compre: " + cantLamparas + " de la marca: " + marcLamparas + " y obtuve un ";

     if(cantLamparas>=6){
        //Punto "A"
        descuento = 50;  
     }
     else
     {
        switch(cantLamparas){

            case 5: 
            switch(marcLamparas){
            case "ArgentinaLuz":descuento = 40;
            break;

        default:descuento = 30;
        break;
}
break;
            
                case 4:
                    //Punto "C"
                    switch(marcLamparas){
                        case "ArgentinaLuz":
                            case "FelipeLamparas":descuento=25;
                            default:descuento=20;
                    }
                    break;    
                    case 3:
                       //Punto "D"
                       switch(marcLamparas){
                        case "ArgentinaLuz":descuento=15;
                        case "FelipeLamparas":descuento=10;
                        default:descuento=5;
                       }
                    
                    }                       
        }
     

     precioBruto = cantLamparas * PRECIO_LAMP;
     
     proporcion = (precioBruto * descuento) / 100;
 
     precioFinal = precioBruto - proporcion;
 
     if(precioFinal>=120){
        //Punto "E"
        proporcion=precioFinal*IIBB/100;
        precioFinal=precioFinal+proporcion;
        mensaje = mensaje + descuento + "% de descuento,un 10% de impuestos. El precio final es: "+precioFinal;
        alert(mensaje);
        document.getElementById("txtIdprecioDescuento").value=precioFinal;
     }else{
        mensaje = mensaje + descuento + "% de descuento, el precio final es: "+precioFinal;
        alert(mensaje);
        document.getElementById("txtIdprecioDescuento").value=precioFinal;
     }
    }

     
 
 
 
