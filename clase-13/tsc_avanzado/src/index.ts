import * as operaciones from './lib/operaciones';

const mensaje:string = 'Hola TS';
console.log(mensaje);

let num1:number = 5;
let num2:number = 3;

console.log(`La suma de ${num1} y ${num2} es de ${operaciones.sumar(num1, num2)}`);
console.log(`La resta de ${num1} y ${num2} es de ${operaciones.restar(num1, num2)}`);
console.log(`La multiplicacion de ${num1} y ${num2} es de ${operaciones.multiplicar(num1, num2)}`);
console.log(`La division de ${num1} y ${num2} es de ${operaciones.dividir(num1, num2)}`);