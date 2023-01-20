import express from 'express';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
const FileStore = sessionFileStore(session);

const app = express();

app.use(session({
    store: new FileStore({
        path: './sessions',
        ttl: 60
    }),
    secret: 'rodorigo',
    resave: false,
    saveUninitialized: false
}))

app.get('/', (req, res) => {
    if(!req.session.contador) {
        req.session.contador = 1;
        req.session.nombre = req.query.nombre || "Anakin";
        res.send(`hello there ${req.session.nombre}`);
    }else {
        req.session.contador++;
        res.send(`${req.session.nombre} visitaste la pagina ${req.session.contador} veces`);
    }
})

app.get('/olvidar', (req, res) => {
    const nombre = req.session.nombre || "";
    req.session.destroy(err => {
        if(err) {
            res.json({error: "un error ocurrio", descripcion: err});
        }else {
            res.json({respuesta: "todo salio bien " + nombre});
        }
    })
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})