import express from 'express';
import {fork} from 'child_process';
import path from 'path';

const app = express();
const PORT = 8080;

function rapidoLentoEsFundamentalEstarSuelto() {
    let sum = 0;
    for(let i = 0; i < 5e9; i++) {
        sum += i;
    }
    return sum;
}

let visitas = 0;

app.get('/', (req, res) => {
    res.json({visitas: ++visitas});
})

app.get('/bloqueante', (req, res) => {
    const result = rapidoLentoEsFundamentalEstarSuelto();
    res.json({result});
})

app.get('/nobloqueante', (req, res) => {
    const calculo = fork(path.resolve(process.cwd(), 'calculo.js'));
    calculo.on('message', result => {
        if(result === 'listo') {
            calculo.send('start');
        }else {
            res.json(result);
        }
    });
})

const server = app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})

server.on('error', err => {
    console.log(err);
})