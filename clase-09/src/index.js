import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import usersRoutes from './routes/views.routes.js';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views/');
app.set('view engine', 'handlebars');

app.get('/hello', (req, res) => {
    let testUser = {
        name: 'Rodrigo',
        last_name: 'Vergara',
        edad: 22
    }
    res.render('hello', testUser);
})

app.get('/user', (req, res) => {
    const users = [
        {nombre: 'cuede', apellido: 'sas', edad: 22, correo: 'asdasdasjkdn@asdasdas.com', telefono: 666},
        {nombre: 'Lucia', apellido: 'Cardoso', edad: 26, correo: 'asdasdasjkdn@gmail.com', telefono: 123},
        {nombre: 'Miriam', apellido: 'Garcia', edad: 46, correo: 'tomalaka@asdasdas.com', telefono: 456},
        {nombre: 'Rodrigo', apellido: 'Vergara', edad: 22, correo: 'rodrigoveragra2001@gmail.com', telefono: 789},
        {nombre: 'mateo', apellido: 'orochi', edad: 21, correo: 'tute@asdasdas.com', telefono: 450}
    ]
    const user = users[Math.floor(Math.random() * 5)];
    res.render('user', user);
})

app.use('/', usersRoutes);


app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})