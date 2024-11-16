export function sesion(usuarioValidado) {
    localStorage.setItem("usuario", JSON.stringify(usuarioValidado));
    window.location.href = "/src/views/dashboard/dashboard.html";
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

        function addMovimientos(tipo, valorMovimiento){

            let movimientosUsuario = [];

            

            let tableBody = document.getElementById('tableBody')
            let tableRow = document.createElement("tr")

            function crearMovimiento(campoTipoMovimiento, campoValorMovimiento){

                movimientosUsuario.push({
                    tipoMovimiento: campoTipoMovimiento,
                    valorMovimiento: campoValorMovimiento,
                })

                localStorage.setItem('historialMovimientosUsuario',JSON.stringify(movimientosUsuario))

                let movimientoParseado = JSON.parse(localStorage.getItem('historialMovimientosUsuario'))

                movimientosUsuario.forEach(movimientoAuxiliar => {

                    console.log(movimientoAuxiliar.tipoMovimiento);

                    let campoMovimiento = document.createElement("td")
                    campoMovimiento.textContent = `${movimientoAuxiliar.tipoMovimiento}`
    
                    let campoValor = document.createElement("td")
                    campoValor.textContent = `$ ${movimientoAuxiliar.valorMovimiento}`
    
                    
                    tableRow.appendChild(campoMovimiento)
                    tableRow.appendChild(campoValor)
    
                    tableBody.appendChild(tableRow)
                    

                })

            }
    
            switch (tipo){
                case consignar:
                    crearMovimiento("Consignacion", valorMovimiento)
                    break
                
            }
        }


        function funcionTransferir(cuentaDestino, montoConsignar) {
            const botonTransferir = document.getElementById('botonTransferir');
            const cuentaDestinoValue = cuentaDestino.value;
            const montoConsignarValue = parseFloat(montoConsignar.value);

            botonTransferir.addEventListener('click', () => {
                console.log(cuentaDestinoValue, montoConsignarValue);
            });
        }

        operationTransferir.addEventListener("click", () => {
            const nombreCuentaDestino = document.getElementById('cuentaDestino');
            const salarioTransferir = document.getElementById('salarioTransferir');

            toggleFunction(transferir);
            funcionTransferir(nombreCuentaDestino, salarioTransferir);
        });


        ///////////////////////////////////////////////////////////////

        operationConsignar.addEventListener("click", () => {
            toggleFunction(consignar);

            

            let botonParaConsignar = document.getElementById('botonParaConsignar');

            botonParaConsignar.addEventListener('click', () => {

                let valoraConsignar = document.getElementById('campo__consignar').value;
                usuarioValidadoParse.saldo += Number(valoraConsignar);

                localStorage.setItem("usuario", JSON.stringify(usuarioValidadoParse));

                addMovimientos(consignar, valoraConsignar)

                
            });
        });

        ///////////////////////////////////////////////////////////////
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
