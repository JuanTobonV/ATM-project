let operacionTransferir = document.getElementById('operation__transferir')
let operationConsignar = document.getElementById('operation__consignar')
let operationRetirar = document.getElementById('operation__retirar')
let operationMovimientos = document.getElementById('operation__movimientos')

let imagen = document.getElementById('imagen')

operacionTransferir.addEventListener('click', () => {
      imagen.src = '/assets/img/iphoneTransferir.png'
})

operationConsignar.addEventListener('click', () => {
      imagen.src = '/assets/img/iphoneConsignar.png'
})

operationRetirar.addEventListener('click', () => {
      imagen.src = '/assets/img/iphoneRetirar.png'
})

operationMovimientos.addEventListener('click', () => {
      imagen.src = '/assets/img/iphoneMovimientos.png'
})