const args = process.argv;
const numbers = args.slice(2);

process.on('exit', code => {
    if(code) {
        console.log(`Saliendo con el codigo ${code}`);
    }else {
    console.log('Saliendo sin errores');
    }
});

process.on('uncaughtException', err => {
    console.log(err);
    switch (err.descripcion) {
        case 'entrada vacia': 
            return process.exit(-4);
        case 'error de tipo':
            return process.exit(-5);
    }
});

function areNumbers(numbers) {
    if(numbers.length == 0) {
        throw {descripcion: 'entrada vacia'};
    }
    for(const num of numbers) {
        const val = Number(num);
        if(isNaN(val)) {
            throw {
            descripcion: 'error de tipo', 
            numbers: numbers,
            tipos: numbers.map(n => isNaN(n) ? typeof n : 'number')
            }
        }
    }
}

function promedio(numbers) {
    let total = 0;
    for(const num of numbers) {
        const val = Number(num);
        total += val;
    }
    return total / numbers.length;
}

areNumbers(numbers);

const datos = {
    numeros: numbers,
    promedio: promedio(numbers),
    max: Math.max(...numbers),
    min: Math.min(...numbers),
    ejecutable: process.execPath.split('\\').pop(),
    pid: process.pid
}

console.log(datos);