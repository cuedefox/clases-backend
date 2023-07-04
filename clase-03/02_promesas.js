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

dividirPromise(5, 0)
    .then(resultado => console.log(resultado))
    .catch(err => console.log(err));