// .map ej
const array = [1, 2, 3, 4, 5];
const numeros = array.map((num) => num * 2);
console.log(numeros);

// exponencial con **
let valoresBase = [1, 2, 3, 4, 5, 6];
let exponenciales = valoresBase.map((num, index) => num**index);
console.log(exponenciales);

// includes
let nombres = ['Rodrigo', 'Lucia', 'Dante', 'Luz'];
const nombre = 'Ana';

if (nombres.includes(nombre)) {
    console.log(`${nombre} esta en la lista`);
}else {
    console.log(`${nombre} no esta en la lista`)
}