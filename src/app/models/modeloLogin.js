import { sesion } from "../controllers/controllerUsuarios.js";

let nombreUsuarioLogin = document.getElementById('nombreUsuarioLogin');
let contraseñaUsuarioLogin = document.getElementById('ContraseñaLogin');

let botonLogin = document.getElementById('LoginBtn');

botonLogin.addEventListener('click', () => {

    let listaUsuariosRegistrados = JSON.parse(localStorage.getItem("storageUsuarioRegistrados"));

    let usuarioEncontrado = false; // Variable para verificar si el usuario existe

    listaUsuariosRegistrados.forEach(usuarioAuxiliar => {
        
    if (nombreUsuarioLogin.value === usuarioAuxiliar.nombrePersona && contraseñaUsuarioLogin.value === usuarioAuxiliar.contraseña) {
        sesion(usuarioAuxiliar);
        usuarioEncontrado = true; // El usuario o password ha sido encontrado
    }
    });
    
    if (!usuarioEncontrado) {
    alert('Tu usuario o contraseña son inválidos, registrate!');
    window.location.href = '../../views/forms/autentication.html';
    }
})