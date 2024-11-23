export function addMovimientos(tipo, valorMovimiento, cuentaDestino = []) {

  let cuentaActual = JSON.parse(localStorage.getItem("usuario")) || [] 
  let historialUsuarios = JSON.parse(localStorage.getItem("storageUsuarioRegistrados")) || [];

  function crearMovimiento(campoTipoMovimiento, campoValorMovimiento) {
    let movimiento = {
      tipoMovimiento: campoTipoMovimiento,
      valorMovimiento: campoValorMovimiento,
    };

    cuentaActual.listaMovimientos.push(movimiento);

    localStorage.setItem("usuario", JSON.stringify(cuentaActual));

    let usuarioIndex = historialUsuarios.findIndex(usuario => usuario.id === cuentaActual.id);

    if (usuarioIndex !== -1) {
      historialUsuarios[usuarioIndex].listaMovimientos.push(movimiento);
      localStorage.setItem("storageUsuarioRegistrados", JSON.stringify(historialUsuarios));
    }

    if(campoTipoMovimiento === "transferencia"){

      let historialUsuariosIndex = historialUsuarios.findIndex(elemento => elemento.nombrePersona === cuentaDestino)
      
      if(historialUsuariosIndex !== -1){
        
        console.log(historialUsuarios[historialUsuariosIndex]);

        historialUsuarios[historialUsuariosIndex].listaMovimientos.push(movimiento);


        localStorage.setItem("storageUsuarioRegistrados", JSON.stringify(historialUsuarios));

      }
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
    default:
      console.error("Tipo de movimiento no reconocido");
  }
}
