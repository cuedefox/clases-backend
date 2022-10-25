function suma(a, b) {
    resultado = a + b;
    return function() {
        console.log(resultado);
    }
}

suma(4, 6)();

//closure 
function gritar(palabra) {
    let signo = "!!!!"
    return function() {
        console.log(`${palabra}${signo}`)
    }
}

let saludar = gritar("hola wacho");

console.log(saludar());
