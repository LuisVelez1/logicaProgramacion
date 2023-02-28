let precio = parseFloat(prompt("Ingrese el precio del producto"));
let compra = prompt("Ingrese con que metodo pagó el producto, contado o credito");
 if (compra == "contado") {
     console.log("Tiene que pagar", precio, "pesos");
 }else if (compra == "credito"){
     let credito = precio * 0.25;
     let Credito = precio + credito;
     let Meses = parseInt (prompt("a cuantos meses lo va a pagar?"));
     let meses = Credito / Meses;
     console.log("Tiene que pagar", meses, "por", Meses, "meses");
    
 }

 