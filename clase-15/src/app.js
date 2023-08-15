import express from 'express';
import __dirname from './util.js';
import mongoose from 'mongoose';
import router from './routes/index.js';
// Completar imports que faltan


//Declarando Express para usar sus funciones.
const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Configuraciones de .hbs



//Declaración de Routers:

app.use('/', router);

const SERVER_PORT = 8080;
app.listen(8080, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});

const connectMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/colegio?retryWrites=true&w=majority');
        console.log("Conectado con exito a MongoDB usando Moongose.");
    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
};
connectMongoDB();