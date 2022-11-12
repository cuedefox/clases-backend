const { urlencoded } = require('express');
const express = require('express');
const multer = require('multer');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
})

const upload = multer({storage: storage});

const router = express.Router();

router.post('/subir', upload.single('miArchivo'), (req, res) => {
    const file = req.file;
    if(!file) {
       const error = new Error('No se subio ningun archivo');
       res.send(error); 
    }
    res.send(`Archivo: ${file.originalname} subido correctamente`);
});

app.use('/api', router);

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`);
})