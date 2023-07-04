const dividirPromise = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        console.log(`promesa de dividir ${dividendo} / ${divisor}`);

        if (divisor === 0) {
            reject('no se puede dividir por cero');
        } else {
            resolve(dividendo / divisor);
        }
    })
}

const funcionAsincrona = async (a,b) => {
    try {
        let result = await dividirPromise(a, b);
        console.log(result);
    } catch (error) {
        console.log(`error en la promesa: ${error}`);
    }
} 

dividirPromise(5, 0)
    .then(resultado => console.log(resultado))
    .catch(err => console.log(err));

funcionAsincrona(10, 4);