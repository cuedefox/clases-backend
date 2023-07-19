// repaso de javascript

//hands on lab funciones
function mostrarLista (array) {
    if (array.length == 0) {
        console.log('lista vacia')
    } else {
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    }
}

const lista1 = ['a', 'b', 'c'];
const lista2 = [];
const lista3 = ['rodrigo'];

mostrarLista(lista1);
mostrarLista(lista2);
mostrarLista(lista3);

// hands on lab 2 clase contador
class Auto {
    // static #color;
    constructor(color, marca) {
        this.color = color;
        this.marca = marca;
    }


    // Metodos
    frenar() {
        return `se frena el auto`
    }

    acelerar() {
        return `se acelera el auto ${this.color}`
    }
}


// creamos instancias
const newAuto1 = new Auto('Negro', 'Peugeot');
const newAuto2 = new Auto('Azul', 'Ford');
const newAuto3 = new Auto('Amarillo', 'Tesla');


console.log(newAuto1);
console.log(newAuto1.acelerar());