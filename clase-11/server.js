const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static('public'));

let mensajes = [];

io.on('connection', socket => {
    console.log('nuevo cliente conectado');

    socket.emit('mensajes', mensajes);
    
    socket.on('mimensaje', data => {
        mensajes.push({socketid: socket.id, mensaje: data});
        io.sockets.emit('mensajes', mensajes);
    })
})

const PORT = 8080;
httpServer.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})