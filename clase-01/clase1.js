//node + archivo.js

const user = {
    nombre: "Rodrigo",
    apellido: "Vergara",
    edad: 21
}

console.log("patata");

let num1 = 5;
let num2 = 14;
let num3 = 7;
let num4 = 15;

function sumar(num1, num2) {
    return(num1 + num2)
}

console.log(sumar(num1, num2));
console.log(sumar(num3, num2));
console.log(sumar(num1, num4));
console.log(user.nombre);
console.log(user);