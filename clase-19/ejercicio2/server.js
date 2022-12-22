import mongoose from "mongoose";
import * as models from './models/estudiante.js';

const URL = 'mongodb://127.0.0.1:27017/colegio';
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Conectados correctamente');
    models.estudiantes.find().sort({nombre: 1})
    .then(estudiantes => {
        console.log('a');
        console.log(estudiantes);
    })
})
.then(() => {
    models.estudiantes.find().sort({edad: 1}).limit(1)
    .then(estudiante => {
        console.log('b');
        console.log(estudiante)
    })
})
.then(() => {
    models.estudiantes.find({curso: '2A'})
    .then(estudiantes => {
        console.log('c');
        console.log(estudiantes);
    })
})
.then(() => {
    models.estudiantes.find().sort({edad: 1}).limit(1).skip(1)
    .then(estudiante => {
        console.log('d');
        console.log(estudiante)
    })
})
.then(() => {
    models.estudiantes.find({}, {nombre: 1, apellido: 1, curso: 1, _id:0}).sort({apellido: -1})
    .then(estudiantes => {
        console.log('e');
        console.log(estudiantes);
    })
})
.then(() => {
    models.estudiantes.find({nota: 10})
    .then(estudiantes => {
        console.log('f');
        console.log(estudiantes);
    })
})
.then(() => {
    models.estudiantes.find({}, {nota: 1, _id: 0})
    .then(estudiantes => {
        console.log('g');
        let notaTotal = 0;
        estudiantes.forEach(estudiante => {
            notaTotal += estudiante.nota;
        })
        console.log(`Promedio ${notaTotal / estudiantes.length}`);
    })
})
.then(() => {
    models.estudiantes.find({curso: '1A'}, {nota: 1, _id: 0})
    .then(estudiantes => {
        console.log('h');
        let notaTotal = 0;
        estudiantes.forEach(estudiante => {
            notaTotal += estudiante.nota;
        })
        console.log(`Promedio 1A ${notaTotal / estudiantes.length}`);
    })
})
