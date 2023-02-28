let numero = parseFloat(prompt("Ingrese un numero"));
if (numero < 0){
    let absolut = numero * -1;
    console.log("El numero aboluto de:", numero, "es:", absolut);
}
else{
    console.log("Ya es un numero absoluto");
}