import express from 'express';
import cluster from 'cluster';
import os from 'os';

const app = express();

const MODO = process.argv[2] || 'FORK';

function calcularRandoms(min, max, cant) {
    let nums = [];

    for(let i = 0; i < cant; i++) {
        let random = parseInt(Math.random() * (max - min + 1)) + min;
        nums.push(random);
    }

    return nums;
}

app.get('/random-debug', (req, res) => {
    let randoms = calcularRandoms(0, 9, 10000);
    res.json({randoms}).status(200);
    console.log(randoms);
})

app.get('/random-nodebug', (req, res) => {
    let randoms = calcularRandoms(0, 9, 10000);
    res.json({randoms});
})

const PORT = 8080;

if(MODO == 'CLUSTER' && cluster.isPrimary) {
    const numCPUs = os.cpus().length;

    for(let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', worker => {
        cluster.fork();
    })
}else {
    app.listen(PORT, () => {
        console.log(`Server runing on port ${PORT}`);
    })
}