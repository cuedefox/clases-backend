//setTimeOut

function temporizador(callback) {
    setTimeout(() => {
        callback();
        console.log('tarea finalizada');
    }, 5000)
}

let operacion = () => console.log('Realizando operacion con setTimeOut');

// temporizador(operacion);

// setInterval
function contador() {
    let contador = 1;

    let timer = setInterval(() => {
        console.log(contador++);
        if (contador > 5) {
            clearInterval(timer);
        }
    }, 1000)
}

contador();