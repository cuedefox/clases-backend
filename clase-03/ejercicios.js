const operacion = (a, b, op) => op(a, b);
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multi = (a, b) => a * b;
const div = (a, b) => a / b;

console.log(operacion(53, 25, sumar));
console.log(operacion(53, 25, restar));
console.log(operacion(53, 25, multi));
console.log(operacion(53, 25, div));