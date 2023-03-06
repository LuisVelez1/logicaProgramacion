let estrato = parseInt(prompt("Ingrese su estrato socio-economico (1 al 6)"));
let antiguedad = parseInt(prompt("Ingrese cuanta tiempo lleva en la entidad"));
let nombre = prompt("Ingrese su nombre");



if(estrato < 4 && antiguedad >= 8){
    console.log(nombre + " tiene derecho a subsidio de vivienda: true");

}
else{
    console.log(nombre + " tiene derecho a subsidio de vivienda: false");
}