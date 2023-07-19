import express from 'express';

const app = express();
const PORT = 8080;

app.get('/bienvenida', (req, res) => {
    res.send('<p style="color: blue;">Bienvenidos lpm me hacen usar html por string en express</p>');
});

app.get('/usuario', (req, res) => {
    res.send([{nombre: 'Rodrigo', apellido: 'Vergara', edad: 22, correo: 'rosjasjbnjaks@gmaosdmas.com'}]);
});

app.get('/usuario2/:nombre/:apellido', (req, res) => {
    console.log(req.params);
    res.send(`Hola ${req.params.nombre} ${req.params.apellido}`);
});

const usuarios = [
    { id: 1, nomnbre: "Juan", apellido: "Torres", edad: "X", genero: "M" },
    { id: 2, nomnbre: "Carlos", apellido: "Garcia", edad: "20", genero: "M" },
    { id: 3, nomnbre: "Maria", apellido: "Torres", edad: "15", genero: "F" },
    { id: 4, nomnbre: "Patricia", apellido: "Ramirez", edad: "30", genero: "F" }
];

app.get('/', (req, res) => {
    res.send(usuarios);
});

app.get('/:userId', (req, res) => {
    let {userId} = req.params;
    
    const usuario = usuarios.find(u => u.id == parseInt(userId));

    if(usuario){
        res.json({usuario});
    };

    res.send('Usuario no encontradooooooooo');
});

const consultas = []
// http://localhost:8080/ejemploQueries/query?nombre=Eli&apellido=Cafiero&edad=38
app.get('/ejemploQueries/query', (request, response) => {
    let datos = request.query;
    // console.log(datos);

    // let { nombre, apellido, edad } = request.query;
    // console.log(nombre, apellido, edad);

    consultas.push(datos)
    response.send(datos);
});

app.get('/ejemploQueries/query/all', (req, res) => {
    res.send(consultas)
})

app.get('/usuarios/query', (request, response) => {
    let { genero } = request.query;
    if (genero) {
        response.send(usuarios.filter(u => u.genero === genero));
    }
    response.send(usuarios);
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});