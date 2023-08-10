import express from 'express';
import mongoose from 'mongoose';
import usersRouter from './router/users.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const SERVER_PORT = 8080;

app.use("/api/users", usersRouter);


app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});

const DB = 'mongodb+srv://cuede:admin@cluster0.4bbenlw.mongodb.net/?retryWrites=true&w=majority'
const connectMongoDB = async () => {
    try {
        await mongoose.connect(DB);
        console.log("Conectado con exito a MongoDB usando Mongoose");
    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
}
connectMongoDB();