// verificar edad
/*let Dia
let mes
let año*/
alert ("Ingrese su edad")

let dia = parseFloat(prompt("Ingrese Día"));
let mes = parseFloat(prompt( "ingrese Mes"));
let año = parseFloat(prompt("ingrese Año"));

        const mensajeEdad = (año)=>{
            if (año  > 2005){
                return "Es mayor de edad puede ingresar"
            }else{
                return "no puede ingresar"
            }
        }
        alert("Su fecha es: "+ dia +"/" + mes + "/"+ año);
        console.log()
        alert(mensajeEdad(mensajeEdad))
             
           


