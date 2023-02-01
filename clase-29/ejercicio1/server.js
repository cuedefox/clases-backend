import express from 'express';

const app = express();

const PORT = parseInt(process.argv[2]) || 8080;

app.get('/', (req, res) => {
    res.send(`Servidor express en puerto ${PORT} - <b> PID ${process.pid} </b> - ${new Date().toLocaleString()}`);
})

const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})