let nombreUsuarioRegistro = document.getElementById('usuarioRegistro');
let contraseñaUsuarioRegistro = document.getElementById('contraseñaRegistro');
let confirmarContraseñaUsuarioRegistro = document.getElementById('confirmarContraseña');

const botonRegistro = document.getElementById('registroBtn');

let listaUsuariosRegistrados = [];

let idCounter = 1;
botonRegistro.addEventListener('click', () => {

if(contraseñaUsuarioRegistro.value === confirmarContraseñaUsuarioRegistro.value){

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

}else{

    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las contraseñas No coinciden!",
        //footer: '<a href="#">Why do I have this issue?</a>'
    });

}
    nombreUsuarioRegistro.value = '';
    contraseñaUsuarioRegistro.value = '';
    confirmarContraseñaUsuarioRegistro.value = '';
})