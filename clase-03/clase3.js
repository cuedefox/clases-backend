const sumar = (a, b) => a + b;

console.log(sumar(1,5));
console.log(sumar(7,5));

class Persona {
    constructor() {

    }


}

function dividir(a, b) {
    return new Promise((resolve, reject) => {
        if(b == 0) {
            reject("no se puede dividir por 0");
        } else {
            resolve(a / b);
        }
    });
}

dividir(10, 2)
    .then((resultado) =>
    console.log(resultado)
    ).catch((err) =>
    console.log(err)
    ).finally(
        console.log("fin")
    );