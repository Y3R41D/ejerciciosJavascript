// escribe tu respuesta acá
function contrasenaValida(texto) {
    if (texto === '2Fj(jjbFsuj' || texto === 'eoZiugBf&g9') return true
    return false
}
// código de prueba
console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValida("")) // false
