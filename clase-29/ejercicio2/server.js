import express from 'express';
import cluster from 'cluster';
import os from 'os';

const numCpus = os.cpus().length;

if(cluster.isPrimary) {
    console.log(numCpus);
    console.log(`PID number: ${process.pid}`);

    for(let i = 0; i < numCpus; i++) {
        cluster.fork()
    }

    cluster.on('exit', worker => {
        console.log(`worker ${worker.process.pid} died, at ${new Date().toLocaleString()}`);
        cluster.fork();
    })
}else {
    const app = express();
    const PORT = parseInt(process.argv[2]) || 8080;

    app.get('/', (req, res) => {
        res.send(`Servidor express en puerto ${PORT} - <b> PID ${process.pid} </b> - ${new Date().toLocaleString()}`);
    })

    const server = app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT} - PID: ${process.pid}`);
    })
}