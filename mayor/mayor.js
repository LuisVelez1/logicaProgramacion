console.log("Ingrese su edad");
let edad = parseInt( prompt());
//si se considera solo un camino, el condicional es sencillo.
if (edad >= 18){
    console.log("usted es mayor de edad");
}else{
    //si usamos else, el condicional es doble.
    //else se ejeuta si la condicion del if no se cumple.
    console.log("usted no es mayor de edad");
}