import express from 'express';

const app = express();

function calcularRandoms(min, max, cant) {
    let nums = [];

    for(let i = 0; i < cant; i++) {
        let random = parseInt(Math.random() * (max - min + 1)) + min;
        nums.push(random);
    }

    return nums;
}

app.get('/random-debug', (req, res) => {
    let randoms = calcularRandoms(0, 9, 10000);
    res.json({randoms}).status(200);
})

app.get('/random-nodebug', (req, res) => {
    let randoms = calcularRandoms(0, 9, 10000);
    res.json({randoms});
})

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server runing on port ${PORT}`);
})