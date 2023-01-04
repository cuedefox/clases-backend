import express from "express";
const app = express();

const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana']
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']

app.get('/test', (req, res) => {
    const objs = [];
    for(let i = 0; i < 10; i++) {
        objs.push(getUser());
    }
    res.json(objs);
})

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getUser() {
    return {
        nombre: getRandomElement(nombres),
        apellido: getRandomElement(apellidos),
        color: getRandomElement(colores)
    }
}

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})