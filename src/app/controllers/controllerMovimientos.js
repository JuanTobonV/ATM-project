export function addMovimientos(tipo, valorMovimiento) {
  let movimientosUsuario = JSON.parse(localStorage.getItem("usuario")) || [];

  function crearMovimiento(campoTipoMovimiento, campoValorMovimiento) {

    let movimiento = {
      tipoMovimiento: campoTipoMovimiento,
      valorMovimiento: campoValorMovimiento,
    };

    movimientosUsuario.listaMovimientos.push(movimiento);

    localStorage.setItem("listaMovimientosUsuarioSesion", JSON.stringify(movimientosUsuario));
  }

  switch (tipo) {
    case consignar:
      crearMovimiento("Consignacion", valorMovimiento);
      break;
    case retirar:
      crearMovimiento("Retiro", valorMovimiento);
      break;
    case transferir:
      crearMovimiento("transferencia", valorMovimiento);
      break;
  }
}
