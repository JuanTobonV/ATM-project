export function addMovimientos(tipo, valorMovimiento) {
  let movimientosUsuario = JSON.parse(localStorage.getItem("usuario")) || [];
  let historialUsuarios = JSON.parse(localStorage.getItem("storageUsuarioRegistrados")) || [];

  function crearMovimiento(campoTipoMovimiento, campoValorMovimiento) {

    let movimiento = {
      tipoMovimiento: campoTipoMovimiento,
      valorMovimiento: campoValorMovimiento,
    };

    movimientosUsuario.listaMovimientos.push(movimiento);

    localStorage.setItem("usuario", JSON.stringify(movimientosUsuario));


    let usuarioIndex = historialUsuarios.findIndex(usuarioaEncontrar => usuarioaEncontrar.id === movimientosUsuario.id); 

    if (usuarioIndex !== -1){
      historialUsuarios[usuarioIndex].listaMovimientos.push(movimiento)
      localStorage.setItem("storageUsuarioRegistrados", JSON.stringify(historialUsuarios))
    }


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
