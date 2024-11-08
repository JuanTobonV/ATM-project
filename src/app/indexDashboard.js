import {usuarios} from '../data/usuarioData.js'


const operationTransferir = document.getElementById('operation__transferir')
const operationConsignar = document.getElementById('operation__consignar')
const operationRetirar = document.getElementById('operation__retirar')
const operationMovimientos = document.getElementById('operation__movimientos')


const transferir = document.getElementById('transferir')
const consignar = document.getElementById('consignar')
const retirar = document.getElementById('retirar')
const movimientos = document.getElementById('movimientos')

const operations = [transferir, consignar, retirar, movimientos];

function salarioTransaccion(salarioUsuario){
    usuarios.forEach(usuario => {
        if(salarioUsuario > usuario.saldo){
            
        }
    })
}

function toggleFunction(operation__item) {
    operations.forEach(op => {
        if (op !== operation__item) {
            op.classList.add('hidden');
        } 
        else {
            op.classList.toggle('hidden');
        }
    });
}
operationTransferir.addEventListener('click', () => {
    toggleFunction(transferir)
    
    let cuentaDestino = document.getElementById('cuentaDestino').value;

    let salarioATransferir = document.getElementById('salarioTransferir').value;

    salarioTransaccion(salarioATransferir);


})

operationConsignar.addEventListener('click', () => {
    toggleFunction(consignar)
})

operationRetirar.addEventListener('click', () => {
    toggleFunction(retirar);
})

operationMovimientos.addEventListener('click', () => {
    toggleFunction(movimientos)
})



console.log(usuarios);