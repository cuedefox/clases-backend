import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import logger from './logger.js';

const PORT = process.env.PORT;
const app = express();

app.get('/sumar', (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);

    const child = logger.child({n1: n1, n2: n2});

    if(isNaN(n1) || isNaN(n2)) {
        child.error('parametros invalidos');
        return res.send('parametros invalidos');
    }

    child.info(`Parametros correctos: ${n1} + ${n2} = ${n1 + n2}`);
    res.send(`Parametros correctos: ${n1} + ${n2} = ${n1 + n2}`);
});

app.get('*', (req, res) => {
    const {url, method} = req;
    logger.warn(`Ruta ${method} ${url} no implementada`);
    res.send(`Ruta ${method} ${url} no implementada`);
})

const server = app.listen(PORT, err => {
    if (err) {
        logger.error(`Error iniciando el server: ${err}`);
    }
    logger.info(`Server listening on port ${PORT}`);
})

server.on('error', err => {
    logger.error(`Error: ${err}`);
})