import { addMovimientos } from "./controllerMovimientos.js";

export function sesion(usuarioValidado) {
  localStorage.setItem("usuario", JSON.stringify(usuarioValidado));
  window.location.href = "/src/views/dashboard/dashboard.html";
}

document.addEventListener('DOMContentLoaded', () => {
  const usuarioValidadoParse = JSON.parse(localStorage.getItem("usuario"));

  const nombreUsuario = document.getElementById("nombreUsuario");
  const nombreCuenta = document.getElementById("nombreCuenta");
  const numeroCuenta = document.getElementById("numeroCuenta");
  const saldoCuenta = document.getElementById("saldoCuenta");

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


    /*
    * Operación Transferir
    */

    operationTransferir.addEventListener("click", () => {
      const botonTransferir = document.getElementById("botonTransferir");

      if (botonTransferir) {
        botonTransferir.removeEventListener("click", handleTransferirClick);
        botonTransferir.addEventListener("click", handleTransferirClick);
      }

      toggleFunction(transferir);
    });

    function handleTransferirClick() {
      const nombreCuentaDestino = document.getElementById("cuentaDestino");
      const salarioTransferir = document.getElementById("salarioTransferir");
      funcionTransferir(nombreCuentaDestino.value, Number(salarioTransferir.value));
    }
    
    function funcionTransferir(cuentaDestino, montoTransferir) {
      const listaUsuarios = JSON.parse(localStorage.getItem("storageUsuarioRegistrados"));
      const usuarioActual = JSON.parse(localStorage.getItem("usuario"));

      const usuarioDestino = listaUsuarios.find(
        (usuario) => usuario.nombrePersona === cuentaDestino
      );

      if (usuarioDestino) {
        if (usuarioActual.saldo >= montoTransferir) {
          usuarioActual.saldo -= montoTransferir;
          usuarioDestino.saldo += montoTransferir;

          const usuarioActualIndex = listaUsuarios.findIndex(usuario => usuario.nombrePersona === usuarioActual.nombrePersona);
          if (usuarioActualIndex !== -1) {
            listaUsuarios[usuarioActualIndex].saldo = usuarioActual.saldo;
          }

          const usuarioDestinoIndex = listaUsuarios.findIndex(usuario => usuario.nombrePersona === usuarioDestino.nombrePersona);
          if (usuarioDestinoIndex !== -1) {
            listaUsuarios[usuarioDestinoIndex].saldo = usuarioDestino.saldo;
          }

          localStorage.setItem('usuario', JSON.stringify(usuarioActual));
          localStorage.setItem('storageUsuarioRegistrados', JSON.stringify(listaUsuarios));

          console.log(`Transferencia realizada: ${montoTransferir} de ${usuarioActual.nombrePersona} a ${usuarioDestino.nombrePersona}`);
          addMovimientos(transferir, Number(salarioTransferir.value), cuentaDestino);

          alert("Transferencia realizada con éxito");
        } else {
          alert("Saldo insuficiente");
        }
      } else {
        alert("No existe la cuenta de destino");
      }
    }

/* 
 * Operación consignar 
 */

    operationConsignar.addEventListener("click", () => {
      const botonParaConsignar = document.getElementById("botonParaConsignar");

      if (botonParaConsignar) {
        botonParaConsignar.removeEventListener("click", handleConsignarClick);
        botonParaConsignar.addEventListener("click", handleConsignarClick);
      }

      toggleFunction(consignar);
    });

    function handleConsignarClick() {
          const usuarioActual = JSON.parse(localStorage.getItem("usuario"));
          const valoraConsignar = document.getElementById("campo__consignar");

          funcionConsignar(usuarioActual, valoraConsignar.value);
    }

    function funcionConsignar(cuentaActual, montoConsignar) {
      const listaUsuarios = JSON.parse(localStorage.getItem("storageUsuarioRegistrados"));

      cuentaActual.saldo += Number(montoConsignar);

      const usuarioActualIndex = listaUsuarios.findIndex(usuario => usuario.nombrePersona === cuentaActual.nombrePersona);

      if (usuarioActualIndex !== -1) {
        listaUsuarios[usuarioActualIndex].saldo = cuentaActual.saldo;
      }

      localStorage.setItem('usuario', JSON.stringify(cuentaActual));
      localStorage.setItem('storageUsuarioRegistrados', JSON.stringify(listaUsuarios));
      addMovimientos(consignar, montoConsignar);
      console.log(`Consignación de $${Number(montoConsignar)} realizada con exito`);
    }

   

/*
 * Operación Retirar
 */

    operationRetirar.addEventListener("click", () => {
      toggleFunction(retirar);

      const botonParaRetirar = document.getElementById("botonParaRetirar");

      botonParaRetirar.addEventListener("click", () => {
        // Lógica para retirar, no eliminar la funcionalidad de addMovimientos()
        addMovimientos(retirar /* Acá va la variable del valor que el usuario decidió usar */);
      });
    });


    /**
     * *Operación movimientos
     */

    operationMovimientos.addEventListener("click", () => {
      pintarMovimiento();
      toggleFunction(movimientos);
    });

    function pintarMovimiento() {
      let movimientosUsuario = JSON.parse(localStorage.getItem("usuario")) || [];

      const tableBody = document.getElementById("tableBody");

      // Limpiar la tabla antes de agregar los movimientos
      tableBody.innerHTML = "";

      movimientosUsuario.listaMovimientos.forEach((movimiento) => {

          const tableRow = document.createElement("tr");

          const campoMovimiento = document.createElement("td");
          
          if(movimiento.tipoMovimiento === "Consignacion"){
              campoMovimiento.textContent = `${movimiento.tipoMovimiento}`;
              campoMovimiento.style.color = "green";
              campoMovimiento.style.fontWeight = 600
          }
          else if(movimiento.tipoMovimiento === "Retiro"){
            campoMovimiento.textContent = `${movimiento.tipoMovimiento}`;
            campoMovimiento.style.color = "red";
            campoMovimiento.style.fontWeight = 600
          }
          else{
            campoMovimiento.textContent = `${movimiento.tipoMovimiento}`;

          }


          const campoValor = document.createElement("td");
          campoValor.textContent = `$ ${movimiento.valorMovimiento}`;

          tableRow.appendChild(campoMovimiento);
          tableRow.appendChild(campoValor);

          tableBody.appendChild(tableRow);
  

      });
    }
  } else {
    console.error("No se encontró un usuario válido en localStorage.");
  }
});
