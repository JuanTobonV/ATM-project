let nombreUsuarioRegistro = document.getElementById('usuarioRegistro');
let contraseñaUsuarioRegistro = document.getElementById('contraseñaRegistro');
let confirmarContraseñaUsuarioRegistro = document.getElementById('confirmarContraseña');

const botonRegistro = document.getElementById('registroBtn');

let listaUsuariosRegistrados = [];

botonRegistro.addEventListener('click', () => {

   if(contraseñaUsuarioRegistro.value === confirmarContraseñaUsuarioRegistro.value){

        console.log('si');

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

   }else{

        console.log('No');

       Swal.fire({
            icon: "error",
            title: "Lo sentimos...",
            text: "Tu contraseña NO coincide!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });

    }

    // limpiar formulario
    nombreUsuarioRegistro.value = '';
    contraseñaUsuarioRegistro.value = '';
    confirmarContraseñaUsuarioRegistro.value = '';
})