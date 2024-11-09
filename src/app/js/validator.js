import {usuarios} from '../models/modeloUsuario.js'

import {sesion} from '../controllers/controllerUsuarios.js'


let botonInicioSesion = document.getElementById('inicioSesionBoton');

botonInicioSesion.addEventListener('click', () => {
    let usuarioInicioSesion = document.getElementById('inicioSesionUsuario').value;
    let contraseña = document.getElementById('inicioSesionContraseña').value;

    usuarios.forEach(usuario =>{
        if(usuario.nombreCuenta === usuarioInicioSesion && usuario.contraseña === contraseña){
            sesion(usuario)
        }
        else{
            console.log("paila papito");
        }
    })

    
});