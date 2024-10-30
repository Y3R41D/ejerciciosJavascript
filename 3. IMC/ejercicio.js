// escribe la función bmi acá
function bmi (peso, altura) {
    const BMI = peso / (altura ** 2)
    if (BMI < 18.5) return 'Bajo de peso'
    if (BMI > 18.5 && BMI < 24.9) return 'Normal'
    if (BMI > 25 && BMI < 29.9) return 'Sobrepeso'
    if (BMI >= 30) return 'Obeso'
}
// código de prueba
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"