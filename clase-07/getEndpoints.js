const express = require('express');
const app = express();
const PORT = 8080;
const frase = "Hola mundo cómo están";

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/frase', (req, res) => {
    res.json({frs: frase});
})

app.get('/api/letras/:num', (req, res) => {
    const num = req.params.num;

    if (isNaN(num)) {
        return res.json({error: "El parametro ingresado no es un numero"});
    }

    if (num < 1 || num > frase.length) {
        return res.json({error: "El parametro ingresado esta fuera de rango"});
    }

    res.send(frase[num - 1])
})

app.get('/api/palabras/:num', (req, res) => {
    const num = req.params.num;

    if (isNaN(num)) {
        return res.json({error: "El parametro ingresado no es un numero"});
    }

    const palabras = frase.split(' ');

    if (num < 1 || num > palabras.length) {
        return res.json({error: "El parametro ingresado esta fuera de rango"});
    }

    res.send(palabras[num - 1])
})

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})

