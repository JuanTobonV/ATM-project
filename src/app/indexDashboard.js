const operationTransferir = document.getElementById('operation__transferir')
const operationConsignar = document.getElementById('operation__consignar')
const operationRetirar = document.getElementById('operation__retirar')
const operationMovimientos = document.getElementById('operation__movimientos')


const transferir = document.getElementById('transferir')
const consignar = document.getElementById('consignar')
const retirar = document.getElementById('retirar')
const movimientos = document.getElementById('movimientos')

const operations = [transferir, consignar, retirar, movimientos];

function toggleFunction(operation__item) {
    operations.forEach(op => {
        if (op !== operation__item) {
            op.classList.add('hidden');
        } 
        else {
            op.classList.remove('hidden');
        }
    });
}
operationTransferir.addEventListener('click', () => {
    toggleFunction(transferir)
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