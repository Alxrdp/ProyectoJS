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
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const datosJSONAnteriores = localStorage.getItem('formularioDatos');
    const datosArrayAnteriores = datosJSONAnteriores ? JSON.parse(datosJSONAnteriores) : [];
    const datosArray = datosArrayAnteriores.concat([nombre, apellidos, telefono, email]);
    console.log(datosArray);
    const datosJSON = JSON.stringify(datosArray);
    //datos guardados en el LocalStorage
    localStorage.setItem('formularioDatos', datosJSON);
    alert('Los datos se han guardado correctamente.');
    document.getElementById('formulario').reset();
  });