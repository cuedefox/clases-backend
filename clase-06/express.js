const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({ mensaje: 'hola mundo' })
 }) 

const server = app.listen(8080, () => {
    console.log("server listening in port 8080");
});

server.on('error', err => console.log(`error: ${err}`));