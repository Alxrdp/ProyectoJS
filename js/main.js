// verificar edad


function verificarEntero(variable) {
    let valor;
    let cont = true;
  
    do {
      valor = parseInt(prompt(`Ingrese ${variable}`));
      if (Number.isInteger(valor)) {
        console.log(`La variable ${variable} es entera`);
        cont = false;
      } else {
        alert(`Ingrese números para ${variable}`);
      }
    } while (cont);
  
    return valor;
  }
  
  alert ("Ingrese su fecha de nacimiento")
  let dia = verificarEntero('Día');
  let mes = verificarEntero('Mes');
  let año = verificarEntero('Año');
  
  
  
  console.log(`Día: ${dia}`);
  console.log(`Mes: ${mes}`);
  console.log(`Año: ${año}`);

  let continuarVerificar = true
  let edad = (dia+mes+año)
  if ((año) < 2005){
      continuarVerificar=false
      //alert(" Hola " + nom +" "+ ape)
      alert("Su fecha es: "+ dia +"/" + mes + "/"+ año);
      alert ("Puede ingresar al sitio")
  }else {
      while (continuarVerificar){
      alert("No puede ingresar, debe ser mayor de edad")
      continuarVerificar= confirm ("salir")
      continuarVerificar=false
      continuar=false
  
  console.log("El año ingresado es: " + edad);
      
  }
  }
  console.log( dia,mes,año)
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
    const nombre = prompt("Ingrese su nombre").toUpperCase()
    const apellido = prompt("Ingrese sus apellidos").toUpperCase()
    const telefono = verificarEntero ('telefono')
    const email = prompt("Ingrese su email").toUpperCase() 
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
        const telefono = verificarEntero ('telefono') 
        const email = prompt("Ingrese su email").toUpperCase()
        datos[index].nombre = nombre
        datos[index].apellido = apellido
        datos[index].telefono = telefono
        datos[index].email = email
        alert("Datos actualizados")
        alert("Nuevos datos: Nombre "+ nombre +" "+apellido +" Telefono "+ telefono + " Email "+email )
    }else{
        alert("No se pudo actualizar el dato por que no existe")
    }
    continuar = confirm("Quiere actualizar otro dato?")
}
console.log(datos)