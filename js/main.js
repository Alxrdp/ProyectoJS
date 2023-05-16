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

class Cerveza {
    constructor(nombreCerveza,descripcion,precio,stock){
        this.nombreCerveza = nombreCerveza
        this.descripcion = descripcion
        this.precio = precio
        this.stock = stock
        this.fechaCreacion = new Date()
        this.fechaActulizacion
        
    }
    aumento(porcentaje){
        this.precio = this.precio + this.precio * porcentaje
        this.fechaActulizacion = new Date()
    }
}
const productos = []
let continuar = true

while(continuar === true){
    const nombreCerveza = prompt("ingrese el nombre de la cerveza").toUpperCase()
    const descripcion = prompt("ingrese Descripcion").toUpperCase()
    const precio = parseFloat(prompt("Ingrese precio")) 
    const stock = parseInt(prompt("Ingrese stock")) 
    const cerveza = new Producto(nombreCerveza,descripcion,precio,stock)
    productos.push(Cerveza)
    continuar = confirm("Quiere continuar cargando productos")
}
console.log(productos)
continuar = confirm("Quiere eliminar algun producto")
while(continuar){
    const productoNombreEliminar = prompt("que producto quiere eliminar?").toUpperCase()
    const index = productos.findIndex((producto)=> producto.nombreCerveza === productoNombreEliminar)
    if(index != -1){
        productos.splice(index,1)
        alert("Producto eliminado")
    }else{
        alert("No se pudo eliminar el producto por que no existe")
    }
    continuar = confirm("Quiere eliminar algun producto")
}

console.log(productos)
continuar = confirm("Quiere actualizar algun producto")
while(continuar){
    const productoNombreActualizar = prompt("que producto quiere actualizar?").toUpperCase()
    const index = productos.findIndex((producto)=> producto.nombreCerveza === productoNombreActualizar)
    if(index != -1){
        const nombreCerveza = prompt("ingrese Nombre").toUpperCase()
        const descripcion = prompt("ingrese Descripcion").toUpperCase()
        const precio = parseFloat(prompt("Ingrese precio")) 
        const stock = parseInt(prompt("Ingrese stock"))
        productos[index].nombreCerveza = nombreCerveza
        productos[index].descripcion = descripcion
        productos[index].precio = precio
        productos[index].stock = stock
        productos[index].fechaActulizacion = new Date()
        alert("Producto actualizado")
    }else{
        alert("No se pudo actualizar el producto por que no existe")
    }
    continuar = confirm("Quiere actualizar algun producto")
}
console.log(productos)

continuar = confirm("Quiere aumentar algun producto")
while(continuar){
    const productoNombreActualizar = prompt("que producto quiere aumentar?").toUpperCase()
    const index = productos.findIndex((producto)=> producto.nombreCerveza === productoNombreActualizar)
    if(index != -1){
        const procertajeActualizado = parseFloat(prompt("Ingrese que porcentaje quiere aumentar el producto"))
        productos[index].aumento(procertajeActualizado) 
        alert("Producto eliminado")
    }else{
        alert("No se pudo eliminar el producto por que no existe")
    }
    continuar = confirm("Quiere eliminar algun producto")
}

console.log(productos)