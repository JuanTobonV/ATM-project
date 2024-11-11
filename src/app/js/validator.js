import {usuarios} from '../models/modeloUsuario.js'

import {sesion} from '../controllers/controllerUsuarios.js'


document.addEventListener('DOMContentLoaded', () => {
    let botonInicioSesion = document.getElementById('inicioSesionBoton');
    
    botonInicioSesion.addEventListener('click', () => {
        let usuarioInicioSesion = document.getElementById('InicioSesionNombreUsuario').value;
        let contrasena = document.getElementById('inicioSesionContraseña').value;
    
        usuarios.forEach(usuario =>{
            if(usuario.nombreCuenta === usuarioInicioSesion && usuario.contrasena === contrasena){
                sesion(usuario)
            }
            else{
                console.log("paila papito");
            }
        })
    
        
    });

})
    