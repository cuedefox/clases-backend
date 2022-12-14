const express = require('express');
const PORT = 8080;
const app = express();

app.get('/api/sumar/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;
    res.send({ suma: Number(num1) + Number(num2) });
})

app.get('/api/sumar', (req, res) => {
    const { num1, num2 } = req.query;
    res.send({ suma: Number(num1) + Number(num2) });
})

app.get('/api/operacion/:operacion', (req, res) => {
    const operacion = req.params.operacion;
    res.send({operacion: eval(operacion)});
})

app.post('/api', (req, res) => {
    res.send('ok post');
})

app.put('/api', (req, res) => {
    res.send('ok put');
})

app.delete('/api', (req, res) => {
    res.send('ok delete');
})


const server = app.listen(PORT, () => {
    console.log(`server listening in port ${PORT}`)
})