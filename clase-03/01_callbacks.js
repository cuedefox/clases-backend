const valores = [1, 2, 3, 4, 5];
// la siguiente funcion sera usada como callback
const mapCallBack = (valor) => {
    if (valor % 2 === 0) {
        return valor;
    } else {
        return "No es par!";
    }
};

const evaluarPar = valores.map(mapCallBack);

console.log(evaluarPar);

const miFuncionMap = (array, callBack) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let newValue = callBack(array[i]);
        newArray.push(newValue);
    }
    return newArray;
}

const newArray = miFuncionMap(valores, x => x * 2);
const newArrayWithMap = valores.map(x => x * 2);

console.log(newArrayWithMap);
console.log(newArray);

const operaciones = {
    sumar(a, b) {
        return a + b;
    },
    restar(a, b) {
        return a - b;
    },
    multiplicar(a, b) {
        return a * b;
    },
    dividir(a, b) {
        return a / b;
    }
};

const realizarOperacion = (num1, num2, callBack) => {
    console.log(`Realizare una operacion ${callBack}`);
    let res = callBack(num1, num2);
    console.log(`Resultado: ${res}`);
};

realizarOperacion(6, 9, operaciones.sumar);
realizarOperacion(11, 9, operaciones.restar);
realizarOperacion(6, 9, operaciones.multiplicar);
realizarOperacion(99, 9, operaciones.dividir);