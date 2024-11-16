let nombreUsuarioRegistro = document.getElementById('usuarioRegistro');
let contraseñaUsuarioRegistro = document.getElementById('contraseñaRegistro');
let confirmarContraseñaUsuarioRegistro = document.getElementById('confirmarContraseña');

const botonRegistro = document.getElementById('registroBtn');
let formulario = document.getElementById('formulario1');

let listaUsuariosRegistrados = [];
let idCounter = 1;

export let usuarioObj = usuario; // nos lo llevamos a dahsboard y se cargan nuevamente al local storgae para que persistan cuando se cierre sesión

botonRegistro.addEventListener('click', function(event) {

    event.preventDefault();

    if (nombreUsuarioRegistro.value.trim() === "") {
        alert("El nombre de usuario no puede estar vacío.");

        nombreUsuarioRegistro.value = '';
        contraseñaUsuarioRegistro.value = '';
        confirmarContraseñaUsuarioRegistro.value = '';
        return;
    }

    if (contraseñaUsuarioRegistro.value.trim() === "") {
        alert("La contraseña no puede estar vacía.");

        nombreUsuarioRegistro.value = '';
        contraseñaUsuarioRegistro.value = '';
        confirmarContraseñaUsuarioRegistro.value = '';
        return;
    }

    if (confirmarContraseñaUsuarioRegistro.value.trim() === "") {
        alert("Debes confirmar tu contraseña.");

        nombreUsuarioRegistro.value = '';
        contraseñaUsuarioRegistro.value = '';
        confirmarContraseñaUsuarioRegistro.value = '';
        return;
    }

    if (contraseñaUsuarioRegistro.value !== confirmarContraseñaUsuarioRegistro.value) {
        
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las contraseñas No coinciden!"
        });

        nombreUsuarioRegistro.value = '';
        contraseñaUsuarioRegistro.value = '';
        confirmarContraseñaUsuarioRegistro.value = '';
        return;
    }

    let usuario = {
        id: idCounter++,
        nombrePersona: nombreUsuarioRegistro.value,
        contraseña: confirmarContraseñaUsuarioRegistro.value,
        nombreCuenta: 'cuenta de '+nombreUsuarioRegistro.value,
        saldo: 200000
    }

    
    
    listaUsuariosRegistrados.push(usuario);
    localStorage.setItem("storageUsuarioRegistrados", JSON.stringify(listaUsuariosRegistrados));

    Swal.fire({
        position: "center",
        icon: "success",
        title: "Felicidades! ya haces parte de ATM-bank",
        showConfirmButton: false,
        timer: 2000
    });
    
    nombreUsuarioRegistro.value = '';
    contraseñaUsuarioRegistro.value = '';
    confirmarContraseñaUsuarioRegistro.value = '';
  
});
