export function addMovimientos(tipo, valorMovimiento){

    let movimientosUsuario = JSON.parse(localStorage.getItem('listaMovimientosUsuarioSesion')) || []
    

    let tableBody = document.getElementById('tableBody')
    let tableRow = document.createElement("tr")

    function crearMovimiento(campoTipoMovimiento, campoValorMovimiento){

        let movimiento = {
            tipoMovimiento: campoTipoMovimiento,
            valorMovimiento: campoValorMovimiento,
        };

        movimientosUsuario.push(movimiento);


        localStorage.setItem('listaMovimientosUsuarioSesion',JSON.stringify(movimientosUsuario))
        pintarMovimiento(movimiento)
    }

    function pintarMovimiento(movimiento){

        
        let campoMovimiento = document.createElement("td")
        campoMovimiento.textContent = `${movimiento.tipoMovimiento}`

        let campoValor = document.createElement("td")
        campoValor.textContent = `$ ${movimiento.valorMovimiento}`

            
        tableRow.appendChild(campoMovimiento)
        tableRow.appendChild(campoValor)

        tableBody.appendChild(tableRow)
            

        
    }

    switch (tipo){
        case consignar:
            crearMovimiento("Consignacion", valorMovimiento);
            break;
        case retirar:
            crearMovimiento('Retiro', valorMovimiento);
            break;
        case transferir:
            crearMovimiento('transferencia', valorMovimiento);
            break;
        
    }
}