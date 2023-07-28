import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewRouter from './routes/view.routes.js'
import { Server } from 'socket.io'

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');


app.use(express.static(__dirname + "/public"));


const httpServer = app.listen(PORT, () => {
    console.log("Server run on port: " + PORT);
})

app.use('/', viewRouter);

const socketServer = new Server(httpServer);

socketServer.on('connection', socket => {
    console.log("Nuevo cliente conectado!!");

    socket.on("mensajeKey", data => {
        console.log(data);
    })

    socket.emit('msg_02', "Mensaje desde el back!!")

    socket.broadcast.emit("evento_para_todos_excepto_socket_actual", "Este evento es para todos los sockets, menos el socket desde que se emitió el mensaje!")


    socketServer.emit("evento_para_todos", "Evento para todos los Sockets!");

})