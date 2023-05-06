// verificar edad

alert ("Ingrese sus datos")
let nom = prompt("Ingrese sus nombres").toUpperCase();
let ape = prompt( "ingrese sus apellidos").toUpperCase();
let dia = parseInt(prompt("Ingrese Día"));
let mes = parseInt(prompt( "ingrese Mes"));
let año = parseInt(prompt("ingrese Año"));
let continuar = true
let edad = (dia+mes+año)
if ((año) < 2005){
    continuar=false
    alert(" Hola " + nom +" "+ ape)
    alert("Su fecha es: "+ dia +"/" + mes + "/"+ año);
    alert ("Puede ingresar al sitio")
}else {
    while (continuar){
    alert("No puede ingresar, debe ser mayor de edad")
    continuar= confirm ("salir")
    continuar=false
console.log("El año ingresado es: " + edad);
    
}
}
console.log( dia,mes,año)
console.log(nom,ape)





