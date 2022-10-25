function mostrarLista(array) {
    if(array.length > 0) {
        for(let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    } else {
        console.log("lista vacia");
    }
}

let arr = ["hola", "todo", "bien", "esto", "es", "una", "lista"];
let arr2 = [];

mostrarLista(arr);
mostrarLista(arr2);

// anonima iife
(function(array) {
    if(array.length > 0) {
        for(let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    } else {
        console.log("lista vacia");
    }
})([1, 2, 3]);


// closure
function crearMultiplicador(num) {
    return function(num2) {
        console.log(num * num2);
    }
}

const crearDuplicador = crearMultiplicador(2);
const crearTriplicador = crearMultiplicador(3);

crearMultiplicador(3)(4);

crearDuplicador(5);
crearTriplicador(10);

//clases

class Contador {
    constructor(nombre) {
        this.nombre = nombre;
        this.cuentaLocal = 0;
    }

    static cuentaTotal = 0;

    contar() {
        this.cuentaLocal++;
        Contador.cuentaTotal++;
    }

    obtenerResponsable() {
        return this.nombre;
    }

    obtenerCuentaIndividual() {
        return this.cuentaLocal;
    }

    obtenerCuentaGlobal() {
        return Contador.cuentaTotal;
    }
}

const rodrigo = new Contador("Rodrigo");
const matias = new Contador("Matias");

rodrigo.contar();
rodrigo.contar();
rodrigo.contar();
matias.contar();

console.log(rodrigo.obtenerResponsable());
console.log(matias.obtenerCuentaIndividual());
console.log(rodrigo.obtenerCuentaGlobal());