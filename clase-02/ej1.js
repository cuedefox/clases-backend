const objetos =  [
    {
     manzanas:3,
     peras:2,
     carne:1,
     jugos:5,
     dulces:2
    },
    {
     manzanas:1,
     sandias:1,
     huevos:6,
     jugos:1,
     panes:4
    }
]
let productos1 = Object.keys(objetos[0]);
let productos2 = Object.keys(objetos[1]);
let productos = [...productos1, ...productos2];
console.log([...new Set(productos)]);

let valores1 = Object.values(objetos[0]);
let valores2 = Object.values(objetos[1]);
let valores = [...valores1, ...valores2];
let valoresFinal = valores.reduce((acumulado, total) => {
    return acumulado + total;
})
console.log(valoresFinal);

///////////////////////////////////////////////////

let newArray = [];
let totalCantidadProductos = 0;

objetos.forEach(obj => {
    const keys = Object.keys(obj);

    keys.forEach(key => {
        if(!newArray.includes(key)) {
            newArray.push(key);
        }
    })

    let valores = Object.values(obj);

    totalCantidadProductos += valores.reduce((a, t) => {
        return a + t;
    })
})

console.log(newArray);
console.log(totalCantidadProductos);

////////////// Nulish  /////////////////////
let test = undefined;
//.......logica
let nullish = test ?? 'sin valor';

console.log(nullish);