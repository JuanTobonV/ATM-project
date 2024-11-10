import { usuarios } from "../models/modeloUsuario.js";

localStorage.setItem('listaUsuarios', JSON.stringify(usuarios))

export function sesion(usuarioValidado) {
  window.location.href = "../../views/dashboard/index.html";

  localStorage.setItem("usuario", JSON.stringify(usuarioValidado));

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

    const operationTransferir = document.getElementById("operation__transferir");
    const operationConsignar = document.getElementById("operation__consignar");
    const operationRetirar = document.getElementById("operation__retirar");
    const operationMovimientos = document.getElementById("operation__movimientos");

    

    const transferir = document.getElementById("transferir");
    const consignar = document.getElementById("consignar");
    const retirar = document.getElementById("retirar");
    const movimientos = document.getElementById("movimientos");


    const operations = [transferir, consignar, retirar, movimientos];




    function toggleFunction(operation__item) {
    operations.forEach((op) => {
        if (op !== operation__item) {
        op.classList.add("hidden");
        } else {
        op.classList.toggle("hidden");
        }
    });
    }

function funcionTransferir(cuentaDestino, montoConsignar) {

    const botonTransferir = document.getElementById('botonTransferir');
    const cuentaDestinoValue = cuentaDestino.value;
    const montoConsignarValue = parseFloat(montoConsignar.value);

    botonTransferir.addEventListener('click', () => {
        console.log(cuentaDestinoValue, montoConsignarValue);

    })

}


    operationTransferir.addEventListener("click", () => {
        const nombreCuentaDestino = document.getElementById('cuentaDestino');
        const salarioTransferir = document.getElementById('salarioTransferir');
        
        toggleFunction(transferir);

        funcionTransferir(nombreCuentaDestino, salarioTransferir);

    });
    

    operationConsignar.addEventListener("click", () => {
    toggleFunction(consignar);
    });

    operationRetirar.addEventListener("click", () => {
    toggleFunction(retirar);
    });

    operationMovimientos.addEventListener("click", () => {
    toggleFunction(movimientos);
    });

    

} else {
    console.error('No se encontró un usuario válido en localStorage.');
}

});

