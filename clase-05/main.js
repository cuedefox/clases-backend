const numerosSalidos = {};

function generarNumeroAleatorio() {
    return parseInt(Math.random() * 20) + 1;
}

for(let i = 0; i <= 10000; i++) {
    const numero = generarNumeroAleatorio();
    if(!numerosSalidos[numero]) {
        numerosSalidos[numero] = 0;
    }
    numerosSalidos[numero]++;
}

console.log(numerosSalidos);

////////////////////////////////////////////////////////////////////////////////////

const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

function getNombres(productos) {
    let nombres = [];
    for(let producto of productos) {
        nombres.push(producto.nombre);
    }
    return nombres.join(",");
}

function getPrecio(productos) {
    let precioTotal;
    for(let producto of productos) {
        precioTotal += producto.precio;
    }
    return precioTotal;
}

function getPrecioPromedio(productos) {
    return getPrecio(productos) / productos.length;
}

function to2Decimales(num) {
    return Number(num.toFixed(2));
}

console.log(getNombres(productos));
console.log(getPrecio(productos));
console.log(getPrecioPromedio(productos));

/////////////////////////////////////////////////////////////////////////////
const moment = require('moment');

const hoy = moment();

const nacimiento = moment("10/07/2001", "DD/MM/YYYY");

