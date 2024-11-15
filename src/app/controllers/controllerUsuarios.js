import { addMovimientos } from "./controllerMovimientos.js";

export function sesion(usuarioValidado) {
    window.location.href = "/src/views/dashboard/dashboard.html";
    localStorage.setItem("usuario", JSON.stringify(usuarioValidado));

    let listaMovimientos = [];

    localStorage.setItem("listaMovimientosUsuarioSesion", JSON.stringify(listaMovimientos))
}

document.addEventListener('DOMContentLoaded', () => {

    let usuarioValidadoParse = JSON.parse(localStorage.getItem("usuario"));

    const nombreUsuario = document.getElementById('nombreUsuario');
    const nombreCuenta = document.getElementById('nombreCuenta');
    const numeroCuenta = document.getElementById('numeroCuenta');
    const saldoCuenta = document.getElementById('saldoCuenta');

    if (usuarioValidadoParse) {
        nombreUsuario.textContent = `Hola ${usuarioValidadoParse.nombrePersona}`;
        nombreCuenta.textContent = `Cuenta: ${usuarioValidadoParse.nombreCuenta}`;
        numeroCuenta.textContent = `Numero de cuenta: ${usuarioValidadoParse.id}`;
        saldoCuenta.textContent = `Saldo: ${usuarioValidadoParse.saldo}`;

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

        function funcionTransferir(cuentaDestino, montoTransferir) {
            let listaUsuarios = JSON.parse(localStorage.getItem('storageUsuarioRegistrados'));
            let usuarioActual = JSON.parse(localStorage.getItem('usuario'));

            let usuarioDestino = listaUsuarios.find(usuario => usuario.nombrePersona === cuentaDestino);

            if (usuarioDestino) {

                if (usuarioActual.saldo >= montoTransferir) {

                    usuarioActual.saldo -= montoTransferir;
                    usuarioDestino.saldo += montoTransferir;

                    localStorage.setItem('usuario', JSON.stringify(usuarioActual));
                    localStorage.setItem('storageUsuarioRegistrados', JSON.stringify(listaUsuarios));

                    console.log(`Transferencia realizada: ${montoTransferir} de ${usuarioActual.nombrePersona} a ${usuarioDestino.nombrePersona}`);
                    addMovimientos(transferir, Number(salarioTransferir.value))

                    alert('Transferencia realizada con éxito');
                } else {
                    alert('Saldo insuficiente');
                }
            } else {
                alert('No existe la cuenta de destino');
            }

        }

        operationTransferir.addEventListener("click", () => {
            const botonTransferir = document.getElementById('botonTransferir');

            if (botonTransferir) {
                botonTransferir.removeEventListener('click', handleTransferirClick);
                botonTransferir.addEventListener('click', handleTransferirClick);
            }

            toggleFunction(transferir);

            
        });

        function handleTransferirClick() {
            const nombreCuentaDestino = document.getElementById('cuentaDestino');
            const salarioTransferir = document.getElementById('salarioTransferir');
            funcionTransferir(nombreCuentaDestino.value,Number(salarioTransferir.value) );


        }

        function funcionConsignar(cuentaActual, montoConsignar){
            cuentaActual.saldo += Number(montoConsignar);
            addMovimientos(consignar, montoConsignar)
        }

        /*Operación consignar */
        operationConsignar.addEventListener("click", () => {

            let botonParaConsignar = document.getElementById('botonParaConsignar');

          
            if (botonParaConsignar) {
                botonParaConsignar.removeEventListener('click', handleConsignarClick);
                botonParaConsignar.addEventListener('click', handleConsignarClick);
            }

            toggleFunction(consignar);

            
        });

        function handleConsignarClick (){
            let usuarioActual = JSON.parse(localStorage.getItem('usuario'))
            const valoraConsignar = document.getElementById('campo__consignar')

            funcionConsignar(usuarioActual, valoraConsignar.value)

        }

        /*Operación Retirar */
        operationRetirar.addEventListener("click", () => {
            toggleFunction(retirar);

            let botonParaRetirar = document.getElementById('botonParaRetirar')

            botonParaRetirar.addEventListener('click', () => {

                //Luis, acá va la lógica para retirar, no eliminar la funcionalidad de addMovimientos()

                addMovimientos(retirar, /* Acá va la variable del valor que el usuario decidio usar */)
            })
        });

        operationMovimientos.addEventListener("click", () => {
            toggleFunction(movimientos);
        });

    } else {
        console.error('No se encontró un usuario válido en localStorage.');
    }
});
