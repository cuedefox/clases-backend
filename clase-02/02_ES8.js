// object entries, values, keys
const impuestos = {
    impuesto1: 521,
    impuesto2: 4521,
    impuesto3: 52,
    impuesto4: 8561,
}

let parLlaveValor = Object.entries(impuestos);
console.log(parLlaveValor);

let propiedades = Object.keys(impuestos);
console.log(propiedades);

let valores = Object.values(impuestos);
console.log(valores);

// reduce
let impuestoTotal = valores.reduce((acumulado, actual) => {
    console.log(`Valores: inicial ${actual} acumulado ${acumulado}`);
    return acumulado + actual;
});

console.log(impuestoTotal);