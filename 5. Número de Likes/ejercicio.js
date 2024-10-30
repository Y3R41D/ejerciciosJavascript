// escribe tu respuesta acá
function likes(num) { 
    if (num < 1000) return String(num); 
    let result; 
    if (num >= 1000000) { 
        result = (num / 1000000) + 'M'; 
    } else { 
        result = (num / 1000)+ 'K'; 
    } 
    return result; }
// código de prueba
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"