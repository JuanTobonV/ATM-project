import { usuarios } from "../models/modeloUsuario.js"; // importo los datos quemados

localStorage.setItem('listaUsuarios', JSON.stringify(usuarios))  // los guardo en localstorage

export function sesion(usuarioValidado) { // exporto esta función para el la página principal
  window.location.href = "../../views/forms/form.html";

  localStorage.setItem("usuario", JSON.stringify(usuarioValidado)); // guardo el usuario validado en el LS

}

// export function cerrarSesion(botonCerrarSesion){
//     botonCerrarSesion.addEventListener('click', () => window.location.href = "../../views/simuladorLogin/InicioSesion.html");


// }


document.addEventListener('DOMContentLoaded', () => {

    let usuarioValidadoParse = JSON.parse(localStorage.getItem("usuario"))

    

    if (usuarioValidadoParse) {
        
        const nombreUsuario = document.getElementById('nombreUsuario');
        const nombreCuenta = document.getElementById('nombreCuenta');
        const numeroCuenta = document.getElementById('numeroCuenta');
        const saldoCuenta = document.getElementById('saldoCuenta');

        if (nombreUsuario) {
            nombreUsuario.textContent = `Hola ${usuarioValidadoParse.nombrePersona}`;
            nombreCuenta.textContent = `Cuenta: ${(usuarioValidadoParse.nombreCuenta)}`;
            numeroCuenta.textContent = `Numero de cuenta: ${usuarioValidadoParse.id}`;
            saldoCuenta.textContent = `Saldo: ${usuarioValidadoParse.saldo}`;
        } else {
            console.error('Elemento con ID "nombreUsuario" no encontrado.');
        }
    }
})
