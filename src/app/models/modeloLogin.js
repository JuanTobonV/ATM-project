import { sesion } from "../controllers/controllerUsuarios.js";

let nombreUsuarioLogin = document.getElementById('nombreUsuarioLogin');
let contraseñaUsuarioLogin = document.getElementById('ContraseñaLogin');

let botonLogin = document.getElementById('LoginBtn');

let mainContainer = document.getElementById('mainContainer');

botonLogin.addEventListener('click', () => {
    console.log(nombreUsuarioLogin.value);
    let listaUsuariosRegistrados = JSON.parse(localStorage.getItem("storageUsuarioRegistrados"));
    console.log(listaUsuariosRegistrados.nombrePersona);

    listaUsuariosRegistrados.forEach(usuarioAuxiliar => {
        if(nombreUsuarioLogin.value === usuarioAuxiliar.nombrePersona){
            sesion(usuarioAuxiliar)            
        } else{
            window.location.href = '../../views/forms/index.html'
            alert('Regístrate para poder inciar sesión');
        }       
        
    })
})