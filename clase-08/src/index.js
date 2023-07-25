import express from 'express';
import userRoutes from './routes/users.routes.js';
import petsRoutes from './routes/pets.routes.js';
import __dirname from './utils.js';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.use('/api/users', userRoutes);
app.use('/api/pet', petsRoutes);


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})