const express = require('express');
const {Router} = express;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));


const personas = [];
const mascotas = [];

const routerMacotas = new Router();

routerMacotas.get('/', (req, res) => {
    res.json(mascotas);
})

routerMacotas.post('/', (req, res) => {
    mascotas.push(req.body);
    res.json({ok: 'ok'});
})

const routerPersonas = new Router();

routerPersonas.get('/', (req, res) => {
    res.json(personas);
})

routerPersonas.post('/', (req, res) => {
    personas.push(req.body);
    res.json({ok: 'ok'});
})

app.use('/mascotas', routerMacotas);
app.use('/personas', routerPersonas);

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Server listeinig in port ${PORT}`);
})