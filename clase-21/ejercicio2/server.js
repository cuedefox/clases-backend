import express from "express";
const app = express();
import { faker } from '@faker-js/faker';
faker.locale = 'es';

app.get('/test', (req, res) => {
    const cant = Number(req.query.cant) || 10;
    const objs = [];
    for(let i = 0; i < cant; i++) {
        objs.push(getUser(i+1));
    }
    res.json(objs);
})

function getUser(id) {
    return {
        id: id,
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        color: faker.color.human()
    }
}

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})