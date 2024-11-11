// Simulador de datos de usuario

let nombreUsuarioRegistro = document.getElementById('usuarioRegistro');
let contraseñaUsuarioRegistro = document.getElementById('contraseñaRegistro');
let confirmarContraseñaUsuarioRegistro = document.getElementById('confirmarContraseña');

let botonRegistro = document.getElementById('registroBtn');

let listaUsuariosRegistrados = [];

botonRegistro.addEventListener('click', () => {
    let usuario = {
        id: 1,
        nombrePersona: nombreUsuarioRegistro.value,
        contraseña: confirmarContraseñaUsuarioRegistro.value,
        nombreCuenta: 'cuenta de '+nombreUsuarioRegistro.value,
        saldo: 200000
    }

    listaUsuariosRegistrados.push(usuario);
    localStorage.setItem("storageUsuarioRegistrados", JSON.stringify(listaUsuariosRegistrados));
    console.log('en este momento te has regsitrado y tus datos se han ido a LocalStorage');

    // limpiar formulario
    nombreUsuarioRegistro.value = '';
    contraseñaUsuarioRegistro.value = '';
    confirmarContraseñaUsuarioRegistro.value = '';
})