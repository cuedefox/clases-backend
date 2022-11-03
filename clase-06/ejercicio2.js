const express = require('express');

const app = express();

let visitas = 0;

app.get('/', (req, res) => {
    res.send('<h1>Hola mundorolo</h1>');
});

app.get('/visitas', (req, res) => {
    res.send('visitas:' + visitas++);
});

app.get('/fyh', (req, res) => {
    res.send({ fyh: new Date().toLocaleString() })
})

const server = app.listen(8080, () => {
    console.log("server listening in port 8080");
});

server.on('error', err => console.log(`error: ${err}`));