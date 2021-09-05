//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function(){

});
  

function guardarelusuario(){
  let nombre = document.getElementById("usuario").value;
  let password = document.getElementById("pass").value;
  if (nombre ===""){
    alert ("Campo vacío, ingrese un nombre de usuario");
    return false;
  } else if (password ==="") {
    alert ("Campo vacío, ingrese una contraseña");
    return false;
  } else {
    localStorage.setItem("nombreusuario",nombre);
    return true;
  }
}

