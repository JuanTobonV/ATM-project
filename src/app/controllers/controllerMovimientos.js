export function addMovimientos(tipo, valorMovimiento){

    let movimientosUsuario = [];
    

    let tableBody = document.getElementById('tableBody')
    let tableRow = document.createElement("tr")

    function crearMovimiento(campoTipoMovimiento, campoValorMovimiento){

        let movimiento = {
            tipoMovimiento: campoTipoMovimiento,
            valorMovimiento: campoValorMovimiento,
        };

        movimientosUsuario.push(movimiento);


        localStorage.setItem('historialMovimientosUsuario',JSON.stringify(movimientosUsuario))

        let movimientoParseado = JSON.parse(localStorage.getItem('historialMovimientosUsuario'))

        movimientoParseado.forEach(movimientoAuxiliar => {

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
            crearMovimiento("Consignacion", valorMovimiento);
            break;
        case retirar:
            crearMovimiento('Retiro', valorMovimiento);
            break;
        case trasnferir:
            crearMovimiento('transferencia', valorMovimiento);
            break;
        
    }
}