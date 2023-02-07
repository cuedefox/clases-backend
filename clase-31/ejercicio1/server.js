import express from 'express';
import compression from 'compression';

const app = express();

const mensaje = 'Hola que tal Rodrigo'.repeat(100000);

app.get('/saludo', (req, res) => {
    res.send(mensaje);
})

app.get('/saludo-zip', compression(), (req, res) => {
    res.send(mensaje);
})

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server runing on port ${PORT}`);
})