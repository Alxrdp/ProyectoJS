// verificar edad

alert ("Ingrese sus datos")
let nom = prompt("Ingrese sus nombres").toUpperCase();
let ape = prompt( "ingrese sus apellidos").toUpperCase();
let dia = parseInt(prompt("Ingrese Día"));
let mes = parseInt(prompt( "ingrese Mes"));
let año = parseInt(prompt("ingrese Año"));
let continuarVerificar = true
let edad = (dia+mes+año)
if ((año) < 2005){
    continuarVerificar=false
    alert(" Hola " + nom +" "+ ape)
    alert("Su fecha es: "+ dia +"/" + mes + "/"+ año);
    alert ("Puede ingresar al sitio")
}else {
    while (continuarVerificar){
    alert("No puede ingresar, debe ser mayor de edad")
    continuarVerificar= confirm ("salir")
    continuarVerificar=false
console.log("El año ingresado es: " + edad);
    
}
}
console.log( dia,mes,año)
console.log(nom,ape)
//formulario

class Datos {
    constructor(nombre,apellido,telefono,email){
        this.nombre = nombre
        this.apellido = apellido
        this.telefono = telefono
        this.email = email   
    }
}
const datos = []
let continuar = true

while(continuar === true){
    const nombre = prompt("ingrese su nombre").toUpperCase()
    const apellido = prompt("ingrese sus apellidos").toUpperCase()
    const telefono = parseFloat(prompt("Ingrese su telefono")) 
    const email = prompt("ingrese sus email").toUpperCase() 
    const dato = new Datos(nombre,apellido,telefono,email)
    datos.push(dato)
    continuar = confirm("Quiere continuar?")
}
console.log(datos)

continuar = confirm("Quiere actualizar algun dato")
while(continuar){
    const datoActualizar = prompt("Que dato quiere actualizar?").toUpperCase()
    const index = datos.findIndex((dato)=> dato.nombre === datoActualizar)
    if(index != -1){
        const nombre = prompt("ingrese su nombre").toUpperCase()
        const apellido = prompt("ingrese sus apellidos").toUpperCase()
        const telefono = prompt("ingrese su telefono").toUpperCase() 
        const email = parseInt(prompt("Ingrese su email"))
        datos[index].nombre = nombre
        datos[index].apellido = apellido
        datos[index].telefono = telefono
        datos[index].email = email
        alert("Datos actualizados")
        alert("Nuevos datos: " + nombre +" "+apellido + " "+ telefono + " "+email )
    }else{
        alert("No se pudo actualizar el dato por que no existe")
    }
    continuar = confirm("Quiere actualizar otro dato?")
}
console.log(datos)