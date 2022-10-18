class Pelicula {
    constructor(nombre, año, protagonistas) {
        this.nombre = nombre,
        this.año = año,
        this.protagonistas = protagonistas
    }
}

const nombre = "Rodrigo";
let edad = 21;
let precio = 99;
let series = [
    "obi wan", "el marginal", "casi angeles"
]
let peliculas = [new Pelicula("la venganza de los sith", 2005, ["Anakin", "Obi Wan", "Padme"]), 
new Pelicula("Scarface", 1988, ["Tony montana", "elvira"])];

console.log(nombre);
console.log(edad);
console.log(`$${precio}`);
console.log(series);
console.log(peliculas);

edad++;
console.log(edad);

series.push("clone wars");
console.log(series);

console.log(peliculas[0]);