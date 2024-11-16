import { sesion } from "../controllers/controllerUsuarios.js";

let nombreUsuarioLogin = document.getElementById('nombreUsuarioLogin');
let contraseñaUsuarioLogin = document.getElementById('ContraseñaLogin');

let botonLogin = document.getElementById('LoginBtn');

let mainContainer = document.getElementById('mainContainer');

botonLogin.addEventListener('click', () => {
    console.log(nombreUsuarioLogin.value);
    let listaUsuariosRegistrados = JSON.parse(localStorage.getItem("storageUsuarioRegistrados"));
    console.log(listaUsuariosRegistrados.nombrePersona);

    let usuarioEncontrado = false; // Variable para verificar si el usuario existe

    listaUsuariosRegistrados.forEach(usuarioAuxiliar => {
        
    if (nombreUsuarioLogin.value === usuarioAuxiliar.nombrePersona) {
        sesion(usuarioAuxiliar);
        usuarioEncontrado = true; // El usuario ha sido encontrado
    }
    });

    if (!usuarioEncontrado) {
    alert('Regístrate para poder iniciar sesión');
    window.location.href = '../../views/forms/index.html';
}
})